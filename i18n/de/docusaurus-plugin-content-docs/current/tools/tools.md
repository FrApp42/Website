---
sidebar_label: 'Tools'
sidebar_position: 6
---

# Tools

Hier findest du die Dokumentation aller NuGet-Pakete, die im Repository [Tools](https://github.com/FrApp42/Tools) entwickelt werden.

## Pakete

| Paket | Beschreibung | Dokumentation |
|---|---|---|
| `FrApp42.System` | Klassen zur Ausführung von Systemoperationen | [System](/docs/tools/system/) |
| `FrApp42.Web` | Klassen zur Ausführung von Weboperationen | [Web](/docs/tools/web/) |

## Inhalt

### System

* **Awake**: einen Rechner wach halten, mit ein- oder ausgeschaltetem Bildschirm
* **IsOnline**: ein Gerät per Hostname oder IP-Adresse anpingen, um zu prüfen, ob es online ist
* **Shutdown**: ein Windows-Gerät per SMB aus der Ferne herunterfahren
* **WakeOnLan**: ein Gerät über seine MAC-Adresse einschalten

### Web

* **Request**: HTTP-Anfragen vereinfachen (JSON und XML, Binär- und Rohdateien)

## Installation

```nuget
Install-Package FrApp42.System
Install-Package FrApp42.Web
```

## Links

* [Quellcode](https://github.com/FrApp42/Tools)
* [NuGet-Paket: FrApp42.System](https://www.nuget.org/packages/FrApp42.System)
* [NuGet-Paket: FrApp42.Web](https://www.nuget.org/packages/FrApp42.Web)
