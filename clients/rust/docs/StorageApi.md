# \StorageApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_storage_get**](StorageApi.md#api_storage_get) | **GET** /api/storage | 



## api_storage_get

> crate::models::StorageList api_storage_get(query_string, offset, limit)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**query_string** | Option<**String**> |  |  |
**offset** | Option<**i64**> |  |  |
**limit** | Option<**i32**> |  |  |

### Return type

[**crate::models::StorageList**](StorageList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

