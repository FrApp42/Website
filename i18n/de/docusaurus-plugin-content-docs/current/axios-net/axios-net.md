---
sidebar_label: 'Axios.Net'
sidebar_position: 3
---

# Axios.Net

Ein HTTP-Client für **.NET 8 und .NET 10** mit einer [axios](https://axios.rest)-ähnlichen Syntax: `Axios.Get<T>(url)`, `Axios.Create(config)`, Interceptors, Konfigurations-Merging und typisierte Fehler. Er hat keine Abhängigkeit außer der .NET-Runtime (JSON wird von `System.Text.Json` verarbeitet).

## Funktionen

* **axios-API**: `Get`, `Post`, `Put`, `Patch`, `Delete`, `Head`, `Options`, `Request`, `PostForm`, `PutForm`, `PatchForm`, `GetUri`, `Create`, `All`, `MergeConfig` und `ToFormData`.
* **Typisierte Antworten**: `AxiosResponse<T>` stellt `Status`, `StatusText`, `Headers`, `Config`, `Request`, `Duration` und `Data` bereit.
* **Konfigurations-Merging**: Standardwerte der Bibliothek, dann des Clients, dann der Anfrage. Standard-Header pro Methode (`common`, `post`, ...).
* **Query-Parameter**: verschachtelte Objekte und Arrays, mit konfigurierbarem Array-Format und Serializer.
* **Bodys**: JSON, `application/x-www-form-urlencoded`, `multipart/form-data` (mit `AxiosFile`), binär, Streams und jedes `HttpContent`.
* **Interceptors**: Ketten für Anfragen und Antworten mit `Eject`, `Clear`, `RunWhen` und `Synchronous`, die einen Fehler auffangen können.
* **Fehler**: eine einzige `AxiosException` mit den Fehlercodes von axios, dazu `ValidateStatus` und `Redact`.
* **Übertragungssteuerung**: Timeout, Abbruch, Upload- und Download-Fortschritt, Größenlimits, Weiterleitungen, Dekomprimierung und Proxy.
* **Transformationen**: `TransformRequest` und `TransformResponse`.

## Installation

```nuget
Install-Package Axios.Net
```

oder mit der .NET-CLI:

```bash
dotnet add package Axios.Net
```

:::info
Das Paket heißt `Axios.Net`, der Root-Namespace ist jedoch `AxiosNet`, damit er nicht mit der statischen Klasse `Axios` kollidiert.
:::

## Verwendung

### Direkte Anfragen

```cs title="Program.cs"
using AxiosNet.Client;
using AxiosNet.Models;

AxiosResponse<User> res = await Axios.Get<User>("https://api.test/users/1");

Console.WriteLine($"{res.Status} {res.Data!.Name} in {res.Duration.TotalMilliseconds}ms");

await Axios.Post<User>("https://api.test/users", new { Name = "Ada" });
```

Der Typ `T` bestimmt, wie die Antwort gelesen wird: `string`, `byte[]` und `Stream` liefern den rohen Body, alles andere wird aus JSON deserialisiert. Mit `ResponseType` kannst du das überschreiben.

### Konfigurierte Instanz

`Axios.Create` entspricht `axios.create`: Der Client behält seine eigenen Standardwerte und Interceptors.

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
Die Rangfolge der Konfiguration lautet: Standardwerte der Bibliothek, dann des Clients, dann der Anfrage. `Url`, `Method` und `Data` werden nie aus den Standardwerten übernommen, Header und Parameter werden Schlüssel für Schlüssel zusammengeführt.
:::

### Query-Parameter

Arrays folgen axios: standardmäßig `a[]=1&a[]=2`. Mit `Indexes` änderst du das Format, mit `Serialize` übernimmst du die Serialisierung komplett.

```cs title="Program.cs"
await api.Get<string>("/search", new()
{
    Params = { ["ids"] = new[] { 1, 2 }, ["filter"] = new Dictionary<string, object?> { ["name"] = "a b" } },
    ParamsSerializer = new() { Indexes = null } // ids=1&ids=2  (false: ids[]=1, true: ids[0]=1)
});
```

`GetUri` gibt die endgültige URL zurück, ohne etwas zu senden.

### Anfrage-Bodys

| `Data` | Gesendet als |
|---|---|
| `string` | Unverändert, `application/x-www-form-urlencoded`, sofern kein `Content-Type`-Header gesetzt ist (wie axios) |
| `byte[]`, `Stream` | Binär, `application/octet-stream` |
| `HttpContent` | Unverändert |
| Jedes andere Objekt | JSON |

Setze den Header `Content-Type` auf `application/x-www-form-urlencoded` oder `multipart/form-data` (oder nutze `PostForm`), um ein Objekt so zu serialisieren. Für Dateien verwendest du `AxiosFile`:

```cs title="Program.cs"
await api.PostForm<string>("/upload", new Dictionary<string, object?>
{
    ["name"] = "Ada",
    ["file"] = new AxiosFile(File.ReadAllBytes("avatar.png"), "avatar.png", "image/png")
});
```

### Interceptors

Request-Interceptors laufen vom zuletzt zum zuerst registrierten, Response-Interceptors vom zuerst zum zuletzt registrierten.

```cs title="Program.cs"
int id = api.Interceptors.Request.Use(
    config => { config.Headers["X-Trace"] = Guid.NewGuid().ToString(); return config; },
    options: new() { RunWhen = c => c.Method == HttpMethod.Get, Synchronous = true });

api.Interceptors.Response.Use(
    response => response,
    error => error is AxiosException { Response: { } r } ? r : throw error); // auffangen oder erneut werfen

api.Interceptors.Request.Eject(id);
api.Interceptors.Response.Clear();
```

### Fehler

Jeder Fehlschlag wirft eine `AxiosException` (`Code`, `Config`, `Request`, `Response`, `Status`, `ToJSON()`). Mit `ValidateStatus` akzeptierst du bestimmte Statuscodes, mit `Redact` maskierst du Schlüssel in `ToJSON()`.

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

| Code | Bedeutung |
|---|---|
| `ERR_BAD_REQUEST` | 4xx-Antwort |
| `ERR_BAD_RESPONSE` | Anderer abgelehnter Status, Größenlimit überschritten oder nicht lesbarer Body |
| `ERR_NETWORK` | Die Anfrage konnte den Server nicht erreichen |
| `ERR_CANCELED` | Abgebrochen (`CanceledError`) |
| `ERR_INVALID_URL` | Ungültige oder nicht absolute URL |
| `ERR_FORM_DATA_DEPTH_EXCEEDED` | Parameter oder Formularobjekt zu tief verschachtelt |
| `ECONNABORTED` / `ETIMEDOUT` | Timeout (`ETIMEDOUT` mit `Transitional.ClarifyTimeoutError`) |

### Abbruch und Fortschritt

```cs title="Program.cs"
using CancellationTokenSource cts = new();

AxiosResponse<byte[]> file = await api.Get<byte[]>("/big-file", new()
{
    CancellationToken = cts.Token,
    OnDownloadProgress = e => Console.WriteLine($"{e.Progress:P0} ({e.Loaded}/{e.Total})")
});
```

## Anfrage-Konfiguration

| Gruppe | Optionen |
|---|---|
| URL | `Url`, `Method`, `BaseUrl`, `AllowAbsoluteUrls` |
| Header | `Headers`, `MethodHeaders` / `CommonHeaders`, `Auth` |
| Query | `Params`, `ParamsSerializer` (`Encode`, `Serialize`, `Indexes`, `MaxDepth`) |
| Body | `Data`, `TransformRequest`, `FormSerializer` (`Dots`, `MetaTokens`, `Indexes`, `MaxDepth`) |
| Antwort | `ResponseType`, `ResponseEncoding`, `TransformResponse`, `ValidateStatus`, `Transitional` |
| Limits | `Timeout`, `MaxContentLength`, `MaxBodyLength`, `MaxRedirects` |
| Netzwerk | `Decompress`, `Proxy` |
| Ereignisse | `OnUploadProgress`, `OnDownloadProgress`, `CancellationToken` (das `signal` von axios) |
| Diagnose | `Redact` |

:::note
`MaxRedirects`, `Decompress` und `Proxy` benötigen den integrierten Handler: Sie werden ignoriert, wenn du einen eigenen `HttpMessageHandler` an `Axios.Create` übergibst.
:::

## Namespaces

| Namespace | Typen |
|---|---|
| `AxiosNet.Client` | `Axios`, `AxiosClient` |
| `AxiosNet.Config` | `AxiosRequestConfig`, `AxiosParamsSerializer`, `AxiosFormSerializer`, `AxiosTransitional`, `AxiosProxy`, `AxiosResponseType` |
| `AxiosNet.Errors` | `AxiosException`, `CanceledError`, `AxiosErrorCodes` |
| `AxiosNet.Models` | `AxiosResponse`, `AxiosResponse<T>`, `AxiosHeaders`, `AxiosFile`, `AxiosProgressEvent` |
| `AxiosNet.Interceptors` | `AxiosInterceptors`, `InterceptorManager<T>`, `InterceptorOptions` |

## Unterschiede zu axios

Diese axios-Optionen sind an Browser oder Node.js gebunden und haben in .NET kein Äquivalent: `adapter` (übergib stattdessen einen `HttpMessageHandler` an `Axios.Create`), `xsrfCookieName`, `xsrfHeaderName`, `withXSRFToken`, `withCredentials`, `httpAgent`, `httpsAgent`, `socketPath`, `allowedSocketPaths`, `transport`, `insecureHTTPParser`, `formDataHeaderPolicy`, `env`, `maxRate`, `beforeRedirect`, `sensitiveHeaders`, `parseReviver` (konfiguriere `AxiosClient.JsonOptions`) und das veraltete `CancelToken` (nutze `CancellationToken`).

## Umstieg von FrApp42.Web

Axios.Net verfolgt dasselbe Ziel wie die Klasse `Request` aus [FrApp42.Web](/docs/tools/web/), mit anderer Handhabung: ein einziger Aufruf statt eines verketteten Builders und Exceptions statt eines `Result<T>`.

| `Request` (FrApp42.Web) | Axios.Net |
|---|---|
| `new Request(url, method)` + `Run<T>()` | `Axios.Get<T>(url)`, `Axios.Post<T>(url, data)`, ... |
| `AddHeader` / `AddHeaders` | `Headers = { ["Name"] = "Wert" }` |
| `SetAuthorization(value)` | `Headers = { ["Authorization"] = value }`, oder `Auth` für Basic |
| `AddQueryParam` / `AddQueryParams` | `Params = { ["Schlüssel"] = Wert }` |
| `AddJsonBody(obj)` | `Data = obj`, oder das Argument `data` von `Post` / `Put` / `Patch` |
| `AddTextBody(text)` | `Data = text` mit `Headers = { ["Content-Type"] = "text/plain" }` |
| `AddByteBody(bytes, name)` + `RunDocument<T>()` | `PostForm<T>(url, new Dictionary<string, object?> { ["file"] = new AxiosFile(bytes, name) })` |
| `RunBinaryRaw<T>()` | `Post<T>(url, bytes)` |
| `RunGetBytes()` | `Get<byte[]>(url)` |
| `Timeout` | `Timeout` |
| `Result<T>`: `StatusCode`, `Value`, `Error` | `AxiosResponse<T>`: `Status`, `Data`. Fehler werfen eine `AxiosException` (`Status`, `Response?.Data`) |

:::caution
`Request` hat auch XML-Antworten deserialisiert. Axios.Net tut das nicht: Lies den Body mit `Get<string>` und parse ihn selbst. JSON wird von `System.Text.Json` verarbeitet, daher werden `Newtonsoft.Json`-Attribute wie `[JsonProperty]` ignoriert (nutze `[JsonPropertyName]`).
:::

## Lizenz

Axios.Net wird unter der Lizenz **AGPL-3.0-or-later** veröffentlicht.

## Links

* [Quellcode](https://github.com/FrApp42/Axios.Net)
* [NuGet-Paket: Axios.Net](https://www.nuget.org/packages/Axios.Net)
* [axios-Dokumentation](https://axios.rest)
