---
title: "AxiosException Class"
sidebar_label: "AxiosException"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Errors](AxiosNet.Errors.md 'AxiosNet\.Errors')

Thrown when a request fails: rejected status, timeout, cancellation, network error or bad configuration\.

```csharp
public class AxiosException : System.Exception
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception') → AxiosException

Derived  
↳ [CanceledError](AxiosNet.Errors.CanceledError.md 'AxiosNet\.Errors\.CanceledError')
## Constructors

### AxiosException\(string, string, AxiosRequestConfig, HttpRequestMessage, AxiosResponse, Exception\) Constructor

Creates the error of a failed request\.

```csharp
public AxiosException(string message, string code, AxiosNet.Config.AxiosRequestConfig config, System.Net.Http.HttpRequestMessage? request=null, AxiosNet.Models.AxiosResponse? response=null, System.Exception? inner=null);
```
#### Parameters

`message` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Description of the failure\.

`code` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

One of [AxiosErrorCodes](AxiosNet.Errors.AxiosErrorCodes.md 'AxiosNet\.Errors\.AxiosErrorCodes')\.

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

The config the request was sent with\.

`request` [System\.Net\.Http\.HttpRequestMessage](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httprequestmessage 'System\.Net\.Http\.HttpRequestMessage')

The request that was sent, when it got that far\.

`response` [AxiosResponse](AxiosNet.Models.AxiosResponse.md 'AxiosNet\.Models\.AxiosResponse')

The response, when the server answered\.

`inner` [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception')

The exception that caused this one\.
## Properties

### AxiosException\.Code Property

One of [AxiosErrorCodes](AxiosNet.Errors.AxiosErrorCodes.md 'AxiosNet\.Errors\.AxiosErrorCodes')\.

```csharp
public string Code { get; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosException\.Config Property

The config the request was sent with\.

```csharp
public AxiosNet.Config.AxiosRequestConfig Config { get; }
```

#### Property Value
[AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

### AxiosException\.IsAxiosError Property

Always true, like the `isAxiosError` flag of axios errors\.

```csharp
public bool IsAxiosError { get; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

### AxiosException\.Request Property

The request that was sent, when it got that far\.

```csharp
public System.Net.Http.HttpRequestMessage? Request { get; }
```

#### Property Value
[System\.Net\.Http\.HttpRequestMessage](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httprequestmessage 'System\.Net\.Http\.HttpRequestMessage')

### AxiosException\.Response Property

Set when the server answered; [Data](AxiosNet.Models.AxiosResponse.md#axiosresponsedata-property 'AxiosNet\.Models\.AxiosResponse\.Data') holds the \(transformed\) body text\.

```csharp
public AxiosNet.Models.AxiosResponse? Response { get; }
```

#### Property Value
[AxiosResponse](AxiosNet.Models.AxiosResponse.md 'AxiosNet\.Models\.AxiosResponse')

### AxiosException\.Status Property

HTTP status of [Response](AxiosNet.Errors.AxiosException.md#axiosexceptionresponse-property 'AxiosNet\.Errors\.AxiosException\.Response'), when the server answered\.

```csharp
public System.Nullable<int> Status { get; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')
## Methods

### AxiosException\.ToJSON\(\) Method

Serializable view of the error\. Config keys listed in [Redact](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigredact-property 'AxiosNet\.Config\.AxiosRequestConfig\.Redact')
are masked \(case\-insensitive, recursive\)\.

```csharp
public System.Collections.Generic.IDictionary<string,object?> ToJSON();
```

#### Returns
[System\.Collections\.Generic\.IDictionary&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.idictionary-2 'System\.Collections\.Generic\.IDictionary\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.idictionary-2 'System\.Collections\.Generic\.IDictionary\`2')[System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.idictionary-2 'System\.Collections\.Generic\.IDictionary\`2')