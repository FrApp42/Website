---
slug: tplink-v1.0.0
title: TPLink v1.0.0
authors: [sikelio]
tags: [tplink, csharp, releases]
---

## Über dieses Release

Erstes Release der TPLink-Bibliothek, einer inoffiziellen C#-Bibliothek zum Lesen und Senden von SMS mit einem TP-Link Archer MR600 Router.

<!-- truncate -->

Sie basiert auf [plewin/tp-link-modem-router](https://github.com/plewin/tp-link-modem-router) und [hercule115/TPLink-Archer](https://github.com/hercule115/TPLink-Archer). Die [Dokumentation](/docs/tplink/) ist fertig.

```csharp
Client client = new Client(url, username, password);
client.Send("0606060606", $"Hello {DateTime.Now}");
```

## Changelog

Das Changelog findest du unter folgendem Link: [changelog](https://github.com/FrApp42/TPLink/releases/tag/1.0.0).
