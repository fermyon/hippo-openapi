# \AppApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_app_export_get**](AppApi.md#api_app_export_get) | **GET** /api/app/export | 
[**api_app_get**](AppApi.md#api_app_get) | **GET** /api/app | 
[**api_app_id_delete**](AppApi.md#api_app_id_delete) | **DELETE** /api/app/{id} | 
[**api_app_id_put**](AppApi.md#api_app_id_put) | **PUT** /api/app/{id} | 
[**api_app_post**](AppApi.md#api_app_post) | **POST** /api/app | 



## api_app_export_get

> api_app_export_get()


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


## api_app_get

> crate::models::AppsVm api_app_get()


### Parameters

This endpoint does not need any parameter.

### Return type

[**crate::models::AppsVm**](AppsVm.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_app_id_delete

> api_app_id_delete(id)


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


## api_app_id_put

> api_app_id_put(id, update_app_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_app_command** | Option<[**UpdateAppCommand**](UpdateAppCommand.md)> |  |  |

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_app_post

> String api_app_post(create_app_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_app_command** | Option<[**CreateAppCommand**](CreateAppCommand.md)> |  |  |

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

