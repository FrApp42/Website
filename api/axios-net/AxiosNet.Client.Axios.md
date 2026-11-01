---
title: "Axios Class"
sidebar_label: "Axios"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Client](AxiosNet.Client.md 'AxiosNet\.Client')

Default shared client, mirroring the axios top\-level API:
`await Axios.Get<User>("https://api.test/users/1")`\.

```csharp
public static class Axios
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → Axios
## Properties

### Axios\.Defaults Property

Defaults applied to every request sent through the shared client\.

```csharp
public static AxiosNet.Config.AxiosRequestConfig Defaults { get; }
```

#### Property Value
[AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

### Axios\.Interceptors Property

Interceptors of the shared client\.

```csharp
public static AxiosNet.Interceptors.AxiosInterceptors Interceptors { get; }
```

#### Property Value
[AxiosInterceptors](AxiosNet.Interceptors.AxiosInterceptors.md 'AxiosNet\.Interceptors\.AxiosInterceptors')

### Axios\.Version Property

Library version\.

```csharp
public static string Version { get; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')
## Methods

### Axios\.All\<T\>\(Task\<T\>\[\]\) Method

Waits for every request, like `axios.all`\.

```csharp
public static System.Threading.Tasks.Task<T[]> All<T>(params System.Threading.Tasks.Task<T>[] requests);
```
#### Type parameters

`T`
#### Parameters

`requests` [System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.All\<T\>\(System\.Threading\.Tasks\.Task\<T\>\[\]\)\.T')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[\[\]](https://learn.microsoft.com/en-us/dotnet/api/system.array 'System\.Array')

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.All\<T\>\(System\.Threading\.Tasks\.Task\<T\>\[\]\)\.T')[\[\]](https://learn.microsoft.com/en-us/dotnet/api/system.array 'System\.Array')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.Create\(AxiosRequestConfig, HttpMessageHandler\) Method

Creates an isolated client with its own defaults and interceptors\.

```csharp
public static AxiosNet.Client.AxiosClient Create(AxiosNet.Config.AxiosRequestConfig? config=null, System.Net.Http.HttpMessageHandler? handler=null);
```
#### Parameters

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

`handler` [System\.Net\.Http\.HttpMessageHandler](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httpmessagehandler 'System\.Net\.Http\.HttpMessageHandler')

#### Returns
[AxiosClient](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient')

### Axios\.Delete\<T\>\(string, AxiosRequestConfig\) Method

Sends a DELETE request\.

```csharp
public static System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Delete<T>(string url, AxiosNet.Config.AxiosRequestConfig? config=null);
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
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.Delete\<T\>\(string, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.Get\<T\>\(string, AxiosRequestConfig\) Method

Sends a GET request\.

```csharp
public static System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Get<T>(string url, AxiosNet.Config.AxiosRequestConfig? config=null);
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
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.Get\<T\>\(string, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.GetUri\(AxiosRequestConfig\) Method

Returns the final URL for [config](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.GetUri\(AxiosNet\.Config\.AxiosRequestConfig\)\.config') without sending a request\.

```csharp
public static string GetUri(AxiosNet.Config.AxiosRequestConfig? config=null);
```
#### Parameters

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

#### Returns
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### Axios\.Head\<T\>\(string, AxiosRequestConfig\) Method

Sends a HEAD request\.

```csharp
public static System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Head<T>(string url, AxiosNet.Config.AxiosRequestConfig? config=null);
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
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.Head\<T\>\(string, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.IsAxiosError\(object\) Method

True when [error](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.IsAxiosError\(object\)\.error') comes from axios \(any [AxiosException](AxiosNet.Errors.AxiosException.md 'AxiosNet\.Errors\.AxiosException')\)\.

```csharp
public static bool IsAxiosError(object? error);
```
#### Parameters

`error` [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

#### Returns
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

### Axios\.IsCancel\(object\) Method

True when the request was canceled through its cancellation token\.

```csharp
public static bool IsCancel(object? error);
```
#### Parameters

`error` [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

#### Returns
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

### Axios\.MergeConfig\(AxiosRequestConfig, AxiosRequestConfig\) Method

Merges two configs; [overrides](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.MergeConfig\(AxiosNet\.Config\.AxiosRequestConfig, AxiosNet\.Config\.AxiosRequestConfig\)\.overrides') wins, headers and params are merged key by key\.

```csharp
public static AxiosNet.Config.AxiosRequestConfig MergeConfig(AxiosNet.Config.AxiosRequestConfig config, AxiosNet.Config.AxiosRequestConfig? overrides);
```
#### Parameters

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

`overrides` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

#### Returns
[AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

### Axios\.Options\<T\>\(string, AxiosRequestConfig\) Method

Sends an OPTIONS request\.

```csharp
public static System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Options<T>(string url, AxiosNet.Config.AxiosRequestConfig? config=null);
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
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.Options\<T\>\(string, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.Patch\<T\>\(string, object, AxiosRequestConfig\) Method

Sends a PATCH request\.

```csharp
public static System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Patch<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
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
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.Patch\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.PatchForm\<T\>\(string, object, AxiosRequestConfig\) Method

Sends a PATCH request with `Content-Type: multipart/form-data`\.

```csharp
public static System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> PatchForm<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
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
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.PatchForm\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.Post\<T\>\(string, object, AxiosRequestConfig\) Method

Sends a POST request\.

```csharp
public static System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Post<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
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
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.Post\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.PostForm\<T\>\(string, object, AxiosRequestConfig\) Method

Sends a POST request with `Content-Type: multipart/form-data`\.

```csharp
public static System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> PostForm<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
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
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.PostForm\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.Put\<T\>\(string, object, AxiosRequestConfig\) Method

Sends a PUT request\.

```csharp
public static System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Put<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
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
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.Put\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.PutForm\<T\>\(string, object, AxiosRequestConfig\) Method

Sends a PUT request with `Content-Type: multipart/form-data`\.

```csharp
public static System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> PutForm<T>(string url, object? data=null, AxiosNet.Config.AxiosRequestConfig? config=null);
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
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.PutForm\<T\>\(string, object, AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.Request\<T\>\(AxiosRequestConfig\) Method

Sends a request fully described by [config](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.Request\<T\>\(AxiosNet\.Config\.AxiosRequestConfig\)\.config')\.

```csharp
public static System.Threading.Tasks.Task<AxiosNet.Models.AxiosResponse<T>> Request<T>(AxiosNet.Config.AxiosRequestConfig config);
```
#### Type parameters

`T`

Type the response body is read as\.
#### Parameters

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

The request, merged over the defaults\.

#### Returns
[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[AxiosNet\.Models\.AxiosResponse&lt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[T](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios\.Request\<T\>\(AxiosNet\.Config\.AxiosRequestConfig\)\.T')[&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')

### Axios\.ToFormData\(object, AxiosFormSerializer\) Method

Serializes an object into multipart form data, like `axios.toFormData`\.

```csharp
public static System.Net.Http.MultipartFormDataContent ToFormData(object data, AxiosNet.Config.AxiosFormSerializer? options=null);
```
#### Parameters

`data` [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

`options` [AxiosFormSerializer](AxiosNet.Config.AxiosFormSerializer.md 'AxiosNet\.Config\.AxiosFormSerializer')

#### Returns
[System\.Net\.Http\.MultipartFormDataContent](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.multipartformdatacontent 'System\.Net\.Http\.MultipartFormDataContent')