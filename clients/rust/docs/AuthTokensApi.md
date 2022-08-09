# \AuthTokensApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_auth_tokens_post**](AuthTokensApi.md#api_auth_tokens_post) | **POST** /api/auth-tokens | 



## api_auth_tokens_post

> crate::models::TokenInfo api_auth_tokens_post(create_token_command)


### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**create_token_command** | Option<[**CreateTokenCommand**](CreateTokenCommand.md)> |  |  |

### Return type

[**crate::models::TokenInfo**](TokenInfo.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

