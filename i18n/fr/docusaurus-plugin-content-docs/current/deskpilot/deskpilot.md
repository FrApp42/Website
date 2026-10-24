---
sidebar_label: 'DeskPilot'
sidebar_position: 3
---

# DeskPilot

Serveur d'API, console web et serveur de rendez-vous open source pour **RustDesk**, compatible avec le client RustDesk officiel. DeskPilot reprend les fonctions de RustDesk Server Pro : comptes, carnets d'adresses partagés, appareils, stratégies, journaux, SSO et, grâce à son fork de `hbbs`, contrôle d'accès, blocage d'appareils et changement d'ID.

* Console et API : ASP.NET Core 10 + Blazor Server, PostgreSQL, EF Core
* Rendez-vous : fork de [rustdesk-server](https://github.com/rustdesk/rustdesk-server) (`hbbs/`), relié à DeskPilot
* Interface en français, thème clair et sombre, utilisable sur mobile
* Licence : AGPL-3.0

## Fonctionnalités

| Domaine | Ce que fait DeskPilot |
|---|---|
| Comptes | Connexion depuis le client et la console, comptes locaux, rôles admin / utilisateur, désactivation, révocation des sessions client |
| Double authentification | TOTP, demandée aussi par le client RustDesk |
| SSO | OpenID Connect (Keycloak, Authentik, Entra ID, Google…) avec PKCE, LDAP / Active Directory |
| Carnets d'adresses | Carnets personnels et partagés avec droits lecture / écriture / contrôle total par utilisateur ou par groupe, étiquettes colorées, mots de passe partagés |
| Appareils | Inventaire, présence en ligne, propriétaire, groupe d'appareils, coupure de session à distance |
| Groupes | Groupes d'utilisateurs et groupes d'appareils |
| Stratégies | Options de configuration imposées aux clients, héritées appareil → propriétaire → groupe |
| Journaux | Connexions, transferts de fichiers, alarmes de sécurité, actions de la console, export CSV |
| Enregistrements | Réception des enregistrements de session téléversés par les clients |
| Déploiement | `rustdesk --assign` et `rustdesk --deploy` avec jetons d'API, options `preset-*` pour les clients personnalisés |
| Contrôle d'accès (hbbs) | Ouvert, compte obligatoire, ou compte + groupes |
| Permissions par session (hbbs) | Permissions retirées par groupe d'utilisateurs (fichiers, presse-papiers, clavier, terminal…) |
| Appareils (hbbs) | Blocage, libération d'ID à la suppression, présence en temps réel, changement d'ID depuis le client avec historique |
| Relais (hbbs) | Serveur relais choisi par groupe d'appareils |

### Le fork de hbbs

Le client RustDesk ne parle à l'API HTTP que pour la gestion ; les connexions passent par `hbbs`. Le dossier `hbbs/` contient un fork minimal de `rustdesk-server` qui :

* réalise l'**échange de clés** attendu par les clients connectés à un compte ;
* interroge DeskPilot à chaque demande de connexion et applique sa décision ;
* récupère la politique toutes les 10 s (appareils bloqués, déploiement, ID à libérer) et remonte les appareils en ligne ;
* gère le changement d'ID demandé par le client.

Sans `DESKPILOT_URL`, ce `hbbs` se comporte exactement comme l'amont. DeskPilot fonctionne aussi avec le `hbbs` libre, sans les fonctions marquées « hbbs ».

### Ce qui n'est pas couvert

* Client web (sa partie JavaScript n'est pas publiée par RustDesk)
* Générateur de client personnalisé et codes de vérification par e-mail
* Les connexions directes par IP et sur le réseau local ne passent pas par `hbbs` et échappent au contrôle d'accès (comme avec Pro)
* Les offres WebRTC des clients récents ne sont pas encore relayées

## Installation

### Docker

```bash
git clone https://github.com/FrApp42/DeskPilot.git && cd DeskPilot
cp .env.example .env        # renseigner POSTGRES_PASSWORD et HBBS_SECRET (openssl rand -hex 32)
docker compose up -d
docker compose logs deskpilot | grep "admin account"   # mot de passe admin généré
```

La console est disponible sur `http://<serveur>:21114`. La clé publique à donner aux clients se trouve dans `data/rustdesk/id_ed25519.pub`.

Ports à ouvrir : `21114/tcp` (console + API), `21115-21117/tcp`, `21116/udp`, `21118-21119/tcp` (hbbs/hbbr).

## Utilisation

### Configurer le client RustDesk

Settings › Network › ID/Relay server:

| Champ | Valeur |
|---|---|
| Serveur d'ID | `<serveur>` |
| Serveur relais | `<serveur>` |
| Serveur API | `http://<serveur>:21114` (ou `https://rustdesk.exemple.fr` derrière un reverse proxy) |
| Clé | contenu de `id_ed25519.pub` |

#### HTTPS

Placez DeskPilot derrière un reverse proxy (Caddy, Traefik, nginx) avec un certificat valide et renseignez `PUBLIC_URL`. Le client RustDesk refuse les certificats auto-signés. La console Blazor utilise des WebSockets : le proxy doit les laisser passer.

```caddyfile
rustdesk.exemple.fr {
    reverse_proxy 127.0.0.1:21114
}
```

### Déploiement en masse

Créez un jeton dans Paramètres › Jetons d'API, puis sur chaque poste (droits administrateur) :

```bash
# Rattacher le poste à un utilisateur, un groupe, une stratégie, un carnet partagé
rustdesk --assign --token dp_xxxxx --user_name jdupont --device_group_name Accounting \
         --strategy_name "Accounting machines" --address_book_name Servers --address_book_tag prod

# Pré-enregistrer un poste
rustdesk --deploy --token dp_xxxxx
```

## Liens

* [Code source et documentation complète](https://github.com/FrApp42/DeskPilot)
