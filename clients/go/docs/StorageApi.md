# \StorageApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiStorageGet**](StorageApi.md#ApiStorageGet) | **Get** /api/storage | 



## ApiStorageGet

> StringPage ApiStorageGet(ctx).SearchText(searchText).PageIndex(pageIndex).PageSize(pageSize).IsSortedAscending(isSortedAscending).Execute()



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
    isSortedAscending := true // bool |  (optional) (default to true)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.StorageApi.ApiStorageGet(context.Background()).SearchText(searchText).PageIndex(pageIndex).PageSize(pageSize).IsSortedAscending(isSortedAscending).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `StorageApi.ApiStorageGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiStorageGet`: StringPage
    fmt.Fprintf(os.Stdout, "Response from `StorageApi.ApiStorageGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiStorageGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchText** | **string** |  | [default to &quot;&quot;]
 **pageIndex** | **int32** |  | [default to 0]
 **pageSize** | **int32** |  | [default to 50]
 **isSortedAscending** | **bool** |  | [default to true]

### Return type

[**StringPage**](StringPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

