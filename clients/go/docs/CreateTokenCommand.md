# CreateTokenCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | Pointer to **NullableString** |  | [optional] 
**Password** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewCreateTokenCommand

`func NewCreateTokenCommand() *CreateTokenCommand`

NewCreateTokenCommand instantiates a new CreateTokenCommand object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateTokenCommandWithDefaults

`func NewCreateTokenCommandWithDefaults() *CreateTokenCommand`

NewCreateTokenCommandWithDefaults instantiates a new CreateTokenCommand object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserName

`func (o *CreateTokenCommand) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *CreateTokenCommand) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *CreateTokenCommand) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *CreateTokenCommand) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### SetUserNameNil

`func (o *CreateTokenCommand) SetUserNameNil(b bool)`

 SetUserNameNil sets the value for UserName to be an explicit nil

### UnsetUserName
`func (o *CreateTokenCommand) UnsetUserName()`

UnsetUserName ensures that no value is present for UserName, not even an explicit nil
### GetPassword

`func (o *CreateTokenCommand) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *CreateTokenCommand) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *CreateTokenCommand) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *CreateTokenCommand) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### SetPasswordNil

`func (o *CreateTokenCommand) SetPasswordNil(b bool)`

 SetPasswordNil sets the value for Password to be an explicit nil

### UnsetPassword
`func (o *CreateTokenCommand) UnsetPassword()`

UnsetPassword ensures that no value is present for Password, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


