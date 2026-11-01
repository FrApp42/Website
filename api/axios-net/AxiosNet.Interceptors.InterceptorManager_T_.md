---
title: "InterceptorManager<T> Class"
sidebar_label: "InterceptorManager<T>"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Interceptors](AxiosNet.Interceptors.md 'AxiosNet\.Interceptors')

An ordered chain of interceptors: register one with `Use`, remove it with `Eject` or `Clear`\.

```csharp
public sealed class InterceptorManager<T>
```
#### Type parameters

`T`

What the chain transforms: the request config or the response\.

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → InterceptorManager\<T\>
## Methods

### InterceptorManager\<T\>\.Clear\(\) Method

Removes every interceptor of this chain\.

```csharp
public void Clear();
```

### InterceptorManager\<T\>\.Eject\(int\) Method

Removes one interceptor\. Unknown or already ejected ids are ignored\.

```csharp
public void Eject(int id);
```
#### Parameters

`id` [System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')

### InterceptorManager\<T\>\.Use\(Func\<T,Task\<T\>\>, Func\<Exception,Task\<T\>\>, InterceptorOptions\) Method

Registers an interceptor and returns its id for [Eject\(int\)](AxiosNet.Interceptors.InterceptorManager_T_.md#interceptormanagertejectint-method 'AxiosNet\.Interceptors\.InterceptorManager\<T\>\.Eject\(int\)')\. [onRejected](AxiosNet.Interceptors.InterceptorManager_T_.md 'AxiosNet\.Interceptors\.InterceptorManager\<T\>\.Use\(System\.Func\<T,System\.Threading\.Tasks\.Task\<T\>\>, System\.Func\<System\.Exception,System\.Threading\.Tasks\.Task\<T\>\>, AxiosNet\.Interceptors\.InterceptorOptions\)\.onRejected')
receives the current error and returns a value to recover, or throws to keep the error flowing\.

```csharp
public int Use(System.Func<T,System.Threading.Tasks.Task<T>>? onFulfilled, System.Func<System.Exception,System.Threading.Tasks.Task<T>>? onRejected=null, AxiosNet.Interceptors.InterceptorOptions? options=null);
```
#### Parameters

`onFulfilled` [System\.Func&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[T](AxiosNet.Interceptors.InterceptorManager_T_.md 'AxiosNet\.Interceptors\.InterceptorManager\<T\>\.T')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[T](AxiosNet.Interceptors.InterceptorManager_T_.md 'AxiosNet\.Interceptors\.InterceptorManager\<T\>\.T')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')

`onRejected` [System\.Func&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[System\.Threading\.Tasks\.Task&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[T](AxiosNet.Interceptors.InterceptorManager_T_.md 'AxiosNet\.Interceptors\.InterceptorManager\<T\>\.T')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.threading.tasks.task-1 'System\.Threading\.Tasks\.Task\`1')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')

`options` [InterceptorOptions](AxiosNet.Interceptors.InterceptorOptions.md 'AxiosNet\.Interceptors\.InterceptorOptions')

#### Returns
[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')

### InterceptorManager\<T\>\.Use\(Func\<T,T\>, Func\<Exception,T\>, InterceptorOptions\) Method

Synchronous variant of [Use\(Func&lt;T,Task&lt;T&gt;&gt;, Func&lt;Exception,Task&lt;T&gt;&gt;, InterceptorOptions\)](AxiosNet.Interceptors.InterceptorManager_T_.md#interceptormanagertusefuncttaskt-funcexceptiontaskt-interceptoroptions-method 'AxiosNet\.Interceptors\.InterceptorManager\<T\>\.Use\(System\.Func\<T,System\.Threading\.Tasks\.Task\<T\>\>, System\.Func\<System\.Exception,System\.Threading\.Tasks\.Task\<T\>\>, AxiosNet\.Interceptors\.InterceptorOptions\)')\.

```csharp
public int Use(System.Func<T,T> onFulfilled, System.Func<System.Exception,T>? onRejected=null, AxiosNet.Interceptors.InterceptorOptions? options=null);
```
#### Parameters

`onFulfilled` [System\.Func&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[T](AxiosNet.Interceptors.InterceptorManager_T_.md 'AxiosNet\.Interceptors\.InterceptorManager\<T\>\.T')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[T](AxiosNet.Interceptors.InterceptorManager_T_.md 'AxiosNet\.Interceptors\.InterceptorManager\<T\>\.T')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')

`onRejected` [System\.Func&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[System\.Exception](https://learn.microsoft.com/en-us/dotnet/api/system.exception 'System\.Exception')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[T](AxiosNet.Interceptors.InterceptorManager_T_.md 'AxiosNet\.Interceptors\.InterceptorManager\<T\>\.T')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')

`options` [InterceptorOptions](AxiosNet.Interceptors.InterceptorOptions.md 'AxiosNet\.Interceptors\.InterceptorOptions')

#### Returns
[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')