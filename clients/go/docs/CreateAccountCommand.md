# CreateAccountCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | **string** |  | 
**Password** | **string** |  | 
**PasswordConfirm** | **string** |  | 

## Methods

### NewCreateAccountCommand

`func NewCreateAccountCommand(userName string, password string, passwordConfirm string, ) *CreateAccountCommand`

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



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


