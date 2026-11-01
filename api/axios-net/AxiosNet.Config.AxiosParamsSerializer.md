---
title: "AxiosParamsSerializer Class"
sidebar_label: "AxiosParamsSerializer"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Config](AxiosNet.Config.md 'AxiosNet\.Config')

Controls how [Params](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigparams-property 'AxiosNet\.Config\.AxiosRequestConfig\.Params') are turned into a query string\.

```csharp
public class AxiosParamsSerializer
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosParamsSerializer
## Properties

### AxiosParamsSerializer\.Encode Property

Encodes each key and value\. Defaults to an encodeURIComponent\-like encoder \(space as \+, keeps \[\]:$,\)\.

```csharp
public System.Func<string,string>? Encode { get; set; }
```

#### Property Value
[System\.Func&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')

### AxiosParamsSerializer\.Indexes Property

Array format: null = `a=1&a=2`, false = `a[]=1`, true = `a[0]=1`\.

```csharp
public System.Nullable<bool> Indexes { get; set; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosParamsSerializer\.MaxDepth Property

Maximum nesting depth; exceeded depth throws ERR\_FORM\_DATA\_DEPTH\_EXCEEDED\.

```csharp
public int MaxDepth { get; set; }
```

#### Property Value
[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')

### AxiosParamsSerializer\.Serialize Property

Serializes the whole params object; takes precedence over every other option\.

```csharp
public System.Func<System.Collections.Generic.IReadOnlyDictionary<string,object?>,string>? Serialize { get; set; }
```

#### Property Value
[System\.Func&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[System\.Collections\.Generic\.IReadOnlyDictionary&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ireadonlydictionary-2 'System\.Collections\.Generic\.IReadOnlyDictionary\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ireadonlydictionary-2 'System\.Collections\.Generic\.IReadOnlyDictionary\`2')[System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ireadonlydictionary-2 'System\.Collections\.Generic\.IReadOnlyDictionary\`2')[,](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.func-2 'System\.Func\`2')