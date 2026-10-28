---
sidebar_label: 'Factos'
sidebar_position: 5
---

# Factos

Ein Klon von [InvoiceShelf](https://github.com/InvoiceShelf/InvoiceShelf), neu geschrieben in **C# / Blazor** (.NET 10): Angebote, Rechnungen, Zahlungen, Ausgaben und Einkauf, mit einer InvoiceShelf-kompatiblen REST-API.

:::caution In Entwicklung
Die Weboberfläche ist durchgängig nutzbar, die API `/api/v1` ist jedoch nur teilweise portiert (Bereich Konten). Die mobile App (iOS / Android) liegt in einem separaten Repository.
:::

## Funktionen

* **Verkauf**: Kunden, Artikel, Angebote, Rechnungen, wiederkehrende Rechnungen (Cron), Gutschriften, auf mehrere Rechnungen verteilte Zahlungen, Kundenguthaben.
* **Einkauf**: Lieferanten, Lieferantenrechnungen und -gutschriften, Zahlungen, Erstattungen.
* **Ausgaben** und ein **Dashboard** zum Cashflow.
* **PDF** (QuestPDF) mit anpassbaren Vorlagen, **E-Mail-Versand** (SMTP) mit Öffnungsverfolgung, öffentliche Links für Kunden.
* **Benutzerdefinierte Felder**: Definition, Eingabe und Druck.
* Logo, 4 Oberflächen-Themes, heller / dunkler Modus.
* **Drei Datenbanken**, bei der Installation wählbar: SQLite, PostgreSQL oder MySQL.
* **Import** aus einer bestehenden InvoiceShelf-Installation (Konten, Passwörter und API-Tokens bleiben erhalten).
* **API-Parität**: Ein bestehender InvoiceShelf-API-Client sollte unverändert funktionieren (Sanctum-Bearer-Authentifizierung, Laravel-typische Umschläge und Fehler).

## Installation

### Docker

```bash
docker compose up -d
```

### Aus dem Quellcode

```bash
dotnet run --project src/Factos
```

## Verwendung

### Erster Start

* **Docker**: Öffne `http://localhost:8080`. Der Einrichtungsassistent führt dich durch Datenbank, Administratorkonto und Unternehmen. Der gesamte persistente Zustand liegt im Volume `/app/App_Data`.
* **Aus dem Quellcode**: Öffne `http://localhost:5221`. Beim ersten Start schreibt der Assistent `/setup` die Datei `appsettings.local.json` und beendet dann den Prozess: Führe den Befehl erneut aus.

### Updates

* **Schema**: Beim Start läuft nie eine Migration. Eine ausstehende Migration leitet auf `/update` um, wo ein Super-Admin sie bestätigt.
* **Anwendung**: Einstellungen › Updates lädt das neueste GitHub-Release herunter.

### Roadmap

* Die Endpunkte unter `/api/v1` vervollständigen, um volle Parität mit InvoiceShelf zu erreichen
* Mobile App (.NET MAUI Blazor Hybrid)
* Plugin-Verwaltung
* Modul für automatische Backups
* Zwei-Faktor-Authentifizierung (TOTP)
* Passkey-Authentifizierung (WebAuthn)

## Links

* [Quellcode](https://github.com/FrApp42/Factos)
