---
title: "AxiosResponse Class"
sidebar_label: "AxiosResponse"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Models](AxiosNet.Models.md 'AxiosNet\.Models')

The response to a request, with an untyped body\.

```csharp
public class AxiosResponse
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosResponse

Derived  
↳ [AxiosResponse&lt;T&gt;](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>')
## Properties

### AxiosResponse\.Config Property

The config the request was sent with\.

```csharp
public AxiosNet.Config.AxiosRequestConfig Config { get; init; }
```

#### Property Value
[AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

### AxiosResponse\.Data Property

Untyped body: the converted value, or the \(transformed\) body text on error responses\.

```csharp
public object? Data { get; init; }
```

#### Property Value
[System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

### AxiosResponse\.Duration Property

Approximate time taken until the response was fully received\.

```csharp
public System.TimeSpan Duration { get; init; }
```

#### Property Value
[System\.TimeSpan](https://learn.microsoft.com/en-us/dotnet/api/system.timespan 'System\.TimeSpan')

### AxiosResponse\.Headers Property

Response and content headers\.

```csharp
public AxiosNet.Models.AxiosHeaders Headers { get; init; }
```

#### Property Value
[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')

### AxiosResponse\.Request Property

The request that was sent\.

```csharp
public System.Net.Http.HttpRequestMessage? Request { get; init; }
```

#### Property Value
[System\.Net\.Http\.HttpRequestMessage](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httprequestmessage 'System\.Net\.Http\.HttpRequestMessage')

### AxiosResponse\.Status Property

HTTP status code\.

```csharp
public int Status { get; init; }
```

#### Property Value
[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')

### AxiosResponse\.StatusText Property

Reason phrase sent by the server\.

```csharp
public string? StatusText { get; init; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')