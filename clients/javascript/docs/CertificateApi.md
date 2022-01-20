# HippoWeb.CertificateApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiCertificateGet**](CertificateApi.md#apiCertificateGet) | **GET** /api/certificate | 
[**apiCertificateIdDelete**](CertificateApi.md#apiCertificateIdDelete) | **DELETE** /api/certificate/{id} | 
[**apiCertificateIdGet**](CertificateApi.md#apiCertificateIdGet) | **GET** /api/certificate/{id} | 
[**apiCertificatePost**](CertificateApi.md#apiCertificatePost) | **POST** /api/certificate | 



## apiCertificateGet

> CertificatesVm apiCertificateGet()



### Example

```javascript
import HippoWeb from 'hippo_web';

let apiInstance = new HippoWeb.CertificateApi();
apiInstance.apiCertificateGet((error, data, response) => {
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

[**CertificatesVm**](CertificatesVm.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiCertificateIdDelete

> apiCertificateIdDelete(id)



### Example

```javascript
import HippoWeb from 'hippo_web';

let apiInstance = new HippoWeb.CertificateApi();
let id = "id_example"; // String | 
apiInstance.apiCertificateIdDelete(id, (error, data, response) => {
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


## apiCertificateIdGet

> apiCertificateIdGet(id)



### Example

```javascript
import HippoWeb from 'hippo_web';

let apiInstance = new HippoWeb.CertificateApi();
let id = "id_example"; // String | 
apiInstance.apiCertificateIdGet(id, (error, data, response) => {
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


## apiCertificatePost

> String apiCertificatePost(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';

let apiInstance = new HippoWeb.CertificateApi();
let opts = {
  'createCertificateCommand': new HippoWeb.CreateCertificateCommand() // CreateCertificateCommand | 
};
apiInstance.apiCertificatePost(opts, (error, data, response) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

