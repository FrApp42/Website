---
sidebar_label: 'ACR122U'
sidebar_position: 2
---

# ACR122U

Simple C# library to read NFC cards with an ACR122U card reader.

Targets `net8.0` and `net10.0`.

## Installation

```nuget
Install-Package FrApp42.ACR122U
```

## Usage

### Card detection

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

| Event | Argument | Raised when |
|---|---|---|
| `Connected` | reader name | a reader is plugged in |
| `Disconnected` | reader name | a reader is unplugged |
| `Inserted` | card UID | a card is detected |
| `Removed` | none | a card is removed |

### Reading and writing blocks

Since v1.1.0, `Reader` exposes methods to read and write card blocks. The optional `key` is loaded into the reader slot given by `KeyLocation`.

```csharp
byte[] data = _reader.ReadBinary(KeyLocation.Slot1, block: 4, lenght: 16, key);
bool written = _reader.WriteBinary(KeyLocation.Slot1, 4, data, key);
```

| Method | Description |
|---|---|
| `ReadBinary(block, lenght, key?)` / `ReadBinary(slot, block, lenght, key?)` | Reads `lenght` bytes from a block |
| `WriteBinary(block, data, key?)` / `WriteBinary(slot, block, data, key?)` | Writes data to a block |
| `UpdateBinary(P1, P2, data)` | Raw update binary command |

## Links

* [Source code](https://github.com/FrApp42/ACR122U)
* [NuGet package](https://www.nuget.org/packages/FrApp42.ACR122U)
