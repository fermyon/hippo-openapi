# UpdateDesiredStatusCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelId** | **string** |  | 
**DesiredStatus** | [**DesiredStatus**](DesiredStatus.md) |  | 

## Methods

### NewUpdateDesiredStatusCommand

`func NewUpdateDesiredStatusCommand(channelId string, desiredStatus DesiredStatus, ) *UpdateDesiredStatusCommand`

NewUpdateDesiredStatusCommand instantiates a new UpdateDesiredStatusCommand object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateDesiredStatusCommandWithDefaults

`func NewUpdateDesiredStatusCommandWithDefaults() *UpdateDesiredStatusCommand`

NewUpdateDesiredStatusCommandWithDefaults instantiates a new UpdateDesiredStatusCommand object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelId

`func (o *UpdateDesiredStatusCommand) GetChannelId() string`

GetChannelId returns the ChannelId field if non-nil, zero value otherwise.

### GetChannelIdOk

`func (o *UpdateDesiredStatusCommand) GetChannelIdOk() (*string, bool)`

GetChannelIdOk returns a tuple with the ChannelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelId

`func (o *UpdateDesiredStatusCommand) SetChannelId(v string)`

SetChannelId sets ChannelId field to given value.


### GetDesiredStatus

`func (o *UpdateDesiredStatusCommand) GetDesiredStatus() DesiredStatus`

GetDesiredStatus returns the DesiredStatus field if non-nil, zero value otherwise.

### GetDesiredStatusOk

`func (o *UpdateDesiredStatusCommand) GetDesiredStatusOk() (*DesiredStatus, bool)`

GetDesiredStatusOk returns a tuple with the DesiredStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDesiredStatus

`func (o *UpdateDesiredStatusCommand) SetDesiredStatus(v DesiredStatus)`

SetDesiredStatus sets DesiredStatus field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


