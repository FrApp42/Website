---
sidebar_label: 'DeskPilot'
sidebar_position: 4
---

# DeskPilot

Open source API server, web console and rendezvous server for **RustDesk**, compatible with the official RustDesk client. DeskPilot covers the features of RustDesk Server Pro: accounts, shared address books, devices, strategies, logs, SSO and, thanks to its `hbbs` fork, access control, device blocking and ID change.

* Console and API: ASP.NET Core 10 + Blazor Server, PostgreSQL, EF Core
* Rendezvous: fork of [rustdesk-server](https://github.com/rustdesk/rustdesk-server) (`hbbs/`), linked to DeskPilot
* French interface, light and dark theme, usable on mobile
* Licence: AGPL-3.0

## Features

| Area | What DeskPilot does |
|---|---|
| Accounts | Sign-in from the client and the console, local accounts, admin / user roles, deactivation, client session revocation |
| Two-factor authentication | TOTP, also requested by the RustDesk client |
| SSO | OpenID Connect (Keycloak, Authentik, Entra ID, Google…) with PKCE, LDAP / Active Directory |
| Address books | Personal and shared address books with read / write / full control rights per user or group, colored tags, shared passwords |
| Devices | Inventory, online presence, owner, device group, remote session cut |
| Groups | User groups and device groups |
| Strategies | Configuration options enforced on clients, inherited device → owner → group |
| Logs | Connections, file transfers, security alarms, console actions, CSV export |
| Recordings | Receives session recordings uploaded by clients |
| Deployment | `rustdesk --assign` and `rustdesk --deploy` with API tokens, `preset-*` options for custom clients |
| Access control (hbbs) | Open, account required, or account + groups |
| Per-session permissions (hbbs) | Permissions removed per user group (files, clipboard, keyboard, terminal…) |
| Devices (hbbs) | Blocking, ID release on deletion, real-time presence, ID change from the client with history |
| Relays (hbbs) | Relay server chosen per device group |

### The hbbs fork

The RustDesk client only talks to the HTTP API for management, connections go through `hbbs`. The `hbbs/` folder contains a minimal fork of `rustdesk-server` that:

* performs the **key exchange** expected by clients signed in to an account;
* asks DeskPilot on every connection request and applies its decision;
* fetches the policy every 10 s (blocked devices, deployment, IDs to release) and reports online devices;
* handles the ID change requested by the client.

Without `DESKPILOT_URL`, this `hbbs` behaves exactly like upstream. DeskPilot also works with the stock `hbbs`, without the features marked "hbbs".

### Not covered

* Web client (its JavaScript part is not published by RustDesk)
* Custom client generator and email verification codes
* Direct IP and LAN connections bypass `hbbs`, so they escape access control (as with Pro)
* WebRTC offers from recent clients are not relayed yet

## Installation

### Docker

```bash
git clone https://github.com/FrApp42/DeskPilot.git && cd DeskPilot
cp .env.example .env        # set POSTGRES_PASSWORD and HBBS_SECRET (openssl rand -hex 32)
docker compose up -d
docker compose logs deskpilot | grep "admin account"   # generated admin password
```

The console is available on `http://<server>:21114`. The public key to give to clients is in `data/rustdesk/id_ed25519.pub`.

Ports to open: `21114/tcp` (console + API), `21115-21117/tcp`, `21116/udp`, `21118-21119/tcp` (hbbs/hbbr).

## Usage

### Configure the RustDesk client

Settings › Network › ID/Relay server:

| Field | Value |
|---|---|
| ID server | `<server>` |
| Relay server | `<server>` |
| API server | `http://<server>:21114` (or `https://rustdesk.example.com` behind a reverse proxy) |
| Key | content of `id_ed25519.pub` |

#### HTTPS

Put DeskPilot behind a reverse proxy (Caddy, Traefik, nginx) with a valid certificate and set `PUBLIC_URL`. The RustDesk client refuses self-signed certificates. The Blazor console uses WebSockets, so the proxy must let them through.

```caddyfile
rustdesk.example.com {
    reverse_proxy 127.0.0.1:21114
}
```

### Bulk deployment

Create a token in Settings › API tokens, then on each machine (administrator rights):

```bash
# Assign the machine to a user, a group, a strategy, a shared address book
rustdesk --assign --token dp_xxxxx --user_name jdupont --device_group_name Accounting \
         --strategy_name "Accounting machines" --address_book_name Servers --address_book_tag prod

# Pre-register a machine
rustdesk --deploy --token dp_xxxxx
```

## Links

* [Source code and full documentation](https://github.com/FrApp42/DeskPilot)
