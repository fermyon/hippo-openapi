# HippoWeb.EnvironmentVariableApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiEnvironmentvariableExportGet**](EnvironmentVariableApi.md#apiEnvironmentvariableExportGet) | **GET** /api/environmentvariable/export | 
[**apiEnvironmentvariableGet**](EnvironmentVariableApi.md#apiEnvironmentvariableGet) | **GET** /api/environmentvariable | 
[**apiEnvironmentvariableIdDelete**](EnvironmentVariableApi.md#apiEnvironmentvariableIdDelete) | **DELETE** /api/environmentvariable/{id} | 
[**apiEnvironmentvariableIdPut**](EnvironmentVariableApi.md#apiEnvironmentvariableIdPut) | **PUT** /api/environmentvariable/{id} | 
[**apiEnvironmentvariablePost**](EnvironmentVariableApi.md#apiEnvironmentvariablePost) | **POST** /api/environmentvariable | 



## apiEnvironmentvariableExportGet

> apiEnvironmentvariableExportGet()



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.EnvironmentVariableApi();
apiInstance.apiEnvironmentvariableExportGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiEnvironmentvariableGet

> EnvironmentVariablesVm apiEnvironmentvariableGet()



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.EnvironmentVariableApi();
apiInstance.apiEnvironmentvariableGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EnvironmentVariablesVm**](EnvironmentVariablesVm.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiEnvironmentvariableIdDelete

> apiEnvironmentvariableIdDelete(id)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.EnvironmentVariableApi();
let id = "id_example"; // String | 
apiInstance.apiEnvironmentvariableIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiEnvironmentvariableIdPut

> apiEnvironmentvariableIdPut(id, opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.EnvironmentVariableApi();
let id = "id_example"; // String | 
let opts = {
  'updateEnvironmentVariableCommand': new HippoWeb.UpdateEnvironmentVariableCommand() // UpdateEnvironmentVariableCommand | 
};
apiInstance.apiEnvironmentvariableIdPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **updateEnvironmentVariableCommand** | [**UpdateEnvironmentVariableCommand**](UpdateEnvironmentVariableCommand.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined


## apiEnvironmentvariablePost

> String apiEnvironmentvariablePost(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.EnvironmentVariableApi();
let opts = {
  'createEnvironmentVariableCommand': new HippoWeb.CreateEnvironmentVariableCommand() // CreateEnvironmentVariableCommand | 
};
apiInstance.apiEnvironmentvariablePost(opts, (error, data, response) => {
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
 **createEnvironmentVariableCommand** | [**CreateEnvironmentVariableCommand**](CreateEnvironmentVariableCommand.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

