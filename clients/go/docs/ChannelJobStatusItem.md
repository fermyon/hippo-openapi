# ChannelJobStatusItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelId** | **string** |  | 
**Status** | [**JobStatus**](JobStatus.md) |  | 

## Methods

### NewChannelJobStatusItem

`func NewChannelJobStatusItem(channelId string, status JobStatus, ) *ChannelJobStatusItem`

NewChannelJobStatusItem instantiates a new ChannelJobStatusItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelJobStatusItemWithDefaults

`func NewChannelJobStatusItemWithDefaults() *ChannelJobStatusItem`

NewChannelJobStatusItemWithDefaults instantiates a new ChannelJobStatusItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelId

`func (o *ChannelJobStatusItem) GetChannelId() string`

GetChannelId returns the ChannelId field if non-nil, zero value otherwise.

### GetChannelIdOk

`func (o *ChannelJobStatusItem) GetChannelIdOk() (*string, bool)`

GetChannelIdOk returns a tuple with the ChannelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelId

`func (o *ChannelJobStatusItem) SetChannelId(v string)`

SetChannelId sets ChannelId field to given value.


### GetStatus

`func (o *ChannelJobStatusItem) GetStatus() JobStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *ChannelJobStatusItem) GetStatusOk() (*JobStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *ChannelJobStatusItem) SetStatus(v JobStatus)`

SetStatus sets Status field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


