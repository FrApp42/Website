---
slug: wpf-pwsh-v1.0.0
title: WPF.Pwsh v1.0.0
authors: [sikelio]
tags: [wpf, csharp, releases]
---

## Über dieses Release

Erstes Release von `FrApp42.WPF.Pwsh`, einem WPF-Steuerelement, das eine echte PowerShell-Sitzung (ConPTY) hostet. Die Shell startet mit dem Steuerelement, wird über das Windows-Terminal-Steuerelement dargestellt und löst ein Ereignis aus, wenn sie beendet wird.

{/* truncate */}

```csharp
var terminal = new FrApp42.WPF.Pwsh.PwshTerminal();
terminal.OnSessionDisconnected += (_, _) => CloseTab();
Content = terminal;
```

Das Paket zielt auf `net8.0-windows` und `net10.0-windows`. Lies die [Dokumentation](/docs/wpf-pwsh/) für den Einstieg.

## Changelog

Den Quellcode findest du unter folgendem Link: [WPF.Pwsh](https://github.com/FrApp42/WPF.Pwsh/releases/tag/v1.0.0).
