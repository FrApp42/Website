---
sidebar_label: 'Web'
---

# Web

Collection de classes C# pour exécuter des opérations web.

## Installation

```nuget
Install-Package FrApp42.Web
```

## Utilisation

### Request

Cette classe simplifie les requêtes HTTP.

:::info
Le paquet NuGet `Newtosoft.Json` [**13.0.3+**](https://www.nuget.org/packages/Newtonsoft.Json/13.0.3) est nécessaire pour utiliser la classe `Request`.

```nuget
Install-Package Newtosoft.Json
```
:::

#### Requête simple \{#simple-request\}

```cs title="Program.cs"
using FrApps42.Web.API;
using System.Net;

string url = "";
HttpMethod method = HttpMethod.Get;

Request request = new(url, method);
request
    .AddContentHeader("", "")
    .AddHeader("", "")
    .AddJsonBody("")
    .AddQueryParam("", "")
    .AcceptJson();

Result<MyModel> result = await request.RunObject<MyModel>();

if (result.StatusCode == (int)HttpStatusCode.OK && result.Value != null)
{
    Console.WriteLine(result.Value.Name);
    Console.WriteLine(result.Value.Description);
}
else
{
    // Other cases
}
```

```cs title="MyModel.cs"
using Newtonsoft.Json;

namespace Program
{
    public class MyModel
    {
        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }
    }
}
```

#### Envoyer un fichier binaire \{#sending-binary-file\}

```cs title="Program.cs"
using FrApps42.Web.API;
using System.IO;

string url = "";
string filePath = "path_to_your_file.ext";

if (File.Exists(filePath))
{
    try
    {
        byte[] fileBytes = File.ReadAllBytes(filePath);

        Request request = new(url, HttpMethod.Post);
        request
            .SetContentType("application/type")
            .AddDocumentBody(fileBytes, "your_file_name.ext");

        Result<MyModel> result = await request.RunDocument<MyModel>();
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
}
else
{
    Console.WriteLine("File do not exist");
}
```

```cs title="MyModel.cs"
using Newtonsoft.Json;

namespace Program
{
    public class MyModel
    {
        [JsonProperty("success")]
        public bool Success { get; set; }
    }
}
```

#### Envoyer un fichier brut \{#sending-raw-file\}

```cs title="Program.cs"
using FrApps42.Web.API;
using System.IO;

string url = "";
string filePath = "path_to_your_file.ext";

if (File.Exists(filePath))
{
    try
    {
        byte[] fileBytes = File.ReadAllBytes(filePath);

        Request request = new(url, HttpMethod.Post);
        request
            .SetContentType("text/plain")
            .AddDocumentBody(fileBytes, null);

        Result<object> result = await request.RunBinaryRaw<object>();
    }
    catch (Exception ex)
    {
        Console.WriteLine(ex.Message);
    }
}
else
{
    Console.WriteLine("File do not exist");
}
```

#### Recevoir un fichier binaire en réponse \{#getting-binary-file-in-response\}
```cs title="Program.cs"
using FrApps42.Web.API;
using System.Net;

string url = "";
HttpMethod method = HttpMethod.Get;

Request request = new(url, method);
Result<byte[]> result = await request.RunGetBytes();

if (result.StatusCode == (int)HttpStatusCode.OK && result.Value != null)
{
    // Do something
}
else
{
    // Other cases
}
```

## Liens

* [Code source](https://github.com/FrApp42/Tools)
* [Paquet NuGet](https://www.nuget.org/packages/FrApp42.Web)
