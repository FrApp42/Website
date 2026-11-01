---
title: "AxiosTransitional Class"
sidebar_label: "AxiosTransitional"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Config](AxiosNet.Config.md 'AxiosNet\.Config')

Behaviors kept for compatibility with older axios versions\.

```csharp
public class AxiosTransitional
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosTransitional
## Properties

### AxiosTransitional\.ClarifyTimeoutError Property

Timeouts fail with ETIMEDOUT instead of ECONNABORTED\.

```csharp
public bool ClarifyTimeoutError { get; set; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

### AxiosTransitional\.ForcedJsonParsing Property

When false, `T = object` returns the raw text instead of parsing it as JSON\.

```csharp
public bool ForcedJsonParsing { get; set; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

### AxiosTransitional\.SilentJsonParsing Property

With an explicit [Json](AxiosNet.Config.AxiosResponseType.md 'AxiosNet\.Config\.AxiosResponseType\.Json'), a JSON parse failure yields default instead of throwing\.

```csharp
public bool SilentJsonParsing { get; set; }
```

#### Property Value
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')