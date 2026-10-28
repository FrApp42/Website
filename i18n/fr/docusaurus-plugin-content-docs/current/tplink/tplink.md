---
sidebar_label: 'TPLink'
sidebar_position: 7
---

# TPLink

Bibliothèque C# non officielle pour lire et envoyer des SMS avec un routeur TP-Link Archer MR600.

Cible `net8.0`.

## Installation

```nuget
Install-Package TP-Link
```

## Utilisation

```csharp
using FrApp42.TPLink;

Client client = new Client(url, username, password);
client.Send("0606060606", $"Hello {DateTime.Now}");
```

## Liens

* [Code source](https://github.com/FrApp42/TPLink)
* [Paquet NuGet](https://www.nuget.org/packages/TP-Link)
