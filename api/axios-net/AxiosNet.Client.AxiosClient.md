---
title: "AxiosClient Class"
sidebar_label: "AxiosClient"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Client](AxiosNet.Client.md 'AxiosNet\.Client')

HTTP client with its own defaults and interceptors, the equivalent of an axios instance\.
Created with [Create\(AxiosRequestConfig, HttpMessageHandler\)](AxiosNet.Client.Axios.md#axioscreateaxiosrequestconfig-httpmessagehandler-method 'AxiosNet\.Client\.Axios\.Create\(AxiosNet\.Config\.AxiosRequestConfig, System\.Net\.Http\.HttpMessageHandler\)')\.

```csharp
public class AxiosClient
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosClient
## Constructors

### AxiosClient\(AxiosRequestConfig, HttpMessageHandler\) Constructor

```csharp
public AxiosClient(AxiosNet.Config.AxiosRequestConfig? defaults=null, System.Net.Http.HttpMessageHandler? handler=null);
```
#### Parameters

`defaults` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

Defaults merged into every request\.

`handler` [System\.Net\.Http\.HttpMessageHandler](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpmessagehandler 'System\.Net\.Http\.HttpMessageHandler')

Custom message handler \(the equivalent of an axios adapter\)\. When set, the handler\-level options
[MaxRedirects](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigmaxredirects-property 'AxiosNet\.Config\.AxiosRequestConfig\.MaxRedirects'), [Decompress](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigdecompress-property 'AxiosNet\.Config\.AxiosRequestConfig\.Decompress') and
[Proxy](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigproxy-property 'AxiosNet\.Config\.AxiosRequestConfig\.Proxy') are the handler's responsibility and ignored here\.
## Properties

### AxiosClient\.Defaults Property

Defaults applied to every request of this client\.

```csharp
public AxiosNet.Config.AxiosRequestConfig Defaults { get; }
```

#### Property Value
[AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

### AxiosClient\.Interceptors Property

Request and response interceptors of this client\.

```csharp
public AxiosNet.Interceptors.AxiosInterceptors Interceptors { get; }
```

#### Property Value
[AxiosInterceptors](AxiosNet.Interceptors.AxiosInterceptors.md 'AxiosNet\.Interceptors\.AxiosInterceptors')

### AxiosClient\.JsonOptions Property

Options used to serialize JSON bodies and to deserialize JSON responses\.

```csharp
public System.Text.Json.JsonSerializerOptions JsonOptions { get; set; }
```

#### Property Value
[System\.Text\.Json\.JsonSerializerOptions](https://learn.microsoft.com/en-us/dotnet/api/system.text.json.jsonserializeroptions 'System\.Text\.Json\.JsonSerializerOptions')
## Methods

### AxiosClient\.Delete\<T\>\(string, AxiosRequestConfig\) Method

Sends a DELETE request\.

```csharp
public System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Delete<T>(string url, AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Type parameters

`T`

Type the response body is read as\.
#### Parameters

`url` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Absolute URL, or relative to [BaseUrl](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigbaseurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.BaseUrl')\.

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

Config merged over the defaults for this request\.

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.Delete\<T\>\(string, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### AxiosClient\.Get\<T\>\(string, AxiosRequestConfig\) Method

Sends a GET request\.

```csharp
public System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Get<T>(string url, AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Type parameters

`T`

Type the response body is read as\.
#### Parameters

`url` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Absolute URL, or relative to [BaseUrl](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigbaseurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.BaseUrl')\.

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

Config merged over the defaults for this request\.

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.Get\<T\>\(string, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### AxiosClient\.GetUri\(AxiosRequestConfig\) Method

Returns the final URL \(base URL, params and serializer applied\) without sending anything\.

```csharp
public string GetUri(AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Parameters

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

#### Returns
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosClient\.Head\<T\>\(string, AxiosRequestConfig\) Method

Sends a HEAD request\.

```csharp
public System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Head<T>(string url, AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Type parameters

`T`

Type the response body is read as\.
#### Parameters

`url` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Absolute URL, or relative to [BaseUrl](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigbaseurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.BaseUrl')\.

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

Config merged over the defaults for this request\.

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.Head\<T\>\(string, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### AxiosClient\.Options\<T\>\(string, AxiosRequestConfig\) Method

Sends an OPTIONS request\.

```csharp
public System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Options<T>(string url, AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Type parameters

`T`

Type the response body is read as\.
#### Parameters

`url` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Absolute URL, or relative to [BaseUrl](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigbaseurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.BaseUrl')\.

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

Config merged over the defaults for this request\.

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.Options\<T\>\(string, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### AxiosClient\.Patch\<T\>\(string, object, AxiosRequestConfig\) Method

Sends a PATCH request\.

```csharp
public System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Patch<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Type parameters

`T`

Type the response body is read as\.
#### Parameters

`url` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Absolute URL, or relative to [BaseUrl](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigbaseurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.BaseUrl')\.

`data` [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

Request body, serialized according to its type\.

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

Config merged over the defaults for this request\.

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.Patch\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### AxiosClient\.PatchForm\<T\>\(string, object, AxiosRequestConfig\) Method

Sends a PATCH request with `Content-Type: multipart/form-data`\.

```csharp
public System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> PatchForm<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Type parameters

`T`

Type the response body is read as\.
#### Parameters

`url` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Absolute URL, or relative to [BaseUrl](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigbaseurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.BaseUrl')\.

`data` [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

Request body, serialized according to its type\.

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

Config merged over the defaults for this request\.

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.PatchForm\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### AxiosClient\.Post\<T\>\(string, object, AxiosRequestConfig\) Method

Sends a POST request\.

```csharp
public System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Post<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Type parameters

`T`

Type the response body is read as\.
#### Parameters

`url` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Absolute URL, or relative to [BaseUrl](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigbaseurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.BaseUrl')\.

`data` [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

Request body, serialized according to its type\.

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

Config merged over the defaults for this request\.

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.Post\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### AxiosClient\.PostForm\<T\>\(string, object, AxiosRequestConfig\) Method

POST with `Content-Type: multipart/form-data`\.

```csharp
public System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> PostForm<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Type parameters

`T`
#### Parameters

`url` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

`data` [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.PostForm\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### AxiosClient\.Put\<T\>\(string, object, AxiosRequestConfig\) Method

Sends a PUT request\.

```csharp
public System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Put<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Type parameters

`T`

Type the response body is read as\.
#### Parameters

`url` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Absolute URL, or relative to [BaseUrl](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigbaseurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.BaseUrl')\.

`data` [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

Request body, serialized according to its type\.

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

Config merged over the defaults for this request\.

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.Put\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### AxiosClient\.PutForm\<T\>\(string, object, AxiosRequestConfig\) Method

Sends a PUT request with `Content-Type: multipart/form-data`\.

```csharp
public System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> PutForm<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Type parameters

`T`

Type the response body is read as\.
#### Parameters

`url` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Absolute URL, or relative to [BaseUrl](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigbaseurl-property 'AxiosNet\.Config\.AxiosRequestConfig\.BaseUrl')\.

`data` [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

Request body, serialized according to its type\.

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

Config merged over the defaults for this request\.

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.PutForm\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### AxiosClient\.Request\<T\>\(AxiosRequestConfig\) Method

Sends a request fully described by [config](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.Request\<T\>\(AxiosNet\.Config\.AxiosRequestConfig\)\.config')\.

```csharp
public System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Request<T>(AxiosNet.Config.AxiosRequestConfig config);
```
#### Type parameters

`T`
#### Parameters

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient\.Request\<T\>\(AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')