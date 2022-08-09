# HippoWeb.AuthTokensApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthTokensPost**](AuthTokensApi.md#apiAuthTokensPost) | **POST** /api/auth-tokens | 



## apiAuthTokensPost

> TokenInfo apiAuthTokensPost(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.AuthTokensApi();
let opts = {
  'createTokenCommand': new HippoWeb.CreateTokenCommand() // CreateTokenCommand | 
};
apiInstance.apiAuthTokensPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTokenCommand** | [**CreateTokenCommand**](CreateTokenCommand.md)|  | [optional] 

### Return type

[**TokenInfo**](TokenInfo.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

