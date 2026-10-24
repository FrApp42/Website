---
slug: acr122u-v1.0.0
title: ACR122U v1.0.0
authors: [sikelio]
tags: [acr122u, csharp, releases]
---

## About

First release of `FrApp42.ACR122U`, a simple library to read NFC cards with an ACR122U card reader.

{/* truncate */}

The [documentation](/docs/acr122u/) is ready and you can start using the package in your C# projects.

```csharp
Reader _reader = new Reader();

_reader.Connected += OnReaderConnected;
_reader.Inserted += OnCardInserted;
```

## Changelog

You can read the changelog with the following link: [changelog](https://github.com/FrApp42/ACR122U/releases/tag/1.0.0).
