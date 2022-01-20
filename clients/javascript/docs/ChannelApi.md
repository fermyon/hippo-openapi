# HippoWeb.ChannelApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiChannelGet**](ChannelApi.md#apiChannelGet) | **GET** /api/channel | 
[**apiChannelIdDelete**](ChannelApi.md#apiChannelIdDelete) | **DELETE** /api/channel/{id} | 
[**apiChannelIdGet**](ChannelApi.md#apiChannelIdGet) | **GET** /api/channel/{id} | 
[**apiChannelPost**](ChannelApi.md#apiChannelPost) | **POST** /api/channel | 



## apiChannelGet

> ChannelsVm apiChannelGet()



### Example

```javascript
import HippoWeb from 'hippo_web';

let apiInstance = new HippoWeb.ChannelApi();
apiInstance.apiChannelGet((error, data, response) => {
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

[**ChannelsVm**](ChannelsVm.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## apiChannelIdDelete

> apiChannelIdDelete(id)



### Example

```javascript
import HippoWeb from 'hippo_web';

let apiInstance = new HippoWeb.ChannelApi();
let id = "id_example"; // String | 
apiInstance.apiChannelIdDelete(id, (error, data, response) => {
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


## apiChannelIdGet

> apiChannelIdGet(id)



### Example

```javascript
import HippoWeb from 'hippo_web';

let apiInstance = new HippoWeb.ChannelApi();
let id = "id_example"; // String | 
apiInstance.apiChannelIdGet(id, (error, data, response) => {
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


## apiChannelPost

> String apiChannelPost(opts)



### Example

```javascript
import HippoWeb from 'hippo_web';

let apiInstance = new HippoWeb.ChannelApi();
let opts = {
  'createChannelCommand': new HippoWeb.CreateChannelCommand() // CreateChannelCommand | 
};
apiInstance.apiChannelPost(opts, (error, data, response) => {
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

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

