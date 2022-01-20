# HippoWeb.AccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAccountCreatetokenPost**](AccountApi.md#apiAccountCreatetokenPost) | **POST** /api/account/createtoken | 
[**apiAccountPost**](AccountApi.md#apiAccountPost) | **POST** /api/account | 



## apiAccountCreatetokenPost

> TokenInfo apiAccountCreatetokenPost(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';

let apiInstance = new HippoWeb.AccountApi();
let opts = {
  'createTokenCommand': new HippoWeb.CreateTokenCommand() // CreateTokenCommand | 
};
apiInstance.apiAccountCreatetokenPost(opts, (error, data, response) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json


## apiAccountPost

> String apiAccountPost(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';

let apiInstance = new HippoWeb.AccountApi();
let opts = {
  'createAccountCommand': new HippoWeb.CreateAccountCommand() // CreateAccountCommand | 
};
apiInstance.apiAccountPost(opts, (error, data, response) => {
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
 **createAccountCommand** | [**CreateAccountCommand**](CreateAccountCommand.md)|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

