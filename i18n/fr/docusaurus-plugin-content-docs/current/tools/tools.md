---
sidebar_label: 'Tools'
sidebar_position: 5
---

# Tools

Vous trouverez ici la documentation de tous les paquets NuGet développés dans le dépôt [Tools](https://github.com/FrApp42/Tools).

## Paquets

| Paquet | Description | Documentation |
|---|---|---|
| `FrApp42.System` | Classes pour exécuter des opérations système | [System](/docs/tools/system/) |
| `FrApp42.Web` | Classes pour exécuter des opérations web | [Web](/docs/tools/web/) |

## Contenu

### System

* **Awake** : garder une machine éveillée, écran allumé ou éteint
* **IsOnline** : envoyer un ping à un appareil (nom d'hôte ou adresse IP) pour vérifier qu'il est en ligne
* **Shutdown** : éteindre un appareil Windows à distance via SMB
* **WakeOnLan** : allumer un appareil à partir de son adresse MAC

### Web

* **Request** : simplifier les requêtes HTTP (JSON et XML, fichiers binaires et bruts)

## Installation

```nuget
Install-Package FrApp42.System
Install-Package FrApp42.Web
```

## Liens

* [Code source](https://github.com/FrApp42/Tools)
* [Paquet NuGet : FrApp42.System](https://www.nuget.org/packages/FrApp42.System)
* [Paquet NuGet : FrApp42.Web](https://www.nuget.org/packages/FrApp42.Web)
