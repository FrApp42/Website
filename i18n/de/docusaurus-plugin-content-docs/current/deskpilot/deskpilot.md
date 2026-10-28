---
sidebar_label: 'DeskPilot'
sidebar_position: 4
---

# DeskPilot

Open-Source-API-Server, Webkonsole und Rendezvous-Server für **RustDesk**, kompatibel mit dem offiziellen RustDesk-Client. DeskPilot deckt die Funktionen von RustDesk Server Pro ab: Konten, geteilte Adressbücher, Geräte, Strategien, Protokolle, SSO und, dank seines `hbbs`-Forks, Zugriffskontrolle, Gerätesperrung und ID-Änderung.

* Konsole und API: ASP.NET Core 10 + Blazor Server, PostgreSQL, EF Core
* Rendezvous: Fork von [rustdesk-server](https://github.com/rustdesk/rustdesk-server) (`hbbs/`), mit DeskPilot verbunden
* Französische Oberfläche, helles und dunkles Theme, auf Mobilgeräten nutzbar
* Lizenz: AGPL-3.0

## Funktionen

| Bereich | Was DeskPilot macht |
|---|---|
| Konten | Anmeldung über Client und Konsole, lokale Konten, Rollen Admin / Benutzer, Deaktivierung, Widerruf von Client-Sitzungen |
| Zwei-Faktor-Authentifizierung | TOTP, auch vom RustDesk-Client abgefragt |
| SSO | OpenID Connect (Keycloak, Authentik, Entra ID, Google…) mit PKCE, LDAP / Active Directory |
| Adressbücher | Persönliche und geteilte Adressbücher mit Lese- / Schreib- / Vollzugriffsrechten pro Benutzer oder Gruppe, farbige Tags, geteilte Passwörter |
| Geräte | Inventar, Online-Status, Besitzer, Gerätegruppe, Trennen von Remote-Sitzungen |
| Gruppen | Benutzergruppen und Gerätegruppen |
| Strategien | Konfigurationsoptionen, die auf Clients erzwungen werden, vererbt Gerät → Besitzer → Gruppe |
| Protokolle | Verbindungen, Dateiübertragungen, Sicherheitsalarme, Konsolenaktionen, CSV-Export |
| Aufzeichnungen | Empfang der von Clients hochgeladenen Sitzungsaufzeichnungen |
| Rollout | `rustdesk --assign` und `rustdesk --deploy` mit API-Tokens, `preset-*`-Optionen für angepasste Clients |
| Zugriffskontrolle (hbbs) | Offen, Konto erforderlich oder Konto + Gruppen |
| Berechtigungen pro Sitzung (hbbs) | Pro Benutzergruppe entzogene Berechtigungen (Dateien, Zwischenablage, Tastatur, Terminal…) |
| Geräte (hbbs) | Sperrung, ID-Freigabe beim Löschen, Echtzeit-Status, ID-Änderung über den Client mit Verlauf |
| Relays (hbbs) | Relay-Server pro Gerätegruppe wählbar |

### Der hbbs-Fork

Der RustDesk-Client spricht die HTTP-API nur für die Verwaltung an, Verbindungen laufen über `hbbs`. Der Ordner `hbbs/` enthält einen minimalen Fork von `rustdesk-server`, der:

* den **Schlüsselaustausch** durchführt, den bei einem Konto angemeldete Clients erwarten;
* bei jeder Verbindungsanfrage DeskPilot fragt und dessen Entscheidung anwendet;
* alle 10 s die Richtlinie abruft (gesperrte Geräte, Rollout, freizugebende IDs) und Online-Geräte meldet;
* die vom Client angeforderte ID-Änderung verarbeitet.

Ohne `DESKPILOT_URL` verhält sich dieser `hbbs` exakt wie das Original. DeskPilot funktioniert auch mit dem Standard-`hbbs`, allerdings ohne die mit „hbbs“ markierten Funktionen.

### Nicht abgedeckt

* Webclient (sein JavaScript-Teil wird von RustDesk nicht veröffentlicht)
* Generator für angepasste Clients und E-Mail-Verifizierungscodes
* Direkte IP- und LAN-Verbindungen umgehen `hbbs` und entgehen damit der Zugriffskontrolle (wie bei Pro)
* WebRTC-Angebote aktueller Clients werden noch nicht weitergeleitet

## Installation

### Docker

```bash
git clone https://github.com/FrApp42/DeskPilot.git && cd DeskPilot
cp .env.example .env        # POSTGRES_PASSWORD und HBBS_SECRET setzen (openssl rand -hex 32)
docker compose up -d
docker compose logs deskpilot | grep "admin account"   # generiertes Admin-Passwort
```

Die Konsole ist unter `http://<server>:21114` erreichbar. Der öffentliche Schlüssel für die Clients liegt in `data/rustdesk/id_ed25519.pub`.

Zu öffnende Ports: `21114/tcp` (Konsole + API), `21115-21117/tcp`, `21116/udp`, `21118-21119/tcp` (hbbs/hbbr).

## Verwendung

### RustDesk-Client konfigurieren

Settings › Network › ID/Relay server:

| Feld | Wert |
|---|---|
| ID-Server | `<server>` |
| Relay-Server | `<server>` |
| API-Server | `http://<server>:21114` (oder `https://rustdesk.example.com` hinter einem Reverse Proxy) |
| Schlüssel | Inhalt von `id_ed25519.pub` |

#### HTTPS

Betreibe DeskPilot hinter einem Reverse Proxy (Caddy, Traefik, nginx) mit gültigem Zertifikat und setze `PUBLIC_URL`. Der RustDesk-Client lehnt selbstsignierte Zertifikate ab. Die Blazor-Konsole nutzt WebSockets, der Proxy muss sie also durchlassen.

```caddyfile
rustdesk.example.com {
    reverse_proxy 127.0.0.1:21114
}
```

### Massen-Rollout

Erstelle ein Token unter Einstellungen › API-Tokens und führe dann auf jedem Rechner (mit Administratorrechten) aus:

```bash
# Den Rechner einem Benutzer, einer Gruppe, einer Strategie, einem geteilten Adressbuch zuweisen
rustdesk --assign --token dp_xxxxx --user_name jdupont --device_group_name Accounting \
         --strategy_name "Accounting machines" --address_book_name Servers --address_book_tag prod

# Einen Rechner vorregistrieren
rustdesk --deploy --token dp_xxxxx
```

## Links

* [Quellcode und vollständige Dokumentation](https://github.com/FrApp42/DeskPilot)
