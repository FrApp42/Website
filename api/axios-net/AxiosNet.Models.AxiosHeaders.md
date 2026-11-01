---
title: "AxiosHeaders Class"
sidebar_label: "AxiosHeaders"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Models](AxiosNet.Models.md 'AxiosNet\.Models')

Case\-insensitive header collection, modeled after axios' `AxiosHeaders`\.

```csharp
public class AxiosHeaders : System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string, string>>, System.Collections.IEnumerable
```

Inheritance [System\.Object](https://learn.microsoft.com/en-us/dotnet/api/system.object 'System\.Object') → AxiosHeaders

Implements [System\.Collections\.Generic\.IEnumerable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1 'System\.Collections\.Generic\.IEnumerable\`1')[System\.Collections\.Generic\.KeyValuePair&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1 'System\.Collections\.Generic\.IEnumerable\`1'), [System\.Collections\.IEnumerable](https://learn.microsoft.com/en-us/dotnet/api/system.collections.ienumerable 'System\.Collections\.IEnumerable')
## Constructors

### AxiosHeaders\(\) Constructor

Creates an empty collection\.

```csharp
public AxiosHeaders();
```

### AxiosHeaders\(IEnumerable\<KeyValuePair\<string,string\>\>\) Constructor

Creates a collection holding a copy of [source](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders\.AxiosHeaders\(System\.Collections\.Generic\.IEnumerable\<System\.Collections\.Generic\.KeyValuePair\<string,string\>\>\)\.source')\.

```csharp
public AxiosHeaders(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string,string>> source);
```
#### Parameters

`source` [System\.Collections\.Generic\.IEnumerable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1 'System\.Collections\.Generic\.IEnumerable\`1')[System\.Collections\.Generic\.KeyValuePair&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1 'System\.Collections\.Generic\.IEnumerable\`1')

The headers to copy\.
## Properties

### AxiosHeaders\.Count Property

Number of headers\.

```csharp
public int Count { get; }
```

#### Property Value
[System\.Int32](https://learn.microsoft.com/en-us/dotnet/api/system.int32 'System\.Int32')

### AxiosHeaders\.this\[string\] Property

Gets a header \(null when absent\)\. Assigning null removes it\.

```csharp
public string? this[string name] { get; set; }
```
#### Parameters

`name` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

#### Property Value
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')
## Methods

### AxiosHeaders\.Add\(string, string\) Method

Enables collection initializers: `new AxiosHeaders { { "Accept", "text/plain" } }`\.

```csharp
public void Add(string name, string value);
```
#### Parameters

`name` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

`value` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosHeaders\.Clear\(\) Method

Removes every header\.

```csharp
public AxiosNet.Models.AxiosHeaders Clear();
```

#### Returns
[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')

### AxiosHeaders\.Clone\(\) Method

Returns a copy of this collection\.

```csharp
public AxiosNet.Models.AxiosHeaders Clone();
```

#### Returns
[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')

### AxiosHeaders\.Concat\(AxiosHeaders\[\]\) Method

Returns a new instance holding this collection followed by [others](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders\.Concat\(AxiosNet\.Models\.AxiosHeaders\[\]\)\.others')\.

```csharp
public AxiosNet.Models.AxiosHeaders Concat(params AxiosNet.Models.AxiosHeaders[] others);
```
#### Parameters

`others` [AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')[\[\]](https://learn.microsoft.com/en-us/dotnet/api/system.array 'System\.Array')

#### Returns
[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')

### AxiosHeaders\.Delete\(string\) Method

Removes a header and returns whether it was present\.

```csharp
public bool Delete(string name);
```
#### Parameters

`name` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

#### Returns
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

### AxiosHeaders\.Get\(string\) Method

Gets a header value, or null when absent\.

```csharp
public string? Get(string name);
```
#### Parameters

`name` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

#### Returns
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

### AxiosHeaders\.GetEnumerator\(\) Method

Enumerates the headers\.

```csharp
public System.Collections.Generic.IEnumerator<System.Collections.Generic.KeyValuePair<string,string>> GetEnumerator();
```

Implements [GetEnumerator\(\)](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1.getenumerator 'System\.Collections\.Generic\.IEnumerable\`1\.GetEnumerator'), [GetEnumerator\(\)](https://learn.microsoft.com/en-us/dotnet/api/system.collections.ienumerable.getenumerator 'System\.Collections\.IEnumerable\.GetEnumerator')

#### Returns
[System\.Collections\.Generic\.IEnumerator&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerator-1 'System\.Collections\.Generic\.IEnumerator\`1')[System\.Collections\.Generic\.KeyValuePair&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerator-1 'System\.Collections\.Generic\.IEnumerator\`1')

### AxiosHeaders\.Has\(string\) Method

True when the header is present\.

```csharp
public bool Has(string name);
```
#### Parameters

`name` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

#### Returns
[System\.Boolean](https://learn.microsoft.com/en-us/dotnet/api/system.boolean 'System\.Boolean')

### AxiosHeaders\.Parse\(string\) Method

Parses raw "Name: value" lines\.

```csharp
public static AxiosNet.Models.AxiosHeaders Parse(string raw);
```
#### Parameters

`raw` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

#### Returns
[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')

### AxiosHeaders\.Set\(string, string\) Method

Sets a header, replacing any previous value\.

```csharp
public AxiosNet.Models.AxiosHeaders Set(string name, string value);
```
#### Parameters

`name` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Header name, case\-insensitive\.

`value` [System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')

Header value\.

#### Returns
[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')

### AxiosHeaders\.Set\(IEnumerable\<KeyValuePair\<string,string\>\>\) Method

Sets several headers, replacing any previous values\.

```csharp
public AxiosNet.Models.AxiosHeaders Set(System.Collections.Generic.IEnumerable<System.Collections.Generic.KeyValuePair<string,string>> headers);
```
#### Parameters

`headers` [System\.Collections\.Generic\.IEnumerable&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1 'System\.Collections\.Generic\.IEnumerable\`1')[System\.Collections\.Generic\.KeyValuePair&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.keyvaluepair-2 'System\.Collections\.Generic\.KeyValuePair\`2')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.ienumerable-1 'System\.Collections\.Generic\.IEnumerable\`1')

The headers to set\.

#### Returns
[AxiosHeaders](AxiosNet.Models.AxiosHeaders.md 'AxiosNet\.Models\.AxiosHeaders')

### AxiosHeaders\.ToJson\(\) Method

Plain dictionary copy, convenient for serialization\.

```csharp
public System.Collections.Generic.Dictionary<string,string> ToJson();
```

#### Returns
[System\.Collections\.Generic\.Dictionary&lt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2 'System\.Collections\.Generic\.Dictionary\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[,](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2 'System\.Collections\.Generic\.Dictionary\`2')[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')[&gt;](https://learn.microsoft.com/en-us/dotnet/api/system.collections.generic.dictionary-2 'System\.Collections\.Generic\.Dictionary\`2')

### AxiosHeaders\.ToString\(\) Method

Raw `Name: value` lines, one per header\.

```csharp
public override string ToString();
```

#### Returns
[System\.String](https://learn.microsoft.com/en-us/dotnet/api/system.string 'System\.String')