---
title: "AxiosFile Class"
sidebar_label: "AxiosFile"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Models](AxiosNet.Models.md 'AxiosNet\.Models')

A file part for multipart bodies\.

```csharp
public sealed class AxiosFile
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosFile
## Constructors

### AxiosFile\(byte\[\], string, string\) Constructor

Creates a file part from bytes\.

```csharp
public AxiosFile(byte[] content, string fileName, string? contentType=null);
```
#### Parameters

`content` [System\.Byte](https://learn.microsoft.com/en-us/dotnet/api/system.byte 'System\.Byte')[\[\]](https://learn.microsoft.com/en-us/dotnet/api/system.array 'System\.Array')

The file content\.

`fileName` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

File name sent with the part\.

`contentType` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Media type of the part\.

### AxiosFile\(Stream, string, string\) Constructor

Creates a file part from a stream\.

```csharp
public AxiosFile(System.IO.Stream content, string fileName, string? contentType=null);
```
#### Parameters

`content` [System\.IO\.Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream 'System\.IO\.Stream')

The file content, read when the request is sent\.

`fileName` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

File name sent with the part\.

`contentType` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Media type of the part\.
## Properties

### AxiosFile\.Content Property

The file content, a `byte[]` or a [System\.IO\.Stream](https://learn.microsoft.com/en-us/dotnet/api/system.io.stream 'System\.IO\.Stream')\.

```csharp
public object Content { get; }
```

#### Property Value
[System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object')

### AxiosFile\.ContentType Property

Media type of the part, when set\.

```csharp
public string? ContentType { get; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosFile\.FileName Property

File name sent with the multipart part\.

```csharp
public string FileName { get; }
```

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')