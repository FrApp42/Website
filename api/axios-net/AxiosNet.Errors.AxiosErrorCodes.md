---
title: "AxiosErrorCodes Class"
sidebar_label: "AxiosErrorCodes"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Errors](AxiosNet.Errors.md 'AxiosNet\.Errors')

Values of [Code](AxiosNet.Errors.AxiosException.md#axiosexceptioncode-property 'AxiosNet\.Errors\.AxiosException\.Code'), same identifiers as axios\.

```csharp
public static class AxiosErrorCodes
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosErrorCodes
## Fields

### AxiosErrorCodes\.BadOption Field

A config option is not valid\.

```csharp
public const string BadOption = "ERR_BAD_OPTION";
```

#### Field Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosErrorCodes\.BadOptionValue Field

A config option has an invalid value\.

```csharp
public const string BadOptionValue = "ERR_BAD_OPTION_VALUE";
```

#### Field Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosErrorCodes\.BadRequest Field

The server answered with a 4xx status that was rejected\.

```csharp
public const string BadRequest = "ERR_BAD_REQUEST";
```

#### Field Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosErrorCodes\.BadResponse Field

The status was rejected, a size limit was exceeded or the body could not be read\.

```csharp
public const string BadResponse = "ERR_BAD_RESPONSE";
```

#### Field Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosErrorCodes\.Canceled Field

The request was canceled\.

```csharp
public const string Canceled = "ERR_CANCELED";
```

#### Field Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosErrorCodes\.FormDataDepthExceeded Field

Params or a form object are nested too deeply\.

```csharp
public const string FormDataDepthExceeded = "ERR_FORM_DATA_DEPTH_EXCEEDED";
```

#### Field Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosErrorCodes\.InvalidUrl Field

The URL is invalid or not absolute\.

```csharp
public const string InvalidUrl = "ERR_INVALID_URL";
```

#### Field Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosErrorCodes\.Network Field

The request could not reach the server\.

```csharp
public const string Network = "ERR_NETWORK";
```

#### Field Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosErrorCodes\.TimedOut Field

Request timed out with `Transitional.ClarifyTimeoutError` enabled\.

```csharp
public const string TimedOut = "ETIMEDOUT";
```

#### Field Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosErrorCodes\.Timeout Field

Request timed out \(default\)\.

```csharp
public const string Timeout = "ECONNABORTED";
```

#### Field Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')