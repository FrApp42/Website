---
sidebar_label: 'Factos'
sidebar_position: 5
---

# Factos

Un clone d'[InvoiceShelf](https://github.com/InvoiceShelf/InvoiceShelf) réécrit en **C# / Blazor** (.NET 10) : devis, factures, paiements, dépenses et achats, avec une API REST compatible InvoiceShelf.

:::caution En développement
L'interface web est utilisable de bout en bout, mais l'API `/api/v1` n'est portée que partiellement (domaine Comptes). L'application mobile (iOS / Android) se trouve dans un dépôt séparé.
:::

## Fonctionnalités

* **Ventes** : clients, articles, devis, factures, factures récurrentes (cron), avoirs, paiements répartis sur plusieurs factures, crédits clients.
* **Achats** : fournisseurs, factures et avoirs fournisseurs, paiements, remboursements.
* **Dépenses** et un **tableau de bord** de trésorerie.
* **PDF** (QuestPDF) avec modèles personnalisables, **envoi par e-mail** (SMTP) avec suivi d'ouverture, liens publics pour les clients.
* **Champs personnalisés** : définitions, saisie et impression.
* Logo, 4 thèmes d'interface, mode clair / sombre.
* **Trois bases de données**, choisies à l'installation : SQLite, PostgreSQL ou MySQL.
* **Import** depuis une installation InvoiceShelf existante (comptes, mots de passe et jetons d'API conservés).
* **Parité de l'API** : un client de l'API InvoiceShelf existant doit fonctionner sans modification (authentification Bearer Sanctum, enveloppes et erreurs au format Laravel).

## Installation

### Docker

```bash
docker compose up -d
```

### Depuis les sources

```bash
dotnet run --project src/Factos
```

## Utilisation

### Premier lancement

* **Docker** : ouvrez `http://localhost:8080`. L'assistant d'installation vous guide pour la base de données, le compte administrateur et l'entreprise. Tout l'état persistant se trouve dans le volume `/app/App_Data`.
* **Depuis les sources** : ouvrez `http://localhost:5221`. Au premier lancement, l'assistant `/setup` écrit `appsettings.local.json` puis arrête le processus : relancez la commande.

### Mises à jour

* **Schéma** : aucune migration ne s'exécute au démarrage. Une migration en attente redirige vers `/update`, où un super administrateur confirme.
* **Application** : Paramètres › Mises à jour télécharge la dernière release GitHub.

### Feuille de route

* Compléter les endpoints `/api/v1` pour atteindre la parité complète avec InvoiceShelf
* Application mobile (.NET MAUI Blazor Hybrid)
* Gestion de plugins
* Module de sauvegarde automatique
* Authentification à deux facteurs (TOTP)
* Authentification par passkey (WebAuthn)

## Liens

* [Code source](https://github.com/FrApp42/Factos)
