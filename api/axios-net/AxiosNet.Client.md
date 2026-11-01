---
title: "AxiosNet.Client Namespace"
sidebar_label: "AxiosNet.Client"
---

[Axios\.Net](index.md 'index')

The shared [Axios](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios') client and the [AxiosClient](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient') instances created from it\.

| Classes | |
| :--- | :--- |
| [Axios](AxiosNet.Client.Axios.md 'AxiosNet\.Client\.Axios') | Default shared client, mirroring the axios top\-level API: `await Axios.Get<User>("https://api.test/users/1")`\. |
| [AxiosClient](AxiosNet.Client.AxiosClient.md 'AxiosNet\.Client\.AxiosClient') | HTTP client with its own defaults and interceptors, the equivalent of an axios instance\. Created with [Create\(AxiosRequestConfig, HttpMessageHandler\)](AxiosNet.Client.Axios.md#axioscreateaxiosrequestconfig-httpmessagehandler-method 'AxiosNet\.Client\.Axios\.Create\(AxiosNet\.Config\.AxiosRequestConfig, System\.Net\.Http\.HttpMessageHandler\)')\. |
