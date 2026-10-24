---
sidebar_label: 'System'
---

# System

Collection de classes C# pour exécuter des opérations système.

## Installation

```nuget
Install-Package FrApp42.System
```

## Utilisation

### Avake \{#avake\}

Cette classe permet de gérer la mise en veille des machines.

:::warning
Fonctionne uniquement sous Windows.
:::

#### V1
#### Utilisation simple \{#simple-usage\}
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

#### Journaliser les erreurs d'Awake \{#log-awake-error\}
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
Avec la V2, pensez à désactiver KeepAwake avant de fermer l'application.
:::

#### Version mise à jour de Power Awake \{#updated-version-of-power-awake\}
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

### IsOnline \{#isonline\}

Permet de vérifier qu'une machine est en ligne grâce à un ping.

#### Vérifier si un appareil est en ligne \{#check-if-device-is-online\}

```csharp title="Program.cs"
using FrApp42.System.Net;

string address = "your-address";
string timeout = 5;

IsOnline online = new(address, timeout);

bool isOnline = online.Check();
```

### Shutdown (Windows uniquement) \{#shutdown-windows-only\}

Cette classe permet d'éteindre à distance des machines Windows.

:::warning
Fonctionne uniquement sur les machines Windows.
:::

#### Éteindre un ordinateur précis \{#shutdown-a-specific-computer\}

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

#### Ping avant l'extinction \{#ping-before-shutdown\}
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

#### Déconnecter l'utilisateur courant \{#log-off-the-current-user\}

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

#### Éteindre et se reconnecter automatiquement \{#shutdown-and-sign-on-automatically\}

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

#### Définir un délai et un motif personnalisé pour l'extinction \{#set-a-timeout-and-add-a-custom-reason-for-the-shutdown\}

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

### WakeOnLan \{#wakeonlan\}

Cette classe permet d'allumer une machine à partir de son adresse MAC grâce au Wake-on-LAN.

```csharp title="Program.cs"
using FrApp42.System.Net;

string macAddress = "your-mac-address";

await WakeOnLan.WakeUp(macAddress);
```

## Liens

* [Code source](https://github.com/FrApp42/Tools)
* [Paquet NuGet](https://www.nuget.org/packages/FrApp42.System)
