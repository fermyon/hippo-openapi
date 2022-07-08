# \RevisionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_revision_export_get**](RevisionApi.md#api_revision_export_get) | **GET** /api/revision/export | 
[**api_revision_get**](RevisionApi.md#api_revision_get) | **GET** /api/revision | 
[**api_revision_id_delete**](RevisionApi.md#api_revision_id_delete) | **DELETE** /api/revision/{id} | 
[**api_revision_post**](RevisionApi.md#api_revision_post) | **POST** /api/revision | 



## api_revision_export_get

> api_revision_export_get()


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


## api_revision_get

> crate::models::RevisionItemPage api_revision_get(page_index, page_size)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page_index** | Option<**i32**> |  |  |[default to 0]
**page_size** | Option<**i32**> |  |  |[default to 50]

### Return type

[**crate::models::RevisionItemPage**](RevisionItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_revision_id_delete

> api_revision_id_delete(id)


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


## api_revision_post

> api_revision_post(register_revision_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**register_revision_command** | Option<[**RegisterRevisionCommand**](RegisterRevisionCommand.md)> |  |  |

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

