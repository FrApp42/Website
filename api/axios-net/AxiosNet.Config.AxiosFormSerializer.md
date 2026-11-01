---
title: "AxiosFormSerializer Class"
sidebar_label: "AxiosFormSerializer"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Config](AxiosNet.Config.md 'AxiosNet\.Config')

Controls multipart and urlencoded serialization of object bodies\.

```csharp
public class AxiosFormSerializer
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosFormSerializer
## Properties

### AxiosFormSerializer\.Dots Property

Use dot notation \(`a.b`\) instead of brackets \(`a[b]`\)\.

```csharp
public bool Dots { get; set; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

### AxiosFormSerializer\.Indexes Property

Array format, same meaning as [Indexes](AxiosNet.Config.AxiosParamsSerializer.md#axiosparamsserializerindexes-property 'AxiosNet\.Config\.AxiosParamsSerializer\.Indexes')\.

```csharp
public System.Nullable<bool> Indexes { get; set; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosFormSerializer\.MaxDepth Property

Maximum nesting depth of an object body; going deeper fails with [FormDataDepthExceeded](AxiosNet.Errors.AxiosErrorCodes.md#axioserrorcodesformdatadepthexceeded-field 'AxiosNet\.Errors\.AxiosErrorCodes\.FormDataDepthExceeded')\.

```csharp
public int MaxDepth { get; set; }
```

#### Property Value
[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')

### AxiosFormSerializer\.MetaTokens Property

Keep special key endings such as `{}` \(values of such keys are sent as JSON\)\.

```csharp
public bool MetaTokens { get; set; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')