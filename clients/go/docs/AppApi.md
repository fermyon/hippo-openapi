# \AppApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiAppExportGet**](AppApi.md#ApiAppExportGet) | **Get** /api/app/export | 
[**ApiAppGet**](AppApi.md#ApiAppGet) | **Get** /api/app | 
[**ApiAppIdDelete**](AppApi.md#ApiAppIdDelete) | **Delete** /api/app/{id} | 
[**ApiAppIdPut**](AppApi.md#ApiAppIdPut) | **Put** /api/app/{id} | 
[**ApiAppPost**](AppApi.md#ApiAppPost) | **Post** /api/app | 



## ApiAppExportGet

> ApiAppExportGet(ctx).Execute()



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
    resp, r, err := apiClient.AppApi.ApiAppExportGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AppApi.ApiAppExportGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiApiAppExportGetRequest struct via the builder pattern


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


## ApiAppGet

> AppItemPage ApiAppGet(ctx).SearchText(searchText).PageIndex(pageIndex).PageSize(pageSize).SortBy(sortBy).IsSortedAscending(isSortedAscending).Execute()



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
    resp, r, err := apiClient.AppApi.ApiAppGet(context.Background()).SearchText(searchText).PageIndex(pageIndex).PageSize(pageSize).SortBy(sortBy).IsSortedAscending(isSortedAscending).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AppApi.ApiAppGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiAppGet`: AppItemPage
    fmt.Fprintf(os.Stdout, "Response from `AppApi.ApiAppGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiAppGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **string** |  | [default to &quot;&quot;]
 **pageIndex** | **int32** |  | [default to 0]
 **pageSize** | **int32** |  | [default to 50]
 **sortBy** | **string** |  | [default to &quot;Name&quot;]
 **isSortedAscending** | **bool** |  | [default to true]

### Return type

[**AppItemPage**](AppItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiAppIdDelete

> ApiAppIdDelete(ctx, id).Execute()



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
    resp, r, err := apiClient.AppApi.ApiAppIdDelete(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AppApi.ApiAppIdDelete``: %v\n", err)
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

Other parameters are passed through a pointer to a apiApiAppIdDeleteRequest struct via the builder pattern


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


## ApiAppIdPut

> ApiAppIdPut(ctx, id).UpdateAppCommand(updateAppCommand).Execute()



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
    updateAppCommand := *openapiclient.NewUpdateAppCommand("Id_example", "Name_example") // UpdateAppCommand |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AppApi.ApiAppIdPut(context.Background(), id).UpdateAppCommand(updateAppCommand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AppApi.ApiAppIdPut``: %v\n", err)
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

Other parameters are passed through a pointer to a apiApiAppIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateAppCommand** | [**UpdateAppCommand**](UpdateAppCommand.md) |  | 

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


## ApiAppPost

> string ApiAppPost(ctx).CreateAppCommand(createAppCommand).Execute()



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
    createAppCommand := *openapiclient.NewCreateAppCommand("Name_example", "StorageId_example") // CreateAppCommand |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AppApi.ApiAppPost(context.Background()).CreateAppCommand(createAppCommand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AppApi.ApiAppPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiAppPost`: string
    fmt.Fprintf(os.Stdout, "Response from `AppApi.ApiAppPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiAppPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAppCommand** | [**CreateAppCommand**](CreateAppCommand.md) |  | 

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

