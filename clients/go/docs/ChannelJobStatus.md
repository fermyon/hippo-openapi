# ChannelJobStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelId** | **string** |  | 
**Status** | [**JobStatus**](JobStatus.md) |  | 

## Methods

### NewChannelJobStatus

`func NewChannelJobStatus(channelId string, status JobStatus, ) *ChannelJobStatus`

NewChannelJobStatus instantiates a new ChannelJobStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelJobStatusWithDefaults

`func NewChannelJobStatusWithDefaults() *ChannelJobStatus`

NewChannelJobStatusWithDefaults instantiates a new ChannelJobStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelId

`func (o *ChannelJobStatus) GetChannelId() string`

GetChannelId returns the ChannelId field if non-nil, zero value otherwise.

### GetChannelIdOk

`func (o *ChannelJobStatus) GetChannelIdOk() (*string, bool)`

GetChannelIdOk returns a tuple with the ChannelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelId

`func (o *ChannelJobStatus) SetChannelId(v string)`

SetChannelId sets ChannelId field to given value.


### GetStatus

`func (o *ChannelJobStatus) GetStatus() JobStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ChannelJobStatus) GetStatusOk() (*JobStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ChannelJobStatus) SetStatus(v JobStatus)`

SetStatus sets Status field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


