---
slug: axios-net-di-v0.1.0
title: Axios.Net.Extensions.DependencyInjection v0.1.0
authors: [sikelio]
tags: [axios-net, csharp, releases]
---

## Über dieses Release

Erstes Release von `Axios.Net.Extensions.DependencyInjection`, einem Paket, das die Nutzung von [Axios.Net](/docs/axios-net/) in Projekten mit Dependency Injection erleichtert.

{/* truncate */}

```cs
services.AddAxios(c => c.BaseUrl = "https://api.test/v1/");

public class UserService(AxiosClient api)
{
    public Task<AxiosResponse<User>> Get(int id) => api.Get<User>($"/users/{id}");
}
```

## Neuigkeiten

* `AddAxios` registriert `AxiosClient` als Singleton, konfiguriert über einen Callback auf `AxiosRequestConfig`
* Anfragen laufen über einen benannten `IHttpClientFactory`-Client namens `Axios.Net`, sodass du `AddHttpMessageHandler` für Logging oder Resilienz anhängen kannst
* Das Paket hat eine eigene Versionierung: `Axios.Net` selbst ist unverändert und bleibt bei v0.1.0

Lies die [Dokumentation](/docs/axios-net/) für die Details, auch dazu, wie sich `MaxRedirects`, `Decompress` und `Proxy` mit der Factory verhalten.

## Changelog

Das Release findest du unter folgendem Link: [changelog](https://github.com/FrApp42/Axios.Net/releases/tag/di-v0.1.0).
