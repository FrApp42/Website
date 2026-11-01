---
title: "AxiosRequestConfig Class"
sidebar_label: "AxiosRequestConfig"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Config](AxiosNet.Config.md 'AxiosNet\.Config')

Configuration of a request\. Used both as client defaults and per request\.
Merge order: library defaults, then client defaults, then the request config\.

```csharp
public class AxiosRequestConfig
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosRequestConfig
## Properties

### AxiosRequestConfig\.AllowAbsoluteUrls Property

When false, absolute URLs are still prefixed by [BaseUrl](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigbaseurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.BaseUrl')\. Defaults to true\.

```csharp
public System.Nullable<bool> AllowAbsoluteUrls { get; set; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosRequestConfig\.Auth Property

Sets a Basic Authorization header, overwriting any custom one\.

```csharp
public System.Nullable<(string Username,string Password)> Auth { get; set; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.valuetuple 'System\.ValueTuple')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.valuetuple 'System\.ValueTuple')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.valuetuple 'System\.ValueTuple')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosRequestConfig\.BaseUrl Property

Prepended to [Url](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.Url') unless it is absolute\.

```csharp
public string? BaseUrl { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosRequestConfig\.CancellationToken Property

Cancels the request \(axios' `signal`\)\.

```csharp
public System.Threading.CancellationToken CancellationToken { get; set; }
```

#### Property Value
[System\.Threading\.CancellationToken](https://learn.microsoft.com/en-us/dotnet/api/system.threading.cancellationtoken 'System\.Threading\.CancellationToken')

### AxiosRequestConfig\.CommonHeaders Property

Shortcut for `MethodHeaders["common"]`\.

```csharp
public AxiosNet.Models.AxiosHeaders CommonHeaders { get; }
```

#### Property Value
[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')

### AxiosRequestConfig\.Data Property

Request body, never inherited from defaults\. A string is sent as is, a byte\[\] or Stream as binary,
an [System\.Net\.Http\.HttpContent](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpcontent 'System\.Net\.Http\.HttpContent') as is, anything else as JSON, or urlencoded / multipart when
the Content\-Type header asks for it\.

```csharp
public object? Data { get; set; }
```

#### Property Value
[System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

### AxiosRequestConfig\.Decompress Property

Automatically decompress gzip, deflate and brotli responses\. Defaults to true\. Needs the built\-in handler\.

```csharp
public System.Nullable<bool> Decompress { get; set; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosRequestConfig\.FormSerializer Property

Controls how object bodies are serialized as `multipart/form-data` or `application/x-www-form-urlencoded`\.

```csharp
public AxiosNet.Config.AxiosFormSerializer? FormSerializer { get; set; }
```

#### Property Value
[AxiosFormSerializer](AxiosNet.Config.AxiosFormSerializer.md 'AxiosNet\.Config\.AxiosFormSerializer')

### AxiosRequestConfig\.Headers Property

Headers sent with this request \(override [MethodHeaders](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigmethodheaders-property 'AxiosNet\.Config\.AxiosRequestConfig\.MethodHeaders')\)\.

```csharp
public AxiosNet.Models.AxiosHeaders Headers { get; set; }
```

#### Property Value
[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')

### AxiosRequestConfig\.MaxBodyLength Property

Maximum request body size in bytes, \-1 for unlimited, when the length is known\.

```csharp
public System.Nullable<long> MaxBodyLength { get; set; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.Int64](https://learn.microsoft.com/en-us/dotnet/api/system.int64 'System\.Int64')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosRequestConfig\.MaxContentLength Property

Maximum response size in bytes, \-1 for unlimited\. Exceeding it throws ERR\_BAD\_RESPONSE\.

```csharp
public System.Nullable<long> MaxContentLength { get; set; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.Int64](https://learn.microsoft.com/en-us/dotnet/api/system.int64 'System\.Int64')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosRequestConfig\.MaxRedirects Property

Maximum redirects followed; 0 disables redirects\. Needs the built\-in handler\.

```csharp
public System.Nullable<int> MaxRedirects { get; set; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosRequestConfig\.Method Property

HTTP method, GET when unset\.

```csharp
public System.Net.Http.HttpMethod? Method { get; set; }
```

#### Property Value
[System\.Net\.Http\.HttpMethod](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpmethod 'System\.Net\.Http\.HttpMethod')

### AxiosRequestConfig\.MethodHeaders Property

Default headers per lowercase method name, plus "common" applied to every request
\(axios' `defaults.headers.common` / `defaults.headers.post`\)\.

```csharp
public System.Collections.Generic.Dictionary<string,AxiosNet.Models.AxiosHeaders> MethodHeaders { get; set; }
```

#### Property Value
[System\.Collections\.Generic\.Dictionary&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2 'System\.Collections\.Generic\.Dictionary\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2 'System\.Collections\.Generic\.Dictionary\`2')[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2 'System\.Collections\.Generic\.Dictionary\`2')

### AxiosRequestConfig\.OnDownloadProgress Property

Called as the response body is received\.

```csharp
public System.Action<AxiosNet.Models.AxiosProgressEvent>? OnDownloadProgress { get; set; }
```

#### Property Value
[System\.Action&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')[AxiosProgressEvent](AxiosNet.Models.AxiosProgressEvent.md 'AxiosNet\.Models\.AxiosProgressEvent')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')

### AxiosRequestConfig\.OnUploadProgress Property

Called as the request body is sent\.

```csharp
public System.Action<AxiosNet.Models.AxiosProgressEvent>? OnUploadProgress { get; set; }
```

#### Property Value
[System\.Action&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')[AxiosProgressEvent](AxiosNet.Models.AxiosProgressEvent.md 'AxiosNet\.Models\.AxiosProgressEvent')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')

### AxiosRequestConfig\.Params Property

Query string parameters\. Null values are skipped; arrays and nested objects follow
[ParamsSerializer](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigparamsserializer-property 'AxiosNet\.Config\.AxiosRequestConfig\.ParamsSerializer')\.

```csharp
public System.Collections.Generic.Dictionary<string,object?> Params { get; set; }
```

#### Property Value
[System\.Collections\.Generic\.Dictionary&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2 'System\.Collections\.Generic\.Dictionary\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2 'System\.Collections\.Generic\.Dictionary\`2')[System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2 'System\.Collections\.Generic\.Dictionary\`2')

### AxiosRequestConfig\.ParamsSerializer Property

Controls how [Params](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigparams-property 'AxiosNet\.Config\.AxiosRequestConfig\.Params') are turned into a query string\.

```csharp
public AxiosNet.Config.AxiosParamsSerializer? ParamsSerializer { get; set; }
```

#### Property Value
[AxiosParamsSerializer](AxiosNet.Config.AxiosParamsSerializer.md 'AxiosNet\.Config\.AxiosParamsSerializer')

### AxiosRequestConfig\.Proxy Property

Proxy settings; [Disabled](AxiosNet.Config.AxiosProxy.md#axiosproxydisabled-field 'AxiosNet\.Config\.AxiosProxy\.Disabled') ignores system proxies\. Needs the built\-in handler\.

```csharp
public AxiosNet.Config.AxiosProxy? Proxy { get; set; }
```

#### Property Value
[AxiosProxy](AxiosNet.Config.AxiosProxy.md 'AxiosNet\.Config\.AxiosProxy')

### AxiosRequestConfig\.Redact Property

Config keys masked \(case\-insensitive, recursive\) by [ToJSON\(\)](AxiosNet.Errors.AxiosException.md#axiosexceptiontojson-method 'AxiosNet\.Errors\.AxiosException\.ToJSON\(\)')\.

```csharp
public System.Collections.Generic.List<string>? Redact { get; set; }
```

#### Property Value
[System\.Collections\.Generic\.List&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1 'System\.Collections\.Generic\.List\`1')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1 'System\.Collections\.Generic\.List\`1')

### AxiosRequestConfig\.ResponseEncoding Property

Encoding used to decode the body\. Defaults to the response charset, then UTF\-8\.

```csharp
public System.Text.Encoding? ResponseEncoding { get; set; }
```

#### Property Value
[System\.Text\.Encoding](https://learn.microsoft.com/en-us/dotnet/api/system.text.encoding 'System\.Text\.Encoding')

### AxiosRequestConfig\.ResponseType Property

Inferred from `T` when unset \(string, byte\[\], Stream, otherwise JSON\)\.

```csharp
public System.Nullable<AxiosNet.Config.AxiosResponseType> ResponseType { get; set; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[AxiosResponseType](AxiosNet.Config.AxiosResponseType.md 'AxiosNet\.Config\.AxiosResponseType')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosRequestConfig\.Timeout Property

Aborts the request when exceeded\. Unset or zero means no timeout\.

```csharp
public System.Nullable<System.TimeSpan> Timeout { get; set; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.TimeSpan](https://learn.microsoft.com/en-us/dotnet/api/system.timespan 'System\.TimeSpan')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosRequestConfig\.TransformRequest Property

Runs on [Data](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigdata-property 'AxiosNet\.Config\.AxiosRequestConfig\.Data') before it is turned into content; may edit the headers\.

```csharp
public System.Collections.Generic.List<System.Func<object?,AxiosNet.Models.AxiosHeaders,object?>>? TransformRequest { get; set; }
```

#### Property Value
[System\.Collections\.Generic\.List&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1 'System\.Collections\.Generic\.List\`1')[System\.Func&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-3 'System\.Func\`3')[System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-3 'System\.Func\`3')[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-3 'System\.Func\`3')[System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-3 'System\.Func\`3')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1 'System\.Collections\.Generic\.List\`1')

### AxiosRequestConfig\.TransformResponse Property

Runs on the raw body \(string, or byte\[\] for [Bytes](AxiosNet.Config.AxiosResponseType.md 'AxiosNet\.Config\.AxiosResponseType\.Bytes')\)
before it is converted to `T`\. Arguments: data, response headers, status\.

```csharp
public System.Collections.Generic.List<System.Func<object?,AxiosNet.Models.AxiosHeaders,int,object?>>? TransformResponse { get; set; }
```

#### Property Value
[System\.Collections\.Generic\.List&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1 'System\.Collections\.Generic\.List\`1')[System\.Func&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-4 'System\.Func\`4')[System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-4 'System\.Func\`4')[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-4 'System\.Func\`4')[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-4 'System\.Func\`4')[System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-4 'System\.Func\`4')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.list-1 'System\.Collections\.Generic\.List\`1')

### AxiosRequestConfig\.Transitional Property

Behaviors kept for compatibility with older axios versions\.

```csharp
public AxiosNet.Config.AxiosTransitional? Transitional { get; set; }
```

#### Property Value
[AxiosTransitional](AxiosNet.Config.AxiosTransitional.md 'AxiosNet\.Config\.AxiosTransitional')

### AxiosRequestConfig\.Url Property

Server URL, absolute or relative to [BaseUrl](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigbaseurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.BaseUrl')\.

```csharp
public string? Url { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosRequestConfig\.ValidateStatus Property

Decides whether a status code resolves \(true\) or throws \(false\)\. Defaults to 2xx\.

```csharp
public System.Func<int,bool>? ValidateStatus { get; set; }
```

#### Property Value
[System\.Func&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')