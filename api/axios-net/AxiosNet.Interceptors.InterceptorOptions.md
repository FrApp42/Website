---
title: "InterceptorOptions Class"
sidebar_label: "InterceptorOptions"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Interceptors](AxiosNet.Interceptors.md 'AxiosNet\.Interceptors')

Options of a single interceptor\.

```csharp
public sealed class InterceptorOptions
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → InterceptorOptions
## Properties

### InterceptorOptions\.RunWhen Property

Request interceptors only: the interceptor is skipped when this returns false\.

```csharp
public System.Func<AxiosNet.Config.AxiosRequestConfig,bool>? RunWhen { get; set; }
```

#### Property Value
[System\.Func&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')

### InterceptorOptions\.Synchronous Property

Run without yielding to the scheduler\. If such a request interceptor throws, its rejection handler
is called and the remaining request interceptors are skipped; when the handler returns normally the
request is still dispatched with the last valid config\.

```csharp
public bool Synchronous { get; set; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')