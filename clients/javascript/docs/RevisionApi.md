# HippoWeb.RevisionApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRevisionExportGet**](RevisionApi.md#apiRevisionExportGet) | **GET** /api/revision/export | 
[**apiRevisionGet**](RevisionApi.md#apiRevisionGet) | **GET** /api/revision | 
[**apiRevisionIdDelete**](RevisionApi.md#apiRevisionIdDelete) | **DELETE** /api/revision/{id} | 
[**apiRevisionPost**](RevisionApi.md#apiRevisionPost) | **POST** /api/revision | 



## apiRevisionExportGet

> apiRevisionExportGet()



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.RevisionApi();
apiInstance.apiRevisionExportGet((error, data, response) => {
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


## apiRevisionGet

> RevisionItemPage apiRevisionGet(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.RevisionApi();
let opts = {
  'pageIndex': 0, // Number | 
  'pageSize': 50 // Number | 
};
apiInstance.apiRevisionGet(opts, (error, data, response) => {
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
 **pageIndex** | **Number**|  | [optional] [default to 0]
 **pageSize** | **Number**|  | [optional] [default to 50]

### Return type

[**RevisionItemPage**](RevisionItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiRevisionIdDelete

> apiRevisionIdDelete(id)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.RevisionApi();
let id = "id_example"; // String | 
apiInstance.apiRevisionIdDelete(id, (error, data, response) => {
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


## apiRevisionPost

> apiRevisionPost(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.RevisionApi();
let opts = {
  'registerRevisionCommand': new HippoWeb.RegisterRevisionCommand() // RegisterRevisionCommand | 
};
apiInstance.apiRevisionPost(opts, (error, data, response) => {
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
 **registerRevisionCommand** | [**RegisterRevisionCommand**](RegisterRevisionCommand.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined

