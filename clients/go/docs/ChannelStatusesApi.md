# \ChannelStatusesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiChannelStatusesGet**](ChannelStatusesApi.md#ApiChannelStatusesGet) | **Get** /api/channel-statuses | 



## ApiChannelStatusesGet

> ChannelJobStatusItemPage ApiChannelStatusesGet(ctx).PageIndex(pageIndex).PageSize(pageSize).ChannelId(channelId).Execute()



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
    channelId := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ChannelStatusesApi.ApiChannelStatusesGet(context.Background()).PageIndex(pageIndex).PageSize(pageSize).ChannelId(channelId).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ChannelStatusesApi.ApiChannelStatusesGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiChannelStatusesGet`: ChannelJobStatusItemPage
    fmt.Fprintf(os.Stdout, "Response from `ChannelStatusesApi.ApiChannelStatusesGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiChannelStatusesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pageIndex** | **int32** |  | [default to 0]
 **pageSize** | **int32** |  | [default to 2147483647]
 **channelId** | **string** |  | 

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

