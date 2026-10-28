---
slug: axios-net-v0.1.0
title: Axios.Net v0.1.0
authors: [sikelio]
tags: [axios-net, csharp, releases]
---

## À propos

Première release d'Axios.Net, un client HTTP pour .NET 8 et .NET 10 avec une syntaxe proche d'[axios](https://axios.rest).

{/* truncate */}

```cs
AxiosResponse<User> res = await Axios.Get<User>("https://api.test/users/1");

AxiosClient api = Axios.Create(new AxiosRequestConfig { BaseUrl = "https://api.test/v1" });
await api.Post<User>("/users", new { Name = "Ada" });
```

## Nouveautés

* L'API d'axios : `Get`, `Post`, `Put`, `Patch`, `Delete`, `Head`, `Options`, `Request`, `PostForm`, `GetUri` et `Create`
* Réponses typées, fusion de configuration (bibliothèque, client, requête) et en-têtes par défaut par méthode
* Intercepteurs de requête et de réponse avec `Eject`, `Clear`, `RunWhen` et `Synchronous`
* Paramètres de requête, corps JSON, urlencoded et multipart
* Une seule `AxiosException` avec les codes d'erreur d'axios
* Délai d'expiration, annulation, progression d'envoi et de téléchargement, limites de taille, redirections, décompression et proxy

Axios.Net est publié sous licence AGPL-3.0-or-later. Consultez la [documentation](/docs/axios-net/) pour commencer, y compris pour migrer depuis la classe `Request` de `FrApp42.Web`.

## Changelog

Vous pouvez consulter la release avec le lien suivant : [changelog](https://github.com/FrApp42/Axios.Net/releases/tag/v0.1.0).
