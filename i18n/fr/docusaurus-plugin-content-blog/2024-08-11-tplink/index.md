---
slug: tplink-v1.0.0
title: TPLink v1.0.0
authors: [sikelio]
tags: [tplink, csharp, releases]
---

## À propos

Première release de la bibliothèque TPLink, une bibliothèque C# non officielle pour lire et envoyer des SMS avec un routeur TP-Link Archer MR600.

<!-- truncate -->

Elle est basée sur [plewin/tp-link-modem-router](https://github.com/plewin/tp-link-modem-router) et [hercule115/TPLink-Archer](https://github.com/hercule115/TPLink-Archer). La [documentation](/docs/tplink/) est prête.

```csharp
Client client = new Client(url, username, password);
client.Send("0606060606", $"Hello {DateTime.Now}");
```

## Changelog

Vous pouvez consulter le changelog avec le lien suivant : [changelog](https://github.com/FrApp42/TPLink/releases/tag/1.0.0).
