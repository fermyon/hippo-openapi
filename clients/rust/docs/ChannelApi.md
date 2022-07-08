# \ChannelApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_channel_export_get**](ChannelApi.md#api_channel_export_get) | **GET** /api/channel/export | 
[**api_channel_get**](ChannelApi.md#api_channel_get) | **GET** /api/channel | 
[**api_channel_id_delete**](ChannelApi.md#api_channel_id_delete) | **DELETE** /api/channel/{id} | 
[**api_channel_id_get**](ChannelApi.md#api_channel_id_get) | **GET** /api/channel/{id} | 
[**api_channel_id_patch**](ChannelApi.md#api_channel_id_patch) | **PATCH** /api/channel/{id} | 
[**api_channel_id_put**](ChannelApi.md#api_channel_id_put) | **PUT** /api/channel/{id} | 
[**api_channel_logs_id_get**](ChannelApi.md#api_channel_logs_id_get) | **GET** /api/channel/logs/{id} | 
[**api_channel_post**](ChannelApi.md#api_channel_post) | **POST** /api/channel | 



## api_channel_export_get

> api_channel_export_get()


### Parameters

This endpoint does not need any parameter.

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_channel_get

> crate::models::ChannelItemPage api_channel_get(search_text, page_index, page_size, sort_by, is_sorted_ascending)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**search_text** | Option<**String**> |  |  |[default to ]
**page_index** | Option<**i32**> |  |  |[default to 0]
**page_size** | Option<**i32**> |  |  |[default to 50]
**sort_by** | Option<**String**> |  |  |[default to Name]
**is_sorted_ascending** | Option<**bool**> |  |  |[default to true]

### Return type

[**crate::models::ChannelItemPage**](ChannelItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_channel_id_delete

> api_channel_id_delete(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_channel_id_get

> crate::models::ChannelItem api_channel_id_get(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**crate::models::ChannelItem**](ChannelItem.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_channel_id_patch

> api_channel_id_patch(id, patch_channel_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**patch_channel_command** | Option<[**PatchChannelCommand**](PatchChannelCommand.md)> |  |  |

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_channel_id_put

> api_channel_id_put(id, update_channel_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_channel_command** | Option<[**UpdateChannelCommand**](UpdateChannelCommand.md)> |  |  |

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_channel_logs_id_get

> crate::models::GetChannelLogsVm api_channel_logs_id_get(id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |

### Return type

[**crate::models::GetChannelLogsVm**](GetChannelLogsVm.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_channel_post

> String api_channel_post(create_channel_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_channel_command** | Option<[**CreateChannelCommand**](CreateChannelCommand.md)> |  |  |

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

