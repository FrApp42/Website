---
sidebar_label: 'WPF.Pwsh'
sidebar_position: 9
---

# WPF.Pwsh

Ein WPF-Steuerelement, das eine echte PowerShell-Sitzung (ConPTY) hostet. Die Shell startet mit dem Steuerelement, wird über das Windows-Terminal-Steuerelement dargestellt und löst ein Ereignis aus, wenn sie beendet wird.

Nur Windows, `net8.0-windows` und `net10.0-windows`.

## Installation

```nuget
Install-Package FrApp42.WPF.Pwsh
```

## Verwendung

```csharp
// pwsh.exe, with powershell.exe as fallback
var terminal = new FrApp42.WPF.Pwsh.PwshTerminal();

// the shell exited
terminal.OnSessionDisconnected += (_, _) => CloseTab();

Content = terminal;
```

| Member | Beschreibung |
|---|---|
| `new PwshTerminal("wsl.exe")` | Startet eine andere Shell anstelle von PowerShell |
| `WorkingDirectory` | Verzeichnis, in dem die Shell startet |
| `FontFamily` / `FontSize` | Schriftart des Terminals (Standard `MesloLGS Nerd Font Mono`, 14) |
| `Disconnect()` | Beendet die Shell |
| `Dispose()` | Schließt die Sitzung |
| `OnSessionDisconnected` | Ereignis, das ausgelöst wird, wenn die Shell beendet wird |

## Links

* [Quellcode](https://github.com/FrApp42/WPF.Pwsh)
* [NuGet-Paket](https://www.nuget.org/packages/FrApp42.WPF.Pwsh)
