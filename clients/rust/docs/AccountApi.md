# \AccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_account_createtoken_post**](AccountApi.md#api_account_createtoken_post) | **POST** /api/account/createtoken | 
[**api_account_post**](AccountApi.md#api_account_post) | **POST** /api/account | 



## api_account_createtoken_post

> crate::models::TokenInfo api_account_createtoken_post(create_token_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_token_command** | Option<[**CreateTokenCommand**](CreateTokenCommand.md)> |  |  |

### Return type

[**crate::models::TokenInfo**](TokenInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## api_account_post

> String api_account_post(create_account_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_account_command** | Option<[**CreateAccountCommand**](CreateAccountCommand.md)> |  |  |

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

