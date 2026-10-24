---
slug: acr122u-v1.0.0
title: ACR122U v1.0.0
authors: [sikelio]
tags: [acr122u, csharp, releases]
---

## À propos

Première release de `FrApp42.ACR122U`, une bibliothèque simple pour lire des cartes NFC avec un lecteur ACR122U.

{/* truncate */}

La [documentation](/docs/acr122u/) est prête et vous pouvez dès maintenant utiliser le paquet dans vos projets C#.

```csharp
Reader _reader = new Reader();

_reader.Connected += OnReaderConnected;
_reader.Inserted += OnCardInserted;
```

## Changelog

Vous pouvez consulter le changelog avec le lien suivant : [changelog](https://github.com/FrApp42/ACR122U/releases/tag/1.0.0).
