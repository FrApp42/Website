---
title: "CanceledError Class"
sidebar_label: "CanceledError"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Errors](AxiosNet.Errors.md 'AxiosNet\.Errors')

Thrown when a request is canceled through [CancellationToken](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigcancellationtoken-property 'AxiosNet\.Config\.AxiosRequestConfig\.CancellationToken')\.

```csharp
public class CanceledError : AxiosNet.Errors.AxiosException
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception') → [AxiosException](AxiosNet.Errors.AxiosException.md 'AxiosNet\.Errors\.AxiosException') → CanceledError
## Constructors

### CanceledError\(AxiosRequestConfig, string, HttpRequestMessage, Exception\) Constructor

Creates the error of a canceled request\.

```csharp
public CanceledError(AxiosNet.Config.AxiosRequestConfig config, string message="canceled", System.Net.Http.HttpRequestMessage? request=null, System.Exception? inner=null);
```
#### Parameters

`config` [AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')

The config the request was sent with\.

`message` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Description of the cancellation\.

`request` [System\.Net\.Http\.HttpRequestMessage](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.httprequestmessage 'System\.Net\.Http\.HttpRequestMessage')

The request that was sent, when it got that far\.

`inner` [System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception')

The exception that caused this one\.