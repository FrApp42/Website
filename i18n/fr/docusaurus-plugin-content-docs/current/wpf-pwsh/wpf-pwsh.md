---
sidebar_label: 'WPF.Pwsh'
sidebar_position: 9
---

# WPF.Pwsh

Un contrôle WPF qui héberge une vraie session PowerShell (ConPTY). Le shell démarre avec le contrôle, est affiché via le contrôle Windows Terminal et déclenche un événement lorsqu'il se termine.

Windows uniquement, `net8.0-windows` et `net10.0-windows`.

## Installation

```nuget
Install-Package FrApp42.WPF.Pwsh
```

## Utilisation

```csharp
// pwsh.exe, with powershell.exe as fallback
var terminal = new FrApp42.WPF.Pwsh.PwshTerminal();

// the shell exited
terminal.OnSessionDisconnected += (_, _) => CloseTab();

Content = terminal;
```

| Membre | Description |
|---|---|
| `new PwshTerminal("wsl.exe")` | Lance un autre shell à la place de PowerShell |
| `WorkingDirectory` | Répertoire de démarrage du shell |
| `FontFamily` / `FontSize` | Police du terminal (par défaut `MesloLGS Nerd Font Mono`, 14) |
| `Disconnect()` | Arrête le shell |
| `Dispose()` | Ferme la session |
| `OnSessionDisconnected` | Événement déclenché quand le shell se termine |

## Liens

* [Code source](https://github.com/FrApp42/WPF.Pwsh)
* [Paquet NuGet](https://www.nuget.org/packages/FrApp42.WPF.Pwsh)
