# HippoWeb.EnvironmentVariableApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiEnvironmentvariableGet**](EnvironmentVariableApi.md#apiEnvironmentvariableGet) | **GET** /api/environmentvariable | 
[**apiEnvironmentvariableIdDelete**](EnvironmentVariableApi.md#apiEnvironmentvariableIdDelete) | **DELETE** /api/environmentvariable/{id} | 
[**apiEnvironmentvariableIdGet**](EnvironmentVariableApi.md#apiEnvironmentvariableIdGet) | **GET** /api/environmentvariable/{id} | 
[**apiEnvironmentvariablePost**](EnvironmentVariableApi.md#apiEnvironmentvariablePost) | **POST** /api/environmentvariable | 



## apiEnvironmentvariableGet

> EnvironmentVariablesVm apiEnvironmentvariableGet()



### Example

```javascript
import HippoWeb from 'hippo_web';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiEnvironmentvariableIdDelete

> apiEnvironmentvariableIdDelete(id)



### Example

```javascript
import HippoWeb from 'hippo_web';

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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiEnvironmentvariableIdGet

> apiEnvironmentvariableIdGet(id)



### Example

```javascript
import HippoWeb from 'hippo_web';

let apiInstance = new HippoWeb.EnvironmentVariableApi();
let id = "id_example"; // String | 
apiInstance.apiEnvironmentvariableIdGet(id, (error, data, response) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiEnvironmentvariablePost

> String apiEnvironmentvariablePost(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';

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

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

