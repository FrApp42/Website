---
title: "AxiosResponse<T> Class"
sidebar_label: "AxiosResponse<T>"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Models](AxiosNet.Models.md 'AxiosNet\.Models')

A response whose body is converted to [T](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>\.T')\.

```csharp
public class AxiosResponse<T> : AxiosNet.Models.AxiosResponse
```
#### Type parameters

`T`

Type of the body\.

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → [AxiosResponse](AxiosNet.Models.AxiosResponse.md 'AxiosNet\.Models\.AxiosResponse') → AxiosResponse\<T\>
## Properties

### AxiosResponse\<T\>\.Data Property

Body converted to [T](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>\.T') \(default when empty\)\.

```csharp
public T? Data { get; init; }
```

#### Property Value
[T](AxiosNet.Models.AxiosResponse_T_.md 'AxiosNet\.Models\.AxiosResponse\<T\>\.T')