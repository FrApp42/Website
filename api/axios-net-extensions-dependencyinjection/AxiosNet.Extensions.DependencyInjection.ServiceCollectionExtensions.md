---
title: "ServiceCollectionExtensions Class"
sidebar_label: "ServiceCollectionExtensions"
---

[Axios\.Net\.Extensions\.DependencyInjection](index.md 'index') › [AxiosNet\.Extensions\.DependencyInjection](AxiosNet.Extensions.DependencyInjection.md 'AxiosNet\.Extensions\.DependencyInjection')

Dependency injection extensions for [AxiosClient](/api/axios-net/AxiosNet.Client.AxiosClient 'AxiosNet\.Client\.AxiosClient')\.

```csharp
public static class ServiceCollectionExtensions
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → ServiceCollectionExtensions
## Methods

### ServiceCollectionExtensions\.AddAxios\(this IServiceCollection, Action\<AxiosRequestConfig\>\) Method

Registers [AxiosClient](/api/axios-net/AxiosNet.Client.AxiosClient 'AxiosNet\.Client\.AxiosClient') as a singleton\. Its requests go through the `Axios.Net` named
[System\.Net\.Http\.IHttpClientFactory](https://learn.microsoft.com/en-us/dotnet/api/system.net.http.ihttpclientfactory 'System\.Net\.Http\.IHttpClientFactory') client, so handlers can be chained with
`AddHttpClient("Axios.Net").AddHttpMessageHandler<T>()`\.

```csharp
public static Microsoft.Extensions.DependencyInjection.IServiceCollection AddAxios(this Microsoft.Extensions.DependencyInjection.IServiceCollection services, System.Action<AxiosNet.Config.AxiosRequestConfig>? configure=null);
```
#### Parameters

`services` [Microsoft\.Extensions\.DependencyInjection\.IServiceCollection](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection 'Microsoft\.Extensions\.DependencyInjection\.IServiceCollection')

The service collection to add the client to\.

`configure` [System\.Action&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')[AxiosRequestConfig](/api/axios-net/AxiosNet.Config.AxiosRequestConfig 'AxiosNet\.Config\.AxiosRequestConfig')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.action-1 'System\.Action\`1')

Sets the defaults merged into every request of the client\.

#### Returns
[Microsoft\.Extensions\.DependencyInjection\.IServiceCollection](https://learn.microsoft.com/en-us/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection 'Microsoft\.Extensions\.DependencyInjection\.IServiceCollection')  
The same service collection, for chaining\.

## Remarks
The handler comes from the factory, so [MaxRedirects](/api/axios-net/AxiosNet.Config.AxiosRequestConfig 'AxiosNet\.Config\.AxiosRequestConfig\.MaxRedirects'),
[Decompress](/api/axios-net/AxiosNet.Config.AxiosRequestConfig 'AxiosNet\.Config\.AxiosRequestConfig\.Decompress') and [Proxy](/api/axios-net/AxiosNet.Config.AxiosRequestConfig 'AxiosNet\.Config\.AxiosRequestConfig\.Proxy') are no longer read
from the request config: configure them on the primary handler\. The singleton keeps the handler it was
created with, so it is not recycled and DNS changes are not picked up\.