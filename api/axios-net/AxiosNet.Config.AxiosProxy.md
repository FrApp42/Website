---
title: "AxiosProxy Class"
sidebar_label: "AxiosProxy"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Config](AxiosNet.Config.md 'AxiosNet\.Config')

Proxy settings of a request\.

```csharp
public class AxiosProxy
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosProxy
## Fields

### AxiosProxy\.Disabled Field

Pass as [Proxy](AxiosNet.Config.AxiosRequestConfig.md#axiosrequestconfigproxy-property 'AxiosNet\.Config\.AxiosRequestConfig\.Proxy') to ignore system and environment proxies\.

```csharp
public static readonly AxiosProxy Disabled;
```

#### Field Value
[AxiosProxy](AxiosNet.Config.AxiosProxy.md 'AxiosNet\.Config\.AxiosProxy')
## Properties

### AxiosProxy\.Auth Property

User name and password sent to the proxy, when it requires them\.

```csharp
public System.Nullable<(string Username,string Password)> Auth { get; set; }
```

#### Property Value
[System\.Nullable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')[&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.valuetuple 'System\.ValueTuple')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.valuetuple 'System\.ValueTuple')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.valuetuple 'System\.ValueTuple')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.nullable-1 'System\.Nullable\`1')

### AxiosProxy\.Host Property

Proxy host name or address\.

```csharp
public string Host { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosProxy\.Port Property

Proxy port\.

```csharp
public int Port { get; set; }
```

#### Property Value
[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')

### AxiosProxy\.Protocol Property

Proxy scheme, such as `http`\.

```csharp
public string Protocol { get; set; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')