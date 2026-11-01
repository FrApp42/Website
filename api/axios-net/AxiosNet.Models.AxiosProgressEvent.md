---
title: "AxiosProgressEvent Class"
sidebar_label: "AxiosProgressEvent"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Models](AxiosNet.Models.md 'AxiosNet\.Models')

Progress of a request body upload or of a response download\.

```csharp
public sealed class AxiosProgressEvent
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosProgressEvent
## Properties

### AxiosProgressEvent\.Bytes Property

Bytes transferred since the previous event\.

```csharp
public long Bytes { get; init; }
```

#### Property Value
[System\.Int64](https://learn.microsoft.com/en-us/dotnet/api/system.int64 'System\.Int64')

### AxiosProgressEvent\.Download Property

True for a download event\.

```csharp
public bool Download { get; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

### AxiosProgressEvent\.Estimated Property

Estimated time remaining, when the rate and the total are known\.

```csharp
public System.Nullable<System.TimeSpan> Estimated { get; init; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.TimeSpan](https://learn.microsoft.com/en-us/dotnet/api/system.timespan 'System\.TimeSpan')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosProgressEvent\.Loaded Property

Bytes transferred so far\.

```csharp
public long Loaded { get; init; }
```

#### Property Value
[System\.Int64](https://learn.microsoft.com/en-us/dotnet/api/system.int64 'System\.Int64')

### AxiosProgressEvent\.Progress Property

Fraction between 0 and 1, when the total is known\.

```csharp
public System.Nullable<double> Progress { get; init; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.Double](https://learn.microsoft.com/en-us/dotnet/api/system.double 'System\.Double')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosProgressEvent\.Rate Property

Bytes per second since the previous event\.

```csharp
public System.Nullable<double> Rate { get; init; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.Double](https://learn.microsoft.com/en-us/dotnet/api/system.double 'System\.Double')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosProgressEvent\.Total Property

Total number of bytes, when known\.

```csharp
public System.Nullable<long> Total { get; init; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[System\.Int64](https://learn.microsoft.com/en-us/dotnet/api/system.int64 'System\.Int64')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosProgressEvent\.Upload Property

True for an upload event\.

```csharp
public bool Upload { get; init; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')