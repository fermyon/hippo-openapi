# \ChannelApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiChannelChannelIdEnvironmentVariablesPut**](ChannelApi.md#ApiChannelChannelIdEnvironmentVariablesPut) | **Put** /api/channel/{channelId}/environment-variables | 
[**ApiChannelChannelIdGet**](ChannelApi.md#ApiChannelChannelIdGet) | **Get** /api/channel/{channelId} | 
[**ApiChannelExportGet**](ChannelApi.md#ApiChannelExportGet) | **Get** /api/channel/export | 
[**ApiChannelGet**](ChannelApi.md#ApiChannelGet) | **Get** /api/channel | 
[**ApiChannelIdDelete**](ChannelApi.md#ApiChannelIdDelete) | **Delete** /api/channel/{id} | 
[**ApiChannelIdPut**](ChannelApi.md#ApiChannelIdPut) | **Put** /api/channel/{id} | 
[**ApiChannelLogsChannelIdGet**](ChannelApi.md#ApiChannelLogsChannelIdGet) | **Get** /api/channel/logs/{channelId} | 
[**ApiChannelPost**](ChannelApi.md#ApiChannelPost) | **Post** /api/channel | 



## ApiChannelChannelIdEnvironmentVariablesPut

> ApiChannelChannelIdEnvironmentVariablesPut(ctx, channelId).UpdateChannelEnvironmentVariablesCommand(updateChannelEnvironmentVariablesCommand).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    channelId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    updateChannelEnvironmentVariablesCommand := *openapiclient.NewUpdateChannelEnvironmentVariablesCommand() // UpdateChannelEnvironmentVariablesCommand |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelApi.ApiChannelChannelIdEnvironmentVariablesPut(context.Background(), channelId).UpdateChannelEnvironmentVariablesCommand(updateChannelEnvironmentVariablesCommand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelChannelIdEnvironmentVariablesPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelChannelIdEnvironmentVariablesPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateChannelEnvironmentVariablesCommand** | [**UpdateChannelEnvironmentVariablesCommand**](UpdateChannelEnvironmentVariablesCommand.md) |  | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiChannelChannelIdGet

> ChannelDto ApiChannelChannelIdGet(ctx, channelId).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    channelId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelApi.ApiChannelChannelIdGet(context.Background(), channelId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelChannelIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiChannelChannelIdGet`: ChannelDto
    fmt.Fprintf(os.Stdout, "Response from `ChannelApi.ApiChannelChannelIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelChannelIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ChannelDto**](ChannelDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiChannelExportGet

> ApiChannelExportGet(ctx).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelApi.ApiChannelExportGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelExportGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelExportGetRequest struct via the builder pattern


### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiChannelGet

> ChannelsVm ApiChannelGet(ctx).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelApi.ApiChannelGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiChannelGet`: ChannelsVm
    fmt.Fprintf(os.Stdout, "Response from `ChannelApi.ApiChannelGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelGetRequest struct via the builder pattern


### Return type

[**ChannelsVm**](ChannelsVm.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiChannelIdDelete

> ApiChannelIdDelete(ctx, id).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelApi.ApiChannelIdDelete(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiChannelIdPut

> ApiChannelIdPut(ctx, id).UpdateChannelCommand(updateChannelCommand).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    updateChannelCommand := *openapiclient.NewUpdateChannelCommand("Id_example", "Name_example", "Domain_example", openapiclient.ChannelRevisionSelectionStrategy("UseRangeRule")) // UpdateChannelCommand |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelApi.ApiChannelIdPut(context.Background(), id).UpdateChannelCommand(updateChannelCommand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateChannelCommand** | [**UpdateChannelCommand**](UpdateChannelCommand.md) |  | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiChannelLogsChannelIdGet

> GetChannelLogsVm ApiChannelLogsChannelIdGet(ctx, channelId).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    channelId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelApi.ApiChannelLogsChannelIdGet(context.Background(), channelId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelLogsChannelIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiChannelLogsChannelIdGet`: GetChannelLogsVm
    fmt.Fprintf(os.Stdout, "Response from `ChannelApi.ApiChannelLogsChannelIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelLogsChannelIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetChannelLogsVm**](GetChannelLogsVm.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiChannelPost

> string ApiChannelPost(ctx).CreateChannelCommand(createChannelCommand).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    createChannelCommand := *openapiclient.NewCreateChannelCommand("AppId_example", "Name_example", openapiclient.ChannelRevisionSelectionStrategy("UseRangeRule")) // CreateChannelCommand |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelApi.ApiChannelPost(context.Background()).CreateChannelCommand(createChannelCommand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiChannelPost`: string
    fmt.Fprintf(os.Stdout, "Response from `ChannelApi.ApiChannelPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createChannelCommand** | [**CreateChannelCommand**](CreateChannelCommand.md) |  | 

### Return type

**string**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

