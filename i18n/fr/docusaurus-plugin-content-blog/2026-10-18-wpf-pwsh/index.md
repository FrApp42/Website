---
slug: wpf-pwsh-v1.0.0
title: WPF.Pwsh v1.0.0
authors: [sikelio]
tags: [wpf, csharp, releases]
---

## À propos

Première release de `FrApp42.WPF.Pwsh`, un contrôle WPF qui héberge une vraie session PowerShell (ConPTY). Le shell démarre avec le contrôle, est affiché via le contrôle Windows Terminal et déclenche un événement lorsqu'il se termine.

{/* truncate */}

```csharp
var terminal = new FrApp42.WPF.Pwsh.PwshTerminal();
terminal.OnSessionDisconnected += (_, _) => CloseTab();
Content = terminal;
```

Le paquet cible `net8.0-windows` et `net10.0-windows`. Consultez la [documentation](/docs/wpf-pwsh/) pour commencer.

## Changelog

Vous pouvez consulter le code source avec le lien suivant : [WPF.Pwsh](https://github.com/FrApp42/WPF.Pwsh/releases/tag/v1.0.0).
