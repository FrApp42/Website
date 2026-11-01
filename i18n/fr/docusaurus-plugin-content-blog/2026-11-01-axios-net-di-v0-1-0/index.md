---
slug: axios-net-di-v0.1.0
title: Axios.Net.Extensions.DependencyInjection v0.1.0
authors: [sikelio]
tags: [axios-net, csharp, releases]
---

## À propos

Première release d'`Axios.Net.Extensions.DependencyInjection`, un paquet qui facilite l'utilisation d'[Axios.Net](/docs/axios-net/) dans les projets reposant sur l'injection de dépendances.

{/* truncate */}

```cs
services.AddAxios(c => c.BaseUrl = "https://api.test/v1/");

public class UserService(AxiosClient api)
{
    public Task<AxiosResponse<User>> Get(int id) => api.Get<User>($"/users/{id}");
}
```

## Nouveautés

* `AddAxios` enregistre `AxiosClient` en singleton, configuré via un callback sur `AxiosRequestConfig`
* Les requêtes passent par un client nommé `IHttpClientFactory` appelé `Axios.Net`, ce qui permet de chaîner `AddHttpMessageHandler` pour la journalisation ou la résilience
* Le paquet est versionné séparément : `Axios.Net` n'a pas changé et reste en v0.1.0

Consultez la [documentation](/docs/axios-net/) pour les détails, notamment sur le comportement de `MaxRedirects`, `Decompress` et `Proxy` avec la factory.

## Changelog

Vous pouvez consulter la release avec le lien suivant : [changelog](https://github.com/FrApp42/Axios.Net/releases/tag/di-v0.1.0).
