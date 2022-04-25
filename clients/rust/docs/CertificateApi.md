# \CertificateApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_certificate_export_get**](CertificateApi.md#api_certificate_export_get) | **GET** /api/certificate/export | 
[**api_certificate_get**](CertificateApi.md#api_certificate_get) | **GET** /api/certificate | 
[**api_certificate_id_delete**](CertificateApi.md#api_certificate_id_delete) | **DELETE** /api/certificate/{id} | 
[**api_certificate_id_put**](CertificateApi.md#api_certificate_id_put) | **PUT** /api/certificate/{id} | 
[**api_certificate_post**](CertificateApi.md#api_certificate_post) | **POST** /api/certificate | 



## api_certificate_export_get

> api_certificate_export_get()


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


## api_certificate_get

> crate::models::CertificatesVm api_certificate_get()


### Parameters

This endpoint does not need any parameter.

### Return type

[**crate::models::CertificatesVm**](CertificatesVm.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_certificate_id_delete

> api_certificate_id_delete(id)


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


## api_certificate_id_put

> api_certificate_id_put(id, update_certificate_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**id** | **String** |  | [required] |
**update_certificate_command** | Option<[**UpdateCertificateCommand**](UpdateCertificateCommand.md)> |  |  |

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_certificate_post

> String api_certificate_post(create_certificate_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_certificate_command** | Option<[**CreateCertificateCommand**](CreateCertificateCommand.md)> |  |  |

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

