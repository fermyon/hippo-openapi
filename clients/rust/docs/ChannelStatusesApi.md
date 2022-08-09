# \ChannelStatusesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_channel_statuses_get**](ChannelStatusesApi.md#api_channel_statuses_get) | **GET** /api/channel-statuses | 



## api_channel_statuses_get

> crate::models::ChannelJobStatusItemPage api_channel_statuses_get(page_index, page_size, channel_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page_index** | Option<**i32**> |  |  |[default to 0]
**page_size** | Option<**i32**> |  |  |[default to 2147483647]
**channel_id** | Option<**uuid::Uuid**> |  |  |

### Return type

[**crate::models::ChannelJobStatusItemPage**](ChannelJobStatusItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

