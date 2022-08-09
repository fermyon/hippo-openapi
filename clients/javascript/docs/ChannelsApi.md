# HippoWeb.ChannelsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiChannelsChannelIdDesiredStatusPut**](ChannelsApi.md#apiChannelsChannelIdDesiredStatusPut) | **PUT** /api/channels/{channelId}/desired-status | 
[**apiChannelsGet**](ChannelsApi.md#apiChannelsGet) | **GET** /api/channels | 
[**apiChannelsIdDelete**](ChannelsApi.md#apiChannelsIdDelete) | **DELETE** /api/channels/{id} | 
[**apiChannelsIdGet**](ChannelsApi.md#apiChannelsIdGet) | **GET** /api/channels/{id} | 
[**apiChannelsIdLogsGet**](ChannelsApi.md#apiChannelsIdLogsGet) | **GET** /api/channels/{id}/logs | 
[**apiChannelsIdPatch**](ChannelsApi.md#apiChannelsIdPatch) | **PATCH** /api/channels/{id} | 
[**apiChannelsIdPut**](ChannelsApi.md#apiChannelsIdPut) | **PUT** /api/channels/{id} | 
[**apiChannelsPost**](ChannelsApi.md#apiChannelsPost) | **POST** /api/channels | 



## apiChannelsChannelIdDesiredStatusPut

> apiChannelsChannelIdDesiredStatusPut(channelId, opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.ChannelsApi();
let channelId = "channelId_example"; // String | 
let opts = {
  'updateDesiredStatusCommand': new HippoWeb.UpdateDesiredStatusCommand() // UpdateDesiredStatusCommand | 
};
apiInstance.apiChannelsChannelIdDesiredStatusPut(channelId, opts, (error, data, response) => {
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
 **channelId** | **String**|  | 
 **updateDesiredStatusCommand** | [**UpdateDesiredStatusCommand**](UpdateDesiredStatusCommand.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined


## apiChannelsGet

> ChannelItemPage apiChannelsGet(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.ChannelsApi();
let opts = {
  'searchText': "''", // String | 
  'pageIndex': 0, // Number | 
  'pageSize': 50, // Number | 
  'sortBy': "'Name'", // String | 
  'isSortedAscending': true // Boolean | 
};
apiInstance.apiChannelsGet(opts, (error, data, response) => {
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

[**ChannelItemPage**](ChannelItemPage.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiChannelsIdDelete

> apiChannelsIdDelete(id)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.ChannelsApi();
let id = "id_example"; // String | 
apiInstance.apiChannelsIdDelete(id, (error, data, response) => {
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


## apiChannelsIdGet

> ChannelItem apiChannelsIdGet(id)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.ChannelsApi();
let id = "id_example"; // String | 
apiInstance.apiChannelsIdGet(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**ChannelItem**](ChannelItem.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiChannelsIdLogsGet

> GetChannelLogsVm apiChannelsIdLogsGet(id)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.ChannelsApi();
let id = "id_example"; // String | 
apiInstance.apiChannelsIdLogsGet(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**GetChannelLogsVm**](GetChannelLogsVm.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiChannelsIdPatch

> apiChannelsIdPatch(id, opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.ChannelsApi();
let id = "id_example"; // String | 
let opts = {
  'patchChannelCommand': new HippoWeb.PatchChannelCommand() // PatchChannelCommand | 
};
apiInstance.apiChannelsIdPatch(id, opts, (error, data, response) => {
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
 **patchChannelCommand** | [**PatchChannelCommand**](PatchChannelCommand.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined


## apiChannelsIdPut

> apiChannelsIdPut(id, opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.ChannelsApi();
let id = "id_example"; // String | 
let opts = {
  'updateChannelCommand': new HippoWeb.UpdateChannelCommand() // UpdateChannelCommand | 
};
apiInstance.apiChannelsIdPut(id, opts, (error, data, response) => {
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
 **updateChannelCommand** | [**UpdateChannelCommand**](UpdateChannelCommand.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: Not defined


## apiChannelsPost

> String apiChannelsPost(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';
let defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
let Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix = 'Token';

let apiInstance = new HippoWeb.ChannelsApi();
let opts = {
  'createChannelCommand': new HippoWeb.CreateChannelCommand() // CreateChannelCommand | 
};
apiInstance.apiChannelsPost(opts, (error, data, response) => {
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
 **createChannelCommand** | [**CreateChannelCommand**](CreateChannelCommand.md)|  | [optional] 

### Return type

**String**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

