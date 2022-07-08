# \JobStatusApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiJobstatusChannelIdGet**](JobStatusApi.md#ApiJobstatusChannelIdGet) | **Get** /api/jobstatus/{channelId} | 
[**ApiJobstatusGet**](JobStatusApi.md#ApiJobstatusGet) | **Get** /api/jobstatus | 



## ApiJobstatusChannelIdGet

> ChannelJobStatusItem ApiJobstatusChannelIdGet(ctx, channelId).Execute()



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
    resp, r, err := apiClient.JobStatusApi.ApiJobstatusChannelIdGet(context.Background(), channelId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `JobStatusApi.ApiJobstatusChannelIdGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiJobstatusChannelIdGet`: ChannelJobStatusItem
    fmt.Fprintf(os.Stdout, "Response from `JobStatusApi.ApiJobstatusChannelIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**channelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiJobstatusChannelIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ChannelJobStatusItem**](ChannelJobStatusItem.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiJobstatusGet

> ChannelJobStatusItemPage ApiJobstatusGet(ctx).PageIndex(pageIndex).PageSize(pageSize).Execute()



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
    pageIndex := int32(56) // int32 |  (optional) (default to 0)
    pageSize := int32(56) // int32 |  (optional) (default to 2147483647)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.JobStatusApi.ApiJobstatusGet(context.Background()).PageIndex(pageIndex).PageSize(pageSize).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `JobStatusApi.ApiJobstatusGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiJobstatusGet`: ChannelJobStatusItemPage
    fmt.Fprintf(os.Stdout, "Response from `JobStatusApi.ApiJobstatusGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiJobstatusGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageIndex** | **int32** |  | [default to 0]
 **pageSize** | **int32** |  | [default to 2147483647]

### Return type

[**ChannelJobStatusItemPage**](ChannelJobStatusItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

