---
sidebar_label: 'TPLink'
sidebar_position: 7
---

# TPLink

Unofficial C# library to read and send SMS with a TP-Link Archer MR600 router.

Targets `net8.0`.

## Installation

```nuget
Install-Package TP-Link
```

## Usage

```csharp
using FrApp42.TPLink;

Client client = new Client(url, username, password);
client.Send("0606060606", $"Hello {DateTime.Now}");
```

## Links

* [Source code](https://github.com/FrApp42/TPLink)
* [NuGet package](https://www.nuget.org/packages/TP-Link)
