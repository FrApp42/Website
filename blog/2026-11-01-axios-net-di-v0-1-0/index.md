---
slug: axios-net-di-v0.1.0
title: Axios.Net.Extensions.DependencyInjection v0.1.0
authors: [sikelio]
tags: [axios-net, csharp, releases]
---

## About

First release of `Axios.Net.Extensions.DependencyInjection`, a package that makes [Axios.Net](/docs/axios-net/) easier to use in projects built around dependency injection.

{/* truncate */}

```cs
services.AddAxios(c => c.BaseUrl = "https://api.test/v1/");

public class UserService(AxiosClient api)
{
    public Task<AxiosResponse<User>> Get(int id) => api.Get<User>($"/users/{id}");
}
```

## What's new ?

* `AddAxios` registers `AxiosClient` as a singleton, configured through an `AxiosRequestConfig` callback
* Requests go through an `IHttpClientFactory` named client called `Axios.Net`, so you can chain `AddHttpMessageHandler` for logging or resilience
* The package is versioned on its own: `Axios.Net` itself is unchanged and stays at v0.1.0

Read the [documentation](/docs/axios-net/) for the details, including how `MaxRedirects`, `Decompress` and `Proxy` behave with the factory.

## Changelog

You can read the release with the following link: [changelog](https://github.com/FrApp42/Axios.Net/releases/tag/di-v0.1.0).
