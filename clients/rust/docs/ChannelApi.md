# \ChannelApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_channel_channel_id_get**](ChannelApi.md#api_channel_channel_id_get) | **GET** /api/channel/{channelId} | 
[**api_channel_channel_id_overview_get**](ChannelApi.md#api_channel_channel_id_overview_get) | **GET** /api/channel/{channelId}/overview | 
[**api_channel_export_get**](ChannelApi.md#api_channel_export_get) | **GET** /api/channel/export | 
[**api_channel_get**](ChannelApi.md#api_channel_get) | **GET** /api/channel | 
[**api_channel_id_delete**](ChannelApi.md#api_channel_id_delete) | **DELETE** /api/channel/{id} | 
[**api_channel_id_put**](ChannelApi.md#api_channel_id_put) | **PUT** /api/channel/{id} | 
[**api_channel_logs_channel_id_get**](ChannelApi.md#api_channel_logs_channel_id_get) | **GET** /api/channel/logs/{channelId} | 
[**api_channel_post**](ChannelApi.md#api_channel_post) | **POST** /api/channel | 



## api_channel_channel_id_get

> crate::models::ChannelSummaryDto api_channel_channel_id_get(channel_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**channel_id** | **String** |  | [required] |

### Return type

[**crate::models::ChannelSummaryDto**](ChannelSummaryDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_channel_channel_id_overview_get

> crate::models::ChannelDetailsDto api_channel_channel_id_overview_get(channel_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**channel_id** | **String** |  | [required] |

### Return type

[**crate::models::ChannelDetailsDto**](ChannelDetailsDto.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


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

> crate::models::ChannelsVm api_channel_get()


### Parameters

This endpoint does not need any parameter.

### Return type

[**crate::models::ChannelsVm**](ChannelsVm.md)

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

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_channel_logs_channel_id_get

> crate::models::GetChannelLogsVm api_channel_logs_channel_id_get(channel_id)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**channel_id** | **String** |  | [required] |

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

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

