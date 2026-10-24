---
sidebar_label: 'System'
---

# System

Sammlung von C#-Klassen zur Ausführung von Systemoperationen.

## Installation

```nuget
Install-Package FrApp42.System
```

## Verwendung

### Avake {#avake}

Mit dieser Klasse kannst du den Ruhezustand von Rechnern steuern.

:::warning
Funktioniert nur unter Windows.
:::

#### V1
#### Einfache Verwendung {#simple-usage}
```cs title="Program.cs"
using FrApps42.System.Computer.Awake.v1;
...

// Keep Screen on
Awake.SetIndefiniteKeepAwake(true);
// Keep Screen off
Awake.SetIndefiniteKeepAwake(false);

// Disable Keep Awake
Awake.SetNoKeepAwake();

...

Awake.CompleteExit(0, false, "AppName");
```

#### Awake-Fehler protokollieren {#log-awake-error}
```cs title="Program.cs"
using FrApps42.System.Computer.Awake.v1;
...

private static void LogUnexpectedOrCancelledKeepAwakeThreadCompletion(){
    Console.WriteLine("The keep-awake thread was terminated early.");
}

private static void LogCompletedKeepAwakeThread(bool result)
{
    Console.WriteLine($"Exited keep-awake thread successfully: {result}");
}

// Keep Screen on
Awake..SetIndefiniteKeepAwake(LogCompletedKeepAwakeThread, LogUnexpectedOrCancelledKeepAwakeThreadCompletion,true);
// Keep Screen off
Awake..SetIndefiniteKeepAwake(LogCompletedKeepAwakeThread, LogUnexpectedOrCancelledKeepAwakeThreadCompletion,false);

// Disable Keep Awake
Awake.SetNoKeepAwake();

...

Awake.CompleteExit(0, false, "AppName");
```

#### V2

:::info
Deaktiviere in V2 unbedingt KeepAwake, bevor die Anwendung geschlossen wird.
:::

#### Aktualisierte Version von Power Awake {#updated-version-of-power-awake}
```cs title="Program.cs"
using FrApps42.System.Computer.Awake.v1;
...

private static void LogUnexpectedOrCancelledKeepAwakeThreadCompletion(){
    Console.WriteLine("The keep-awake thread was terminated early.");
}

private static void LogCompletedKeepAwakeThread(bool result)
{
    Console.WriteLine($"Exited keep-awake thread successfully: {result}");
}

// Keep Screen on
Awake.SetIndefiniteKeepAwake(true);
// Keep Screen off
Awake.SetIndefiniteKeepAwake(false);

// Keep Awake for a specified seconds with screen on
Awake.SetTimedKeepAwake(3600, true);
// Keep Awake for a specified seconds with screen off
Awake.SetTimedKeepAwake(3600, false);

// Disable Keep Awake
Awake.SetNoKeepAwake();
```

### IsOnline {#isonline}

Damit kannst du per Ping prüfen, ob ein Rechner online ist.

#### Prüfen, ob ein Gerät online ist {#check-if-device-is-online}

```csharp title="Program.cs"
using FrApp42.System.Net;

string address = "your-address";
string timeout = 5;

IsOnline online = new(address, timeout);

bool isOnline = online.Check();
```

### Shutdown (nur Windows) {#shutdown-windows-only}

Mit dieser Klasse kannst du Windows-Rechner aus der Ferne herunterfahren.

:::warning
Funktioniert nur auf Windows-Rechnern.
:::

#### Einen bestimmten Computer herunterfahren {#shutdown-a-specific-computer}

```csharp title="Program.cs"
using FrApp42.System.Computer.Shutdown;

string hostname = "your-hostame";

Shutdown shutdown = new();
shutdown
    .SetMachine(hostname)
    .ShutdownComputer();

ShutdownResult result = await shutdown.Run();

if (result.ExitCode == 0)
{
    Console.WriteLine("Shutdown command executed successfully.");
}
else
{
    Console.WriteLine($"Shutdown command failed with exit code {result.ExitCode}. Error: {result.ErrorMessage}");
}
```

#### Ping vor dem Herunterfahren {#ping-before-shutdown}
```cs
using FrApp42.System.Computer.Shutdown;

string hostname = "your-hostame";

Shutdown shutdown = new();
shutdown
    .SetMachine(hostname)
    .PingBefore(5);

ShutdownResult result = await shutdown.Run();

if (result.ExitCode == 0)
{
    Console.WriteLine("Shutdown command executed successfully.");
}
else
{
    Console.WriteLine($"Shutdown command failed with exit code {result.ExitCode}. Error: {result.ErrorMessage}");
}
```

#### Den aktuellen Benutzer abmelden {#log-off-the-current-user}

```csharp title="Program.cs"
using FrApp42.System.Computer.Shutdown;

Shutdown shutdown = new();
shutdown
    .LogoutUser();

ShutdownResult result = await shutdown.Run();

if (result.ExitCode == 0)
{
    Console.WriteLine("Shutdown command executed successfully.");
}
else
{
    Console.WriteLine($"Shutdown command failed with exit code {result.ExitCode}. Error: {result.ErrorMessage}");
}
```

#### Herunterfahren und automatisch anmelden {#shutdown-and-sign-on-automatically}

```csharp title="Program.cs"
using FrApp42.System.Computer.Shutdown;

Shutdown shutdown = new();
shutdown
    .ShutdownAndSignOn();

ShutdownResult result = await shutdown.Run();

if (result.ExitCode == 0)
{
    Console.WriteLine("Shutdown command executed successfully.");
}
else
{
    Console.WriteLine($"Shutdown command failed with exit code {result.ExitCode}. Error: {result.ErrorMessage}");
}
```

#### Zeitlimit und eigenen Grund für das Herunterfahren festlegen {#set-a-timeout-and-add-a-custom-reason-for-the-shutdown}

```csharp title="Program.cs"
using FrApp42.System.Computer.Shutdown;

Shutdown shutdown = new();
shutdown
    .SetTimeOut(60)
    .SetComment("Scheduled maintenance");

ShutdownResult result = await shutdown.Run();

if (result.ExitCode == 0)
{
    Console.WriteLine("Shutdown command executed successfully.");
}
else
{
    Console.WriteLine($"Shutdown command failed with exit code {result.ExitCode}. Error: {result.ErrorMessage}");
}
```

### WakeOnLan {#wakeonlan}

Mit dieser Klasse kannst du einen Rechner über seine MAC-Adresse per Wake-on-LAN einschalten.

```csharp title="Program.cs"
using FrApp42.System.Net;

string macAddress = "your-mac-address";

await WakeOnLan.WakeUp(macAddress);
```

## Links

* [Quellcode](https://github.com/FrApp42/Tools)
* [NuGet-Paket](https://www.nuget.org/packages/FrApp42.System)
