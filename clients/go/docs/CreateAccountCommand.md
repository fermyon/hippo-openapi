# CreateAccountCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | Pointer to **NullableString** |  | [optional] 
**Password** | Pointer to **NullableString** |  | [optional] 
**PasswordConfirm** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewCreateAccountCommand

`func NewCreateAccountCommand() *CreateAccountCommand`

NewCreateAccountCommand instantiates a new CreateAccountCommand object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateAccountCommandWithDefaults

`func NewCreateAccountCommandWithDefaults() *CreateAccountCommand`

NewCreateAccountCommandWithDefaults instantiates a new CreateAccountCommand object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserName

`func (o *CreateAccountCommand) GetUserName() string`

GetUserName returns the UserName field if non-nil, zero value otherwise.

### GetUserNameOk

`func (o *CreateAccountCommand) GetUserNameOk() (*string, bool)`

GetUserNameOk returns a tuple with the UserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserName

`func (o *CreateAccountCommand) SetUserName(v string)`

SetUserName sets UserName field to given value.

### HasUserName

`func (o *CreateAccountCommand) HasUserName() bool`

HasUserName returns a boolean if a field has been set.

### SetUserNameNil

`func (o *CreateAccountCommand) SetUserNameNil(b bool)`

 SetUserNameNil sets the value for UserName to be an explicit nil

### UnsetUserName
`func (o *CreateAccountCommand) UnsetUserName()`

UnsetUserName ensures that no value is present for UserName, not even an explicit nil
### GetPassword

`func (o *CreateAccountCommand) GetPassword() string`

GetPassword returns the Password field if non-nil, zero value otherwise.

### GetPasswordOk

`func (o *CreateAccountCommand) GetPasswordOk() (*string, bool)`

GetPasswordOk returns a tuple with the Password field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPassword

`func (o *CreateAccountCommand) SetPassword(v string)`

SetPassword sets Password field to given value.

### HasPassword

`func (o *CreateAccountCommand) HasPassword() bool`

HasPassword returns a boolean if a field has been set.

### SetPasswordNil

`func (o *CreateAccountCommand) SetPasswordNil(b bool)`

 SetPasswordNil sets the value for Password to be an explicit nil

### UnsetPassword
`func (o *CreateAccountCommand) UnsetPassword()`

UnsetPassword ensures that no value is present for Password, not even an explicit nil
### GetPasswordConfirm

`func (o *CreateAccountCommand) GetPasswordConfirm() string`

GetPasswordConfirm returns the PasswordConfirm field if non-nil, zero value otherwise.

### GetPasswordConfirmOk

`func (o *CreateAccountCommand) GetPasswordConfirmOk() (*string, bool)`

GetPasswordConfirmOk returns a tuple with the PasswordConfirm field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPasswordConfirm

`func (o *CreateAccountCommand) SetPasswordConfirm(v string)`

SetPasswordConfirm sets PasswordConfirm field to given value.

### HasPasswordConfirm

`func (o *CreateAccountCommand) HasPasswordConfirm() bool`

HasPasswordConfirm returns a boolean if a field has been set.

### SetPasswordConfirmNil

`func (o *CreateAccountCommand) SetPasswordConfirmNil(b bool)`

 SetPasswordConfirmNil sets the value for PasswordConfirm to be an explicit nil

### UnsetPasswordConfirm
`func (o *CreateAccountCommand) UnsetPasswordConfirm()`

UnsetPasswordConfirm ensures that no value is present for PasswordConfirm, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


