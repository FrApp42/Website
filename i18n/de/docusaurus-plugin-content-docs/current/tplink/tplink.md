---
sidebar_label: 'TPLink'
sidebar_position: 7
---

# TPLink

Inoffizielle C#-Bibliothek zum Lesen und Senden von SMS mit einem TP-Link Archer MR600 Router.

Zielplattform: `net8.0`.

## Installation

```nuget
Install-Package TP-Link
```

## Verwendung

```csharp
using FrApp42.TPLink;

Client client = new Client(url, username, password);
client.Send("0606060606", $"Hello {DateTime.Now}");
```

## Links

* [Quellcode](https://github.com/FrApp42/TPLink)
* [NuGet-Paket](https://www.nuget.org/packages/TP-Link)
