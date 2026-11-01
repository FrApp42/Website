---
title: "AxiosResponseType Enum"
sidebar_label: "AxiosResponseType"
---

[Axios\.Net](index.md 'index') › [AxiosNet\.Config](AxiosNet.Config.md 'AxiosNet\.Config')

How the response body is read\.

```csharp
public enum AxiosResponseType
```
## Fields

`Json` 0

Body is deserialized from JSON into `T`\.

`Text` 1

Body is returned as a `string`\.

`Bytes` 2

Body is returned as `byte[]`\.

`Stream` 3

Body is returned as an unread [Stream](AxiosNet.Config.AxiosResponseType.md 'AxiosNet\.Config\.AxiosResponseType\.Stream'); the caller disposes it\.