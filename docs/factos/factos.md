---
sidebar_label: 'Factos'
sidebar_position: 4
---

# Factos

A clone of [InvoiceShelf](https://github.com/InvoiceShelf/InvoiceShelf) rewritten in **C# / Blazor** (.NET 10): estimates, invoices, payments, expenses and purchasing, with an InvoiceShelf-compatible REST API.

:::caution Under development
The web UI is usable end to end, but the `/api/v1` API is only partially ported (Accounts domain). The mobile app (iOS / Android) lives in a separate repository.
:::

## Features

* **Sales**: customers, items, estimates, invoices, recurring invoices (cron), credit notes, payments split across several invoices, customer credits.
* **Purchasing**: suppliers, supplier invoices and credit notes, payments, refunds.
* **Expenses** and a cash-flow **dashboard**.
* **PDF** (QuestPDF) with customizable templates, **email delivery** (SMTP) with open tracking, public links for customers.
* **Custom fields**: definitions, input and printing.
* Logo, 4 UI themes, light / dark mode.
* **Three databases**, chosen at install time: SQLite, PostgreSQL or MySQL.
* **Import** from an existing InvoiceShelf installation (accounts, passwords and API tokens are kept).
* **API parity**: an existing InvoiceShelf API client should work unchanged (Sanctum Bearer auth, Laravel-style envelopes and errors).

## Installation

### Docker

```bash
docker compose up -d
```

### From source

```bash
dotnet run --project src/Factos
```

## Usage

### First launch

* **Docker**: open `http://localhost:8080`. The setup wizard walks you through the database, the administrator account and the company. All persistent state lives in the `/app/App_Data` volume.
* **From source**: open `http://localhost:5221`. On first launch, the `/setup` wizard writes `appsettings.local.json` and then stops the process: run the command again.

### Updates

* **Schema**: no migration ever runs at startup. A pending migration redirects to `/update`, where a super admin confirms.
* **Application**: Settings › Updates downloads the latest GitHub release.

### Roadmap

* Complete the `/api/v1` endpoints to reach full parity with InvoiceShelf
* Mobile app (.NET MAUI Blazor Hybrid)
* Plugin management
* Automatic backup module
* Two-factor authentication (TOTP)
* Passkey authentication (WebAuthn)

## Links

* [Source code](https://github.com/FrApp42/Factos)
