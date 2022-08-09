# \StoragesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_storages_get**](StoragesApi.md#api_storages_get) | **GET** /api/storages | 



## api_storages_get

> crate::models::StringPage api_storages_get(search_text, page_index, page_size, is_sorted_ascending)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**search_text** | Option<**String**> |  |  |[default to ]
**page_index** | Option<**i32**> |  |  |[default to 0]
**page_size** | Option<**i32**> |  |  |[default to 50]
**is_sorted_ascending** | Option<**bool**> |  |  |[default to true]

### Return type

[**crate::models::StringPage**](StringPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

