---
sidebar_label: 'ACR122U'
sidebar_position: 2
---

# ACR122U

Einfache C#-Bibliothek zum Lesen von NFC-Karten mit einem ACR122U-Kartenleser.

Zielplattformen: `net8.0` und `net10.0`.

## Installation

```nuget
Install-Package FrApp42.ACR122U
```

## Verwendung

### Kartenerkennung

```csharp
using FrApp42.ACR122U;

Reader _reader = new Reader();

_reader.Connected += OnReaderConnected;
_reader.Disconnected += OnReaderDisconnected;
_reader.Inserted += OnCardInserted;
_reader.Removed += OnCardRemoved;

private void OnReaderConnected(string value)
{
    Console.WriteLine($"New reader connected : {value}");
}

private void OnReaderDisconnected(string value)
{
    Console.WriteLine($"Reader disconnected : {value}");
}

private void OnCardInserted(string uid)
{
    Console.WriteLine($"New card detected : {uid}");
}

private void OnCardRemoved()
{
    Console.WriteLine("Card removed");
}
```

| Ereignis | Argument | Ausgelöst, wenn |
|---|---|---|
| `Connected` | Name des Lesers | ein Leser angeschlossen wird |
| `Disconnected` | Name des Lesers | ein Leser getrennt wird |
| `Inserted` | Karten-UID | eine Karte erkannt wird |
| `Removed` | keines | eine Karte entfernt wird |

### Blöcke lesen und schreiben

Seit v1.1.0 stellt `Reader` Methoden zum Lesen und Schreiben von Kartenblöcken bereit. Der optionale `key` wird in den über `KeyLocation` angegebenen Slot des Lesers geladen.

```csharp
byte[] data = _reader.ReadBinary(KeyLocation.Slot1, block: 4, lenght: 16, key);
bool written = _reader.WriteBinary(KeyLocation.Slot1, 4, data, key);
```

| Methode | Beschreibung |
|---|---|
| `ReadBinary(block, lenght, key?)` / `ReadBinary(slot, block, lenght, key?)` | Liest `lenght` Bytes aus einem Block |
| `WriteBinary(block, data, key?)` / `WriteBinary(slot, block, data, key?)` | Schreibt Daten in einen Block |
| `UpdateBinary(P1, P2, data)` | Rohes Update-Binary-Kommando |

## Links

* [Quellcode](https://github.com/FrApp42/ACR122U)
* [NuGet-Paket](https://www.nuget.org/packages/FrApp42.ACR122U)
