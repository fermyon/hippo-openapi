# HippoWeb.AppApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAppExportGet**](AppApi.md#apiAppExportGet) | **GET** /api/app/export | 
[**apiAppGet**](AppApi.md#apiAppGet) | **GET** /api/app | 
[**apiAppIdDelete**](AppApi.md#apiAppIdDelete) | **DELETE** /api/app/{id} | 
[**apiAppIdPut**](AppApi.md#apiAppIdPut) | **PUT** /api/app/{id} | 
[**apiAppPost**](AppApi.md#apiAppPost) | **POST** /api/app | 



## apiAppExportGet

> apiAppExportGet()



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.AppApi();
apiInstance.apiAppExportGet((error, data, response) => {
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


## apiAppGet

> AppItemPage apiAppGet(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.AppApi();
let opts = {
  'searchText': "''", // String | 
  'pageIndex': 0, // Number | 
  'pageSize': 50, // Number | 
  'sortBy': "'Name'", // String | 
  'isSortedAscending': true // Boolean | 
};
apiInstance.apiAppGet(opts, (error, data, response) => {
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
 **searchText** | **String**|  | [optional] [default to &#39;&#39;]
 **pageIndex** | **Number**|  | [optional] [default to 0]
 **pageSize** | **Number**|  | [optional] [default to 50]
 **sortBy** | **String**|  | [optional] [default to &#39;Name&#39;]
 **isSortedAscending** | **Boolean**|  | [optional] [default to true]

### Return type

[**AppItemPage**](AppItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiAppIdDelete

> apiAppIdDelete(id)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.AppApi();
let id = "id_example"; // String | 
apiInstance.apiAppIdDelete(id, (error, data, response) => {
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


## apiAppIdPut

> apiAppIdPut(id, opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.AppApi();
let id = "id_example"; // String | 
let opts = {
  'updateAppCommand': new HippoWeb.UpdateAppCommand() // UpdateAppCommand | 
};
apiInstance.apiAppIdPut(id, opts, (error, data, response) => {
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
 **updateAppCommand** | [**UpdateAppCommand**](UpdateAppCommand.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined


## apiAppPost

> String apiAppPost(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.AppApi();
let opts = {
  'createAppCommand': new HippoWeb.CreateAppCommand() // CreateAppCommand | 
};
apiInstance.apiAppPost(opts, (error, data, response) => {
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
 **createAppCommand** | [**CreateAppCommand**](CreateAppCommand.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

