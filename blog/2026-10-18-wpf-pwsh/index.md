---
slug: wpf-pwsh-v1.0.0
title: WPF.Pwsh v1.0.0
authors: [sikelio]
tags: [wpf, csharp, releases]
---

## About

First release of `FrApp42.WPF.Pwsh`, a WPF control that hosts a real PowerShell session (ConPTY). The shell starts with the control, is rendered through the Windows Terminal control, and raises an event when it exits.

{/* truncate */}

```csharp
var terminal = new FrApp42.WPF.Pwsh.PwshTerminal();
terminal.OnSessionDisconnected += (_, _) => CloseTab();
Content = terminal;
```

The package targets `net8.0-windows` and `net10.0-windows`. Read the [documentation](/docs/wpf-pwsh/) to get started.

## Changelog

You can read the source with the following link: [WPF.Pwsh](https://github.com/FrApp42/WPF.Pwsh/releases/tag/v1.0.0).
