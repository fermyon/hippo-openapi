# \EnvironmentVariableApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_environmentvariable_get**](EnvironmentVariableApi.md#api_environmentvariable_get) | **GET** /api/environmentvariable | 
[**api_environmentvariable_id_delete**](EnvironmentVariableApi.md#api_environmentvariable_id_delete) | **DELETE** /api/environmentvariable/{id} | 
[**api_environmentvariable_id_get**](EnvironmentVariableApi.md#api_environmentvariable_id_get) | **GET** /api/environmentvariable/{id} | 
[**api_environmentvariable_post**](EnvironmentVariableApi.md#api_environmentvariable_post) | **POST** /api/environmentvariable | 



## api_environmentvariable_get

> crate::models::EnvironmentVariablesVm api_environmentvariable_get()


### Parameters

This endpoint does not need any parameter.

### Return type

[**crate::models::EnvironmentVariablesVm**](EnvironmentVariablesVm.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_environmentvariable_id_delete

> api_environmentvariable_id_delete(id)


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


## api_environmentvariable_id_get

> api_environmentvariable_id_get(id)


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


## api_environmentvariable_post

> String api_environmentvariable_post(create_environment_variable_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_environment_variable_command** | Option<[**CreateEnvironmentVariableCommand**](CreateEnvironmentVariableCommand.md)> |  |  |

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

