# CreateEnvironmentVariableCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | Pointer to **NullableString** |  | [optional] 
**Value** | Pointer to **NullableString** |  | [optional] 
**ChannelId** | Pointer to **string** |  | [optional] 

## Methods

### NewCreateEnvironmentVariableCommand

`func NewCreateEnvironmentVariableCommand() *CreateEnvironmentVariableCommand`

NewCreateEnvironmentVariableCommand instantiates a new CreateEnvironmentVariableCommand object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateEnvironmentVariableCommandWithDefaults

`func NewCreateEnvironmentVariableCommandWithDefaults() *CreateEnvironmentVariableCommand`

NewCreateEnvironmentVariableCommandWithDefaults instantiates a new CreateEnvironmentVariableCommand object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetKey

`func (o *CreateEnvironmentVariableCommand) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *CreateEnvironmentVariableCommand) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *CreateEnvironmentVariableCommand) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *CreateEnvironmentVariableCommand) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *CreateEnvironmentVariableCommand) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *CreateEnvironmentVariableCommand) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetValue

`func (o *CreateEnvironmentVariableCommand) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *CreateEnvironmentVariableCommand) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *CreateEnvironmentVariableCommand) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *CreateEnvironmentVariableCommand) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *CreateEnvironmentVariableCommand) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *CreateEnvironmentVariableCommand) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetChannelId

`func (o *CreateEnvironmentVariableCommand) GetChannelId() string`

GetChannelId returns the ChannelId field if non-nil, zero value otherwise.

### GetChannelIdOk

`func (o *CreateEnvironmentVariableCommand) GetChannelIdOk() (*string, bool)`

GetChannelIdOk returns a tuple with the ChannelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelId

`func (o *CreateEnvironmentVariableCommand) SetChannelId(v string)`

SetChannelId sets ChannelId field to given value.

### HasChannelId

`func (o *CreateEnvironmentVariableCommand) HasChannelId() bool`

HasChannelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


