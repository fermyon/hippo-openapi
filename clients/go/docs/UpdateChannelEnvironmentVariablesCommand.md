# UpdateChannelEnvironmentVariablesCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelId** | Pointer to **string** |  | [optional] 
**EnvironmentVariables** | Pointer to [**[]UpdateEnvironmentVariableDto**](UpdateEnvironmentVariableDto.md) |  | [optional] 

## Methods

### NewUpdateChannelEnvironmentVariablesCommand

`func NewUpdateChannelEnvironmentVariablesCommand() *UpdateChannelEnvironmentVariablesCommand`

NewUpdateChannelEnvironmentVariablesCommand instantiates a new UpdateChannelEnvironmentVariablesCommand object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateChannelEnvironmentVariablesCommandWithDefaults

`func NewUpdateChannelEnvironmentVariablesCommandWithDefaults() *UpdateChannelEnvironmentVariablesCommand`

NewUpdateChannelEnvironmentVariablesCommandWithDefaults instantiates a new UpdateChannelEnvironmentVariablesCommand object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelId

`func (o *UpdateChannelEnvironmentVariablesCommand) GetChannelId() string`

GetChannelId returns the ChannelId field if non-nil, zero value otherwise.

### GetChannelIdOk

`func (o *UpdateChannelEnvironmentVariablesCommand) GetChannelIdOk() (*string, bool)`

GetChannelIdOk returns a tuple with the ChannelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelId

`func (o *UpdateChannelEnvironmentVariablesCommand) SetChannelId(v string)`

SetChannelId sets ChannelId field to given value.

### HasChannelId

`func (o *UpdateChannelEnvironmentVariablesCommand) HasChannelId() bool`

HasChannelId returns a boolean if a field has been set.

### GetEnvironmentVariables

`func (o *UpdateChannelEnvironmentVariablesCommand) GetEnvironmentVariables() []UpdateEnvironmentVariableDto`

GetEnvironmentVariables returns the EnvironmentVariables field if non-nil, zero value otherwise.

### GetEnvironmentVariablesOk

`func (o *UpdateChannelEnvironmentVariablesCommand) GetEnvironmentVariablesOk() (*[]UpdateEnvironmentVariableDto, bool)`

GetEnvironmentVariablesOk returns a tuple with the EnvironmentVariables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironmentVariables

`func (o *UpdateChannelEnvironmentVariablesCommand) SetEnvironmentVariables(v []UpdateEnvironmentVariableDto)`

SetEnvironmentVariables sets EnvironmentVariables field to given value.

### HasEnvironmentVariables

`func (o *UpdateChannelEnvironmentVariablesCommand) HasEnvironmentVariables() bool`

HasEnvironmentVariables returns a boolean if a field has been set.

### SetEnvironmentVariablesNil

`func (o *UpdateChannelEnvironmentVariablesCommand) SetEnvironmentVariablesNil(b bool)`

 SetEnvironmentVariablesNil sets the value for EnvironmentVariables to be an explicit nil

### UnsetEnvironmentVariables
`func (o *UpdateChannelEnvironmentVariablesCommand) UnsetEnvironmentVariables()`

UnsetEnvironmentVariables ensures that no value is present for EnvironmentVariables, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


