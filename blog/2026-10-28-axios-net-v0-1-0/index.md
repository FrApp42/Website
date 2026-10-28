---
slug: axios-net-v0.1.0
title: Axios.Net v0.1.0
authors: [sikelio]
tags: [axios-net, csharp, releases]
---

## About

First release of Axios.Net, an HTTP client for .NET 8 and .NET 10 with an [axios](https://axios.rest)-like syntax.

{/* truncate */}

```cs
AxiosResponse<User> res = await Axios.Get<User>("https://api.test/users/1");

AxiosClient api = Axios.Create(new AxiosRequestConfig { BaseUrl = "https://api.test/v1" });
await api.Post<User>("/users", new { Name = "Ada" });
```

## What's new ?

* The axios API: `Get`, `Post`, `Put`, `Patch`, `Delete`, `Head`, `Options`, `Request`, `PostForm`, `GetUri` and `Create`
* Typed responses, config merging (library, client, request) and default headers per method
* Request and response interceptors with `Eject`, `Clear`, `RunWhen` and `Synchronous`
* Query parameters, JSON, urlencoded and multipart bodies
* A single `AxiosException` with the axios error codes
* Timeout, cancellation, upload and download progress, size limits, redirects, decompression and proxy

Axios.Net is released under AGPL-3.0-or-later. Read the [documentation](/docs/axios-net/) to get started, including how to move over from the `Request` class of `FrApp42.Web`.

## Changelog

You can read the release with the following link: [changelog](https://github.com/FrApp42/Axios.Net/releases/tag/v0.1.0).
