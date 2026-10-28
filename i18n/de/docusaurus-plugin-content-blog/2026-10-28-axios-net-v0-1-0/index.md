---
slug: axios-net-v0.1.0
title: Axios.Net v0.1.0
authors: [sikelio]
tags: [axios-net, csharp, releases]
---

## Über dieses Release

Erstes Release von Axios.Net, einem HTTP-Client für .NET 8 und .NET 10 mit einer [axios](https://axios.rest)-ähnlichen Syntax.

{/* truncate */}

```cs
AxiosResponse<User> res = await Axios.Get<User>("https://api.test/users/1");

AxiosClient api = Axios.Create(new AxiosRequestConfig { BaseUrl = "https://api.test/v1" });
await api.Post<User>("/users", new { Name = "Ada" });
```

## Neuigkeiten

* Die axios-API: `Get`, `Post`, `Put`, `Patch`, `Delete`, `Head`, `Options`, `Request`, `PostForm`, `GetUri` und `Create`
* Typisierte Antworten, Konfigurations-Merging (Bibliothek, Client, Anfrage) und Standard-Header pro Methode
* Request- und Response-Interceptors mit `Eject`, `Clear`, `RunWhen` und `Synchronous`
* Query-Parameter sowie JSON-, urlencoded- und Multipart-Bodys
* Eine einzige `AxiosException` mit den Fehlercodes von axios
* Timeout, Abbruch, Upload- und Download-Fortschritt, Größenlimits, Weiterleitungen, Dekomprimierung und Proxy

Axios.Net wird unter AGPL-3.0-or-later veröffentlicht. Lies die [Dokumentation](/docs/axios-net/) für den Einstieg, einschließlich des Umstiegs von der Klasse `Request` aus `FrApp42.Web`.

## Changelog

Das Release findest du unter folgendem Link: [changelog](https://github.com/FrApp42/Axios.Net/releases/tag/v0.1.0).
