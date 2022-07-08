# \ChannelApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiChannelExportGet**](ChannelApi.md#ApiChannelExportGet) | **Get** /api/channel/export | 
[**ApiChannelGet**](ChannelApi.md#ApiChannelGet) | **Get** /api/channel | 
[**ApiChannelIdDelete**](ChannelApi.md#ApiChannelIdDelete) | **Delete** /api/channel/{id} | 
[**ApiChannelIdGet**](ChannelApi.md#ApiChannelIdGet) | **Get** /api/channel/{id} | 
[**ApiChannelIdPatch**](ChannelApi.md#ApiChannelIdPatch) | **Patch** /api/channel/{id} | 
[**ApiChannelIdPut**](ChannelApi.md#ApiChannelIdPut) | **Put** /api/channel/{id} | 
[**ApiChannelLogsIdGet**](ChannelApi.md#ApiChannelLogsIdGet) | **Get** /api/channel/logs/{id} | 
[**ApiChannelPost**](ChannelApi.md#ApiChannelPost) | **Post** /api/channel | 



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

> ChannelItemPage ApiChannelGet(ctx).SearchText(searchText).PageIndex(pageIndex).PageSize(pageSize).SortBy(sortBy).IsSortedAscending(isSortedAscending).Execute()



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
    searchText := "searchText_example" // string |  (optional) (default to "")
    pageIndex := int32(56) // int32 |  (optional) (default to 0)
    pageSize := int32(56) // int32 |  (optional) (default to 50)
    sortBy := "sortBy_example" // string |  (optional) (default to "Name")
    isSortedAscending := true // bool |  (optional) (default to true)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelApi.ApiChannelGet(context.Background()).SearchText(searchText).PageIndex(pageIndex).PageSize(pageSize).SortBy(sortBy).IsSortedAscending(isSortedAscending).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiChannelGet`: ChannelItemPage
    fmt.Fprintf(os.Stdout, "Response from `ChannelApi.ApiChannelGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **string** |  | [default to &quot;&quot;]
 **pageIndex** | **int32** |  | [default to 0]
 **pageSize** | **int32** |  | [default to 50]
 **sortBy** | **string** |  | [default to &quot;Name&quot;]
 **isSortedAscending** | **bool** |  | [default to true]

### Return type

[**ChannelItemPage**](ChannelItemPage.md)

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


## ApiChannelIdGet

> ChannelItem ApiChannelIdGet(ctx, id).Execute()



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
    resp, r, err := apiClient.ChannelApi.ApiChannelIdGet(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiChannelIdGet`: ChannelItem
    fmt.Fprintf(os.Stdout, "Response from `ChannelApi.ApiChannelIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ChannelItem**](ChannelItem.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiChannelIdPatch

> ApiChannelIdPatch(ctx, id).PatchChannelCommand(patchChannelCommand).Execute()



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
    patchChannelCommand := *openapiclient.NewPatchChannelCommand() // PatchChannelCommand |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelApi.ApiChannelIdPatch(context.Background(), id).PatchChannelCommand(patchChannelCommand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelIdPatch``: %v\n", err)
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

Other parameters are passed through a pointer to a apiApiChannelIdPatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **patchChannelCommand** | [**PatchChannelCommand**](PatchChannelCommand.md) |  | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
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

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiChannelLogsIdGet

> GetChannelLogsVm ApiChannelLogsIdGet(ctx, id).Execute()



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
    resp, r, err := apiClient.ChannelApi.ApiChannelLogsIdGet(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelApi.ApiChannelLogsIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiChannelLogsIdGet`: GetChannelLogsVm
    fmt.Fprintf(os.Stdout, "Response from `ChannelApi.ApiChannelLogsIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelLogsIdGetRequest struct via the builder pattern


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

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

