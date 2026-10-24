---
sidebar_label: 'ACR122U'
sidebar_position: 2
---

# ACR122U

Bibliothèque C# simple pour lire des cartes NFC avec un lecteur ACR122U.

Cible `net8.0` et `net10.0`.

## Installation

```nuget
Install-Package FrApp42.ACR122U
```

## Utilisation

### Détection des cartes

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

| Événement | Argument | Déclenché quand |
|---|---|---|
| `Connected` | nom du lecteur | un lecteur est branché |
| `Disconnected` | nom du lecteur | un lecteur est débranché |
| `Inserted` | UID de la carte | une carte est détectée |
| `Removed` | aucun | une carte est retirée |

### Lecture et écriture de blocs

Depuis la v1.1.0, `Reader` expose des méthodes pour lire et écrire des blocs de carte. La `key` optionnelle est chargée dans l'emplacement du lecteur indiqué par `KeyLocation`.

```csharp
byte[] data = _reader.ReadBinary(KeyLocation.Slot1, block: 4, lenght: 16, key);
bool written = _reader.WriteBinary(KeyLocation.Slot1, 4, data, key);
```

| Méthode | Description |
|---|---|
| `ReadBinary(block, lenght, key?)` / `ReadBinary(slot, block, lenght, key?)` | Lit `lenght` octets d'un bloc |
| `WriteBinary(block, data, key?)` / `WriteBinary(slot, block, data, key?)` | Écrit des données dans un bloc |
| `UpdateBinary(P1, P2, data)` | Commande update binary brute |

## Liens

* [Code source](https://github.com/FrApp42/ACR122U)
* [Paquet NuGet](https://www.nuget.org/packages/FrApp42.ACR122U)
