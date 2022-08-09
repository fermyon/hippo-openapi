# HippoWeb.CertificatesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiCertificatesGet**](CertificatesApi.md#apiCertificatesGet) | **GET** /api/certificates | 
[**apiCertificatesIdDelete**](CertificatesApi.md#apiCertificatesIdDelete) | **DELETE** /api/certificates/{id} | 
[**apiCertificatesIdPut**](CertificatesApi.md#apiCertificatesIdPut) | **PUT** /api/certificates/{id} | 
[**apiCertificatesPost**](CertificatesApi.md#apiCertificatesPost) | **POST** /api/certificates | 



## apiCertificatesGet

> CertificateItemPage apiCertificatesGet(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.CertificatesApi();
let opts = {
  'searchText': "''", // String | 
  'pageIndex': 0, // Number | 
  'pageSize': 50, // Number | 
  'sortBy': "'Name'", // String | 
  'isSortedAscending': true // Boolean | 
};
apiInstance.apiCertificatesGet(opts, (error, data, response) => {
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

[**CertificateItemPage**](CertificateItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiCertificatesIdDelete

> apiCertificatesIdDelete(id)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.CertificatesApi();
let id = "id_example"; // String | 
apiInstance.apiCertificatesIdDelete(id, (error, data, response) => {
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


## apiCertificatesIdPut

> apiCertificatesIdPut(id, opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.CertificatesApi();
let id = "id_example"; // String | 
let opts = {
  'updateCertificateCommand': new HippoWeb.UpdateCertificateCommand() // UpdateCertificateCommand | 
};
apiInstance.apiCertificatesIdPut(id, opts, (error, data, response) => {
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
 **updateCertificateCommand** | [**UpdateCertificateCommand**](UpdateCertificateCommand.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined


## apiCertificatesPost

> String apiCertificatesPost(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.CertificatesApi();
let opts = {
  'createCertificateCommand': new HippoWeb.CreateCertificateCommand() // CreateCertificateCommand | 
};
apiInstance.apiCertificatesPost(opts, (error, data, response) => {
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
 **createCertificateCommand** | [**CreateCertificateCommand**](CreateCertificateCommand.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

