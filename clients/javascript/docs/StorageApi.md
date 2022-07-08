# HippoWeb.StorageApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiStorageGet**](StorageApi.md#apiStorageGet) | **GET** /api/storage | 



## apiStorageGet

> StringPage apiStorageGet(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.StorageApi();
let opts = {
  'searchText': "''", // String | 
  'pageIndex': 0, // Number | 
  'pageSize': 50, // Number | 
  'isSortedAscending': true // Boolean | 
};
apiInstance.apiStorageGet(opts, (error, data, response) => {
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
 **isSortedAscending** | **Boolean**|  | [optional] [default to true]

### Return type

[**StringPage**](StringPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

