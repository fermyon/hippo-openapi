# HippoWeb.JobStatusApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiJobstatusChannelIdGet**](JobStatusApi.md#apiJobstatusChannelIdGet) | **GET** /api/jobstatus/{channelId} | 
[**apiJobstatusGet**](JobStatusApi.md#apiJobstatusGet) | **GET** /api/jobstatus | 



## apiJobstatusChannelIdGet

> ChannelJobStatusItem apiJobstatusChannelIdGet(channelId)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.JobStatusApi();
let channelId = "channelId_example"; // String | 
apiInstance.apiJobstatusChannelIdGet(channelId, (error, data, response) => {
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
 **channelId** | **String**|  | 

### Return type

[**ChannelJobStatusItem**](ChannelJobStatusItem.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiJobstatusGet

> ChannelJobStatusItemPage apiJobstatusGet(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.JobStatusApi();
let opts = {
  'pageIndex': 0, // Number | 
  'pageSize': 2147483647 // Number | 
};
apiInstance.apiJobstatusGet(opts, (error, data, response) => {
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

### Return type

[**ChannelJobStatusItemPage**](ChannelJobStatusItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

