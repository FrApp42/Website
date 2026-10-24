---
slug: tplink-v1.0.0
title: TPLink v1.0.0
authors: [sikelio]
tags: [tplink, csharp, releases]
---

## About

First release of the TPLink library, an unofficial C# library to read and send SMS with a TP-Link Archer MR600 router.

{/* truncate */}

It is based on [plewin/tp-link-modem-router](https://github.com/plewin/tp-link-modem-router) and [hercule115/TPLink-Archer](https://github.com/hercule115/TPLink-Archer). The [documentation](/docs/tplink/) is ready.

```csharp
Client client = new Client(url, username, password);
client.Send("0606060606", $"Hello {DateTime.Now}");
```

## Changelog

You can read the changelog with the following link: [changelog](https://github.com/FrApp42/TPLink/releases/tag/1.0.0).
