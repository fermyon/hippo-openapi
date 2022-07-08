# \JobStatusApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_jobstatus_channel_id_get**](JobStatusApi.md#api_jobstatus_channel_id_get) | **GET** /api/jobstatus/{channelId} | 
[**api_jobstatus_get**](JobStatusApi.md#api_jobstatus_get) | **GET** /api/jobstatus | 



## api_jobstatus_channel_id_get

> crate::models::ChannelJobStatusItem api_jobstatus_channel_id_get(channel_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**channel_id** | **String** |  | [required] |

### Return type

[**crate::models::ChannelJobStatusItem**](ChannelJobStatusItem.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_jobstatus_get

> crate::models::ChannelJobStatusItemPage api_jobstatus_get(page_index, page_size)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page_index** | Option<**i32**> |  |  |[default to 0]
**page_size** | Option<**i32**> |  |  |[default to 2147483647]

### Return type

[**crate::models::ChannelJobStatusItemPage**](ChannelJobStatusItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

