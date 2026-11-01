---
title: "AxiosInterceptors Class"
sidebar_label: "AxiosInterceptors"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Interceptors](AxiosNet.Interceptors.md 'AxiosNet\.Interceptors')

The request and response interceptor chains of a client\.

```csharp
public sealed class AxiosInterceptors
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosInterceptors
## Properties

### AxiosInterceptors\.Request Property

Runs before sending, last registered first \(LIFO\)\. Return the \(modified\) config\.

```csharp
public AxiosNet.Interceptors.InterceptorManager<AxiosNet.Config.AxiosRequestConfig> Request { get; }
```

#### Property Value
[AxiosNet\.Interceptors\.InterceptorManager&lt;](AxiosNet.Interceptors.InterceptorManager_T_.md 'AxiosNet\.Interceptors\.InterceptorManager\<T\>')[AxiosRequestConfig](AxiosNet.Config.AxiosRequestConfig.md 'AxiosNet\.Config\.AxiosRequestConfig')[&gt;](AxiosNet.Interceptors.InterceptorManager_T_.md 'AxiosNet\.Interceptors\.InterceptorManager\<T\>')

### AxiosInterceptors\.Response Property

Runs after the response \(or error\) arrives, first registered first \(FIFO\)\.

```csharp
public AxiosNet.Interceptors.InterceptorManager<AxiosNet.Models.AxiosResponse> Response { get; }
```

#### Property Value
[AxiosNet\.Interceptors\.InterceptorManager&lt;](AxiosNet.Interceptors.InterceptorManager_T_.md 'AxiosNet\.Interceptors\.InterceptorManager\<T\>')[AxiosResponse](AxiosNet.Models.AxiosResponse.md 'AxiosNet\.Models\.AxiosResponse')[&gt;](AxiosNet.Interceptors.InterceptorManager_T_.md 'AxiosNet\.Interceptors\.InterceptorManager\<T\>')