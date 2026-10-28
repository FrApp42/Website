---
sidebar_label: 'Axios.Net'
sidebar_position: 3
---

# Axios.Net

Un client HTTP pour **.NET 8 et .NET 10** avec une syntaxe proche d'[axios](https://axios.rest) : `Axios.Get<T>(url)`, `Axios.Create(config)`, intercepteurs, fusion de configuration et erreurs typées. Il n'a aucune dépendance en dehors du runtime .NET (le JSON est géré par `System.Text.Json`).

## Fonctionnalités

* **API axios** : `Get`, `Post`, `Put`, `Patch`, `Delete`, `Head`, `Options`, `Request`, `PostForm`, `PutForm`, `PatchForm`, `GetUri`, `Create`, `All`, `MergeConfig` et `ToFormData`.
* **Réponses typées** : `AxiosResponse<T>` expose `Status`, `StatusText`, `Headers`, `Config`, `Request`, `Duration` et `Data`.
* **Fusion de configuration** : valeurs par défaut de la bibliothèque, puis du client, puis de la requête. En-têtes par défaut par méthode (`common`, `post`, ...).
* **Paramètres de requête** : objets imbriqués et tableaux, avec un format de tableau et un sérialiseur configurables.
* **Corps** : JSON, `application/x-www-form-urlencoded`, `multipart/form-data` (avec `AxiosFile`), binaire, flux et tout `HttpContent`.
* **Intercepteurs** : chaînes de requête et de réponse avec `Eject`, `Clear`, `RunWhen` et `Synchronous`, capables de se rattraper après une erreur.
* **Erreurs** : une seule `AxiosException` portant les codes d'erreur d'axios, ainsi que `ValidateStatus` et `Redact`.
* **Contrôle des transferts** : délai d'expiration, annulation, progression d'envoi et de téléchargement, limites de taille, redirections, décompression et proxy.
* **Transformations** : `TransformRequest` et `TransformResponse`.

## Installation

```nuget
Install-Package Axios.Net
```

ou avec la CLI .NET :

```bash
dotnet add package Axios.Net
```

:::info
Le paquet s'appelle `Axios.Net` mais l'espace de noms racine est `AxiosNet`, afin d'éviter un conflit avec la classe statique `Axios`.
:::

## Utilisation

### Requêtes directes

```cs title="Program.cs"
using AxiosNet.Client;
using AxiosNet.Models;

AxiosResponse<User> res = await Axios.Get<User>("https://api.test/users/1");

Console.WriteLine($"{res.Status} {res.Data!.Name} en {res.Duration.TotalMilliseconds}ms");

await Axios.Post<User>("https://api.test/users", new { Name = "Ada" });
```

Le type `T` décide de la façon dont la réponse est lue : `string`, `byte[]` et `Stream` renvoient le corps brut, tout le reste est désérialisé depuis du JSON. Vous pouvez le forcer avec `ResponseType`.

### Instance configurée

`Axios.Create` est l'équivalent de `axios.create` : le client garde ses propres valeurs par défaut et ses propres intercepteurs.

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
La priorité de la configuration est : valeurs par défaut de la bibliothèque, puis du client, puis de la requête. `Url`, `Method` et `Data` ne sont jamais hérités des valeurs par défaut, et les en-têtes et paramètres sont fusionnés clé par clé.
:::

### Paramètres de requête

Les tableaux suivent axios : `a[]=1&a[]=2` par défaut. Utilisez `Indexes` pour changer le format, ou `Serialize` pour prendre la main complètement.

```cs title="Program.cs"
await api.Get<string>("/search", new()
{
    Params = { ["ids"] = new[] { 1, 2 }, ["filter"] = new Dictionary<string, object?> { ["name"] = "a b" } },
    ParamsSerializer = new() { Indexes = null } // ids=1&ids=2  (false : ids[]=1, true : ids[0]=1)
});
```

`GetUri` renvoie l'URL finale sans rien envoyer.

### Corps de requête

| `Data` | Envoyé comme |
|---|---|
| `string` | Tel quel, `application/x-www-form-urlencoded` sauf si un en-tête `Content-Type` est défini (comme axios) |
| `byte[]`, `Stream` | Binaire, `application/octet-stream` |
| `HttpContent` | Tel quel |
| Tout autre objet | JSON |

Définissez l'en-tête `Content-Type` à `application/x-www-form-urlencoded` ou `multipart/form-data` (ou utilisez `PostForm`) pour sérialiser un objet de cette façon. Utilisez `AxiosFile` pour les fichiers :

```cs title="Program.cs"
await api.PostForm<string>("/upload", new Dictionary<string, object?>
{
    ["name"] = "Ada",
    ["file"] = new AxiosFile(File.ReadAllBytes("avatar.png"), "avatar.png", "image/png")
});
```

### Intercepteurs

Les intercepteurs de requête s'exécutent du dernier enregistré au premier, ceux de réponse du premier enregistré au dernier.

```cs title="Program.cs"
int id = api.Interceptors.Request.Use(
    config => { config.Headers["X-Trace"] = Guid.NewGuid().ToString(); return config; },
    options: new() { RunWhen = c => c.Method == HttpMethod.Get, Synchronous = true });

api.Interceptors.Response.Use(
    response => response,
    error => error is AxiosException { Response: { } r } ? r : throw error); // rattraper ou relancer

api.Interceptors.Request.Eject(id);
api.Interceptors.Response.Clear();
```

### Erreurs

Chaque échec lève une `AxiosException` (`Code`, `Config`, `Request`, `Response`, `Status`, `ToJSON()`). Utilisez `ValidateStatus` pour accepter certains codes de statut, et `Redact` pour masquer des clés dans `ToJSON()`.

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

| Code | Signification |
|---|---|
| `ERR_BAD_REQUEST` | Réponse 4xx |
| `ERR_BAD_RESPONSE` | Autre statut rejeté, limite de taille dépassée ou corps illisible |
| `ERR_NETWORK` | La requête n'a pas pu atteindre le serveur |
| `ERR_CANCELED` | Annulée (`CanceledError`) |
| `ERR_INVALID_URL` | URL invalide ou non absolue |
| `ERR_FORM_DATA_DEPTH_EXCEEDED` | Paramètres ou objet de formulaire trop imbriqués |
| `ECONNABORTED` / `ETIMEDOUT` | Délai dépassé (`ETIMEDOUT` avec `Transitional.ClarifyTimeoutError`) |

### Annulation et progression

```cs title="Program.cs"
using CancellationTokenSource cts = new();

AxiosResponse<byte[]> file = await api.Get<byte[]>("/big-file", new()
{
    CancellationToken = cts.Token,
    OnDownloadProgress = e => Console.WriteLine($"{e.Progress:P0} ({e.Loaded}/{e.Total})")
});
```

## Configuration de requête

| Groupe | Options |
|---|---|
| URL | `Url`, `Method`, `BaseUrl`, `AllowAbsoluteUrls` |
| En-têtes | `Headers`, `MethodHeaders` / `CommonHeaders`, `Auth` |
| Requête | `Params`, `ParamsSerializer` (`Encode`, `Serialize`, `Indexes`, `MaxDepth`) |
| Corps | `Data`, `TransformRequest`, `FormSerializer` (`Dots`, `MetaTokens`, `Indexes`, `MaxDepth`) |
| Réponse | `ResponseType`, `ResponseEncoding`, `TransformResponse`, `ValidateStatus`, `Transitional` |
| Limites | `Timeout`, `MaxContentLength`, `MaxBodyLength`, `MaxRedirects` |
| Réseau | `Decompress`, `Proxy` |
| Événements | `OnUploadProgress`, `OnDownloadProgress`, `CancellationToken` (le `signal` d'axios) |
| Diagnostic | `Redact` |

:::note
`MaxRedirects`, `Decompress` et `Proxy` nécessitent le gestionnaire intégré : ils sont ignorés si vous passez votre propre `HttpMessageHandler` à `Axios.Create`.
:::

## Espaces de noms

| Espace de noms | Types |
|---|---|
| `AxiosNet.Client` | `Axios`, `AxiosClient` |
| `AxiosNet.Config` | `AxiosRequestConfig`, `AxiosParamsSerializer`, `AxiosFormSerializer`, `AxiosTransitional`, `AxiosProxy`, `AxiosResponseType` |
| `AxiosNet.Errors` | `AxiosException`, `CanceledError`, `AxiosErrorCodes` |
| `AxiosNet.Models` | `AxiosResponse`, `AxiosResponse<T>`, `AxiosHeaders`, `AxiosFile`, `AxiosProgressEvent` |
| `AxiosNet.Interceptors` | `AxiosInterceptors`, `InterceptorManager<T>`, `InterceptorOptions` |

## Différences avec axios

Ces options d'axios sont liées aux navigateurs ou à Node.js et n'ont pas d'équivalent en .NET : `adapter` (passez plutôt un `HttpMessageHandler` à `Axios.Create`), `xsrfCookieName`, `xsrfHeaderName`, `withXSRFToken`, `withCredentials`, `httpAgent`, `httpsAgent`, `socketPath`, `allowedSocketPaths`, `transport`, `insecureHTTPParser`, `formDataHeaderPolicy`, `env`, `maxRate`, `beforeRedirect`, `sensitiveHeaders`, `parseReviver` (configurez `AxiosClient.JsonOptions`) et le `CancelToken` déprécié (utilisez `CancellationToken`).

## Migrer depuis FrApp42.Web

Axios.Net poursuit le même but que la classe `Request` de [FrApp42.Web](/docs/tools/web/), avec un usage différent : un seul appel au lieu d'un constructeur chaîné, et des exceptions à la place d'un `Result<T>`.

| `Request` (FrApp42.Web) | Axios.Net |
|---|---|
| `new Request(url, method)` + `Run<T>()` | `Axios.Get<T>(url)`, `Axios.Post<T>(url, data)`, ... |
| `AddHeader` / `AddHeaders` | `Headers = { ["Nom"] = "valeur" }` |
| `SetAuthorization(value)` | `Headers = { ["Authorization"] = value }`, ou `Auth` pour Basic |
| `AddQueryParam` / `AddQueryParams` | `Params = { ["clé"] = valeur }` |
| `AddJsonBody(obj)` | `Data = obj`, ou l'argument `data` de `Post` / `Put` / `Patch` |
| `AddTextBody(text)` | `Data = text` avec `Headers = { ["Content-Type"] = "text/plain" }` |
| `AddByteBody(bytes, name)` + `RunDocument<T>()` | `PostForm<T>(url, new Dictionary<string, object?> { ["file"] = new AxiosFile(bytes, name) })` |
| `RunBinaryRaw<T>()` | `Post<T>(url, bytes)` |
| `RunGetBytes()` | `Get<byte[]>(url)` |
| `Timeout` | `Timeout` |
| `Result<T>` : `StatusCode`, `Value`, `Error` | `AxiosResponse<T>` : `Status`, `Data`. Les échecs lèvent une `AxiosException` (`Status`, `Response?.Data`) |

:::caution
`Request` désérialisait aussi les réponses XML. Ce n'est pas le cas d'Axios.Net : lisez le corps avec `Get<string>` et analysez-le vous-même. Le JSON est géré par `System.Text.Json`, donc les attributs `Newtonsoft.Json` comme `[JsonProperty]` sont ignorés (utilisez `[JsonPropertyName]`).
:::

## Licence

Axios.Net est publié sous licence **AGPL-3.0-or-later**.

## Liens

* [Code source](https://github.com/FrApp42/Axios.Net)
* [Paquet NuGet : Axios.Net](https://www.nuget.org/packages/Axios.Net)
* [Documentation d'axios](https://axios.rest)
