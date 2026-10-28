---
sidebar_label: 'WPF.Pwsh'
sidebar_position: 9
---

# WPF.Pwsh

A WPF control that hosts a real PowerShell session (ConPTY). The shell starts with the control, is rendered through the Windows Terminal control, and raises an event when it exits.

Windows only, `net8.0-windows` and `net10.0-windows`.

## Installation

```nuget
Install-Package FrApp42.WPF.Pwsh
```

## Usage

```csharp
// pwsh.exe, with powershell.exe as fallback
var terminal = new FrApp42.WPF.Pwsh.PwshTerminal();

// the shell exited
terminal.OnSessionDisconnected += (_, _) => CloseTab();

Content = terminal;
```

| Member | Description |
|---|---|
| `new PwshTerminal("wsl.exe")` | Runs any other shell instead of PowerShell |
| `WorkingDirectory` | Directory the shell starts in |
| `FontFamily` / `FontSize` | Terminal font (default `MesloLGS Nerd Font Mono`, 14) |
| `Disconnect()` | Kills the shell |
| `Dispose()` | Tears the session down |
| `OnSessionDisconnected` | Event raised when the shell exits |

## Links

* [Source code](https://github.com/FrApp42/WPF.Pwsh)
* [NuGet package](https://www.nuget.org/packages/FrApp42.WPF.Pwsh)
