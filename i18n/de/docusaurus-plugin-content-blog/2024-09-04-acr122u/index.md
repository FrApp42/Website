---
slug: acr122u-v1.0.0
title: ACR122U v1.0.0
authors: [sikelio]
tags: [acr122u, csharp, releases]
---

## Über dieses Release

Erstes Release von `FrApp42.ACR122U`, einer einfachen Bibliothek zum Lesen von NFC-Karten mit einem ACR122U-Kartenleser.

{/* truncate */}

Die [Dokumentation](/docs/acr122u/) ist fertig und du kannst das Paket ab sofort in deinen C#-Projekten verwenden.

```csharp
Reader _reader = new Reader();

_reader.Connected += OnReaderConnected;
_reader.Inserted += OnCardInserted;
```

## Changelog

Das Changelog findest du unter folgendem Link: [changelog](https://github.com/FrApp42/ACR122U/releases/tag/1.0.0).
