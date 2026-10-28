---
sidebar_label: 'Axios.Net'
sidebar_position: 3
---

# Axios.Net

An HTTP client for **.NET 8 and .NET 10** with an [axios](https://axios.rest)-like syntax: `Axios.Get<T>(url)`, `Axios.Create(config)`, interceptors, config merging and typed errors. It has no dependency other than the .NET runtime (JSON is handled by `System.Text.Json`).

## Features

* **axios API**: `Get`, `Post`, `Put`, `Patch`, `Delete`, `Head`, `Options`, `Request`, `PostForm`, `PutForm`, `PatchForm`, `GetUri`, `Create`, `All`, `MergeConfig` and `ToFormData`.
* **Typed responses**: `AxiosResponse<T>` exposes `Status`, `StatusText`, `Headers`, `Config`, `Request`, `Duration` and `Data`.
* **Config merging**: library defaults, then client defaults, then the request config. Default headers per method (`common`, `post`, ...).
* **Query parameters**: nested objects and arrays, with a configurable array format and serializer.
* **Bodies**: JSON, `application/x-www-form-urlencoded`, `multipart/form-data` (with `AxiosFile`), binary, streams and any `HttpContent`.
* **Interceptors**: request and response chains with `Eject`, `Clear`, `RunWhen` and `Synchronous`, able to recover from errors.
* **Errors**: a single `AxiosException` carrying the axios error codes, plus `ValidateStatus` and `Redact`.
* **Transfer control**: timeout, cancellation, upload and download progress, size limits, redirects, decompression and proxy.
* **Transforms**: `TransformRequest` and `TransformResponse`.

## Installation

```nuget
Install-Package Axios.Net
```

or with the .NET CLI:

```bash
dotnet add package Axios.Net
```

:::info
The package is named `Axios.Net` but the root namespace is `AxiosNet`, so that it does not clash with the static `Axios` class.
:::

## Usage

### Direct requests

```cs title="Program.cs"
using AxiosNet.Client;
using AxiosNet.Models;

AxiosResponse<User> res = await Axios.Get<User>("https://api.test/users/1");

Console.WriteLine($"{res.Status} {res.Data!.Name} in {res.Duration.TotalMilliseconds}ms");

await Axios.Post<User>("https://api.test/users", new { Name = "Ada" });
```

The body type `T` decides how the response is read: `string`, `byte[]` and `Stream` return the raw body, anything else is deserialized from JSON. You can override it with `ResponseType`.

### Configured instance

`Axios.Create` is the equivalent of `axios.create`: the client keeps its own defaults and interceptors.

```cs title="Program.cs"
using AxiosNet.Client;
using AxiosNet.Config;

AxiosClient api = Axios.Create(new AxiosRequestConfig
{
    BaseUrl = "https://api.test/v1",
    Timeout = TimeSpan.FromSeconds(10),
    Headers = { ["X-App"] = "demo" }
});

api.Defaults.CommonHeaders["Authorization"] = "Bearer token"; // axios defaults.headers.common
api.Defaults.MethodHeaders["post"] = new() { { "X-Post", "1" } }; // axios defaults.headers.post

var users = await api.Get<List<User>>("/users", new() { Params = { ["page"] = 2 } });
```

:::tip
Config precedence is: library defaults, then client defaults, then the request config. `Url`, `Method` and `Data` are never inherited from the defaults, and headers and params are merged key by key.
:::

### Query parameters

Arrays follow axios: `a[]=1&a[]=2` by default. Use `Indexes` to change the format, or `Serialize` to take over completely.

```cs title="Program.cs"
await api.Get<string>("/search", new()
{
    Params = { ["ids"] = new[] { 1, 2 }, ["filter"] = new Dictionary<string, object?> { ["name"] = "a b" } },
    ParamsSerializer = new() { Indexes = null } // ids=1&ids=2  (false: ids[]=1, true: ids[0]=1)
});
```

`GetUri` returns the final URL without sending anything.

### Request bodies

| `Data` | Sent as |
|---|---|
| `string` | As is, `application/x-www-form-urlencoded` unless a `Content-Type` header is set (like axios) |
| `byte[]`, `Stream` | Binary, `application/octet-stream` |
| `HttpContent` | As is |
| Any other object | JSON |

Set the `Content-Type` header to `application/x-www-form-urlencoded` or `multipart/form-data` (or use `PostForm`) to serialize an object that way. Use `AxiosFile` for file parts:

```cs title="Program.cs"
await api.PostForm<string>("/upload", new Dictionary<string, object?>
{
    ["name"] = "Ada",
    ["file"] = new AxiosFile(File.ReadAllBytes("avatar.png"), "avatar.png", "image/png")
});
```

### Interceptors

Request interceptors run last registered first, response interceptors first registered first.

```cs title="Program.cs"
int id = api.Interceptors.Request.Use(
    config => { config.Headers["X-Trace"] = Guid.NewGuid().ToString(); return config; },
    options: new() { RunWhen = c => c.Method == HttpMethod.Get, Synchronous = true });

api.Interceptors.Response.Use(
    response => response,
    error => error is AxiosException { Response: { } r } ? r : throw error); // recover or rethrow

api.Interceptors.Request.Eject(id);
api.Interceptors.Response.Clear();
```

### Errors

Every failure throws an `AxiosException` (`Code`, `Config`, `Request`, `Response`, `Status`, `ToJSON()`). Use `ValidateStatus` to resolve selected status codes, and `Redact` to mask keys in `ToJSON()`.

```cs title="Program.cs"
using AxiosNet.Errors;

try
{
    await api.Get<User>("/missing");
}
catch (AxiosException e)
{
    Console.WriteLine($"{e.Code} {e.Status} {e.Response?.Data}");
}
```

| Code | Meaning |
|---|---|
| `ERR_BAD_REQUEST` | 4xx response |
| `ERR_BAD_RESPONSE` | Other rejected status, size limit exceeded or unreadable body |
| `ERR_NETWORK` | The request could not reach the server |
| `ERR_CANCELED` | Canceled (`CanceledError`) |
| `ERR_INVALID_URL` | Invalid or non absolute URL |
| `ERR_FORM_DATA_DEPTH_EXCEEDED` | Params or form object nested too deeply |
| `ECONNABORTED` / `ETIMEDOUT` | Timeout (`ETIMEDOUT` with `Transitional.ClarifyTimeoutError`) |

### Cancellation and progress

```cs title="Program.cs"
using CancellationTokenSource cts = new();

AxiosResponse<byte[]> file = await api.Get<byte[]>("/big-file", new()
{
    CancellationToken = cts.Token,
    OnDownloadProgress = e => Console.WriteLine($"{e.Progress:P0} ({e.Loaded}/{e.Total})")
});
```

## Request config

| Group | Options |
|---|---|
| URL | `Url`, `Method`, `BaseUrl`, `AllowAbsoluteUrls` |
| Headers | `Headers`, `MethodHeaders` / `CommonHeaders`, `Auth` |
| Query | `Params`, `ParamsSerializer` (`Encode`, `Serialize`, `Indexes`, `MaxDepth`) |
| Body | `Data`, `TransformRequest`, `FormSerializer` (`Dots`, `MetaTokens`, `Indexes`, `MaxDepth`) |
| Response | `ResponseType`, `ResponseEncoding`, `TransformResponse`, `ValidateStatus`, `Transitional` |
| Limits | `Timeout`, `MaxContentLength`, `MaxBodyLength`, `MaxRedirects` |
| Network | `Decompress`, `Proxy` |
| Events | `OnUploadProgress`, `OnDownloadProgress`, `CancellationToken` (axios' `signal`) |
| Diagnostics | `Redact` |

:::note
`MaxRedirects`, `Decompress` and `Proxy` need the built-in handler: they are ignored when you pass your own `HttpMessageHandler` to `Axios.Create`.
:::

## Namespaces

| Namespace | Types |
|---|---|
| `AxiosNet.Client` | `Axios`, `AxiosClient` |
| `AxiosNet.Config` | `AxiosRequestConfig`, `AxiosParamsSerializer`, `AxiosFormSerializer`, `AxiosTransitional`, `AxiosProxy`, `AxiosResponseType` |
| `AxiosNet.Errors` | `AxiosException`, `CanceledError`, `AxiosErrorCodes` |
| `AxiosNet.Models` | `AxiosResponse`, `AxiosResponse<T>`, `AxiosHeaders`, `AxiosFile`, `AxiosProgressEvent` |
| `AxiosNet.Interceptors` | `AxiosInterceptors`, `InterceptorManager<T>`, `InterceptorOptions` |

## Differences with axios

These axios options are tied to browsers or Node.js and have no equivalent in .NET: `adapter` (pass an `HttpMessageHandler` to `Axios.Create` instead), `xsrfCookieName`, `xsrfHeaderName`, `withXSRFToken`, `withCredentials`, `httpAgent`, `httpsAgent`, `socketPath`, `allowedSocketPaths`, `transport`, `insecureHTTPParser`, `formDataHeaderPolicy`, `env`, `maxRate`, `beforeRedirect`, `sensitiveHeaders`, `parseReviver` (configure `AxiosClient.JsonOptions`) and the deprecated `CancelToken` (use `CancellationToken`).

## Coming from FrApp42.Web

Axios.Net follows the same goal as the `Request` class of [FrApp42.Web](/docs/tools/web/), with a different usage: one call instead of a fluent builder, and exceptions instead of a `Result<T>`.

| `Request` (FrApp42.Web) | Axios.Net |
|---|---|
| `new Request(url, method)` + `Run<T>()` | `Axios.Get<T>(url)`, `Axios.Post<T>(url, data)`, ... |
| `AddHeader` / `AddHeaders` | `Headers = { ["Name"] = "value" }` |
| `SetAuthorization(value)` | `Headers = { ["Authorization"] = value }`, or `Auth` for Basic |
| `AddQueryParam` / `AddQueryParams` | `Params = { ["key"] = value }` |
| `AddJsonBody(obj)` | `Data = obj`, or the `data` argument of `Post` / `Put` / `Patch` |
| `AddTextBody(text)` | `Data = text` with `Headers = { ["Content-Type"] = "text/plain" }` |
| `AddByteBody(bytes, name)` + `RunDocument<T>()` | `PostForm<T>(url, new Dictionary<string, object?> { ["file"] = new AxiosFile(bytes, name) })` |
| `RunBinaryRaw<T>()` | `Post<T>(url, bytes)` |
| `RunGetBytes()` | `Get<byte[]>(url)` |
| `Timeout` | `Timeout` |
| `Result<T>`: `StatusCode`, `Value`, `Error` | `AxiosResponse<T>`: `Status`, `Data`. Failures throw `AxiosException` (`Status`, `Response?.Data`) |

:::caution
`Request` also deserialized XML responses. Axios.Net does not: read the body with `Get<string>` and parse it yourself. JSON is handled by `System.Text.Json`, so `Newtonsoft.Json` attributes such as `[JsonProperty]` are ignored (use `[JsonPropertyName]`).
:::

## License

Axios.Net is released under the **AGPL-3.0-or-later** license.

## Links

* [Source code](https://github.com/FrApp42/Axios.Net)
* [NuGet package: Axios.Net](https://www.nuget.org/packages/Axios.Net)
* [axios documentation](https://axios.rest)
