# HippoWeb.ChannelStatusesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiChannelStatusesGet**](ChannelStatusesApi.md#apiChannelStatusesGet) | **GET** /api/channel-statuses | 



## apiChannelStatusesGet

> ChannelJobStatusItemPage apiChannelStatusesGet(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.ChannelStatusesApi();
let opts = {
  'pageIndex': 0, // Number | 
  'pageSize': 2147483647, // Number | 
  'channelId': "channelId_example" // String | 
};
apiInstance.apiChannelStatusesGet(opts, (error, data, response) => {
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
 **pageSize** | **Number**|  | [optional] [default to 2147483647]
 **channelId** | **String**|  | [optional] 

### Return type

[**ChannelJobStatusItemPage**](ChannelJobStatusItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

