# EnvironmentVariable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **time.Time** |  | [optional] 
**CreatedBy** | Pointer to **NullableString** |  | [optional] 
**LastModified** | Pointer to **time.Time** |  | [optional] 
**LastModifiedBy** | Pointer to **NullableString** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Key** | Pointer to **NullableString** |  | [optional] 
**Value** | Pointer to **NullableString** |  | [optional] 
**ChannelId** | Pointer to **string** |  | [optional] 
**Channel** | Pointer to [**Channel**](Channel.md) |  | [optional] 
**DomainEvents** | Pointer to [**[]DomainEvent**](DomainEvent.md) |  | [optional] 

## Methods

### NewEnvironmentVariable

`func NewEnvironmentVariable() *EnvironmentVariable`

NewEnvironmentVariable instantiates a new EnvironmentVariable object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEnvironmentVariableWithDefaults

`func NewEnvironmentVariableWithDefaults() *EnvironmentVariable`

NewEnvironmentVariableWithDefaults instantiates a new EnvironmentVariable object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *EnvironmentVariable) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *EnvironmentVariable) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *EnvironmentVariable) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *EnvironmentVariable) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetCreatedBy

`func (o *EnvironmentVariable) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *EnvironmentVariable) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *EnvironmentVariable) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *EnvironmentVariable) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### SetCreatedByNil

`func (o *EnvironmentVariable) SetCreatedByNil(b bool)`

 SetCreatedByNil sets the value for CreatedBy to be an explicit nil

### UnsetCreatedBy
`func (o *EnvironmentVariable) UnsetCreatedBy()`

UnsetCreatedBy ensures that no value is present for CreatedBy, not even an explicit nil
### GetLastModified

`func (o *EnvironmentVariable) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *EnvironmentVariable) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *EnvironmentVariable) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.

### HasLastModified

`func (o *EnvironmentVariable) HasLastModified() bool`

HasLastModified returns a boolean if a field has been set.

### GetLastModifiedBy

`func (o *EnvironmentVariable) GetLastModifiedBy() string`

GetLastModifiedBy returns the LastModifiedBy field if non-nil, zero value otherwise.

### GetLastModifiedByOk

`func (o *EnvironmentVariable) GetLastModifiedByOk() (*string, bool)`

GetLastModifiedByOk returns a tuple with the LastModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifiedBy

`func (o *EnvironmentVariable) SetLastModifiedBy(v string)`

SetLastModifiedBy sets LastModifiedBy field to given value.

### HasLastModifiedBy

`func (o *EnvironmentVariable) HasLastModifiedBy() bool`

HasLastModifiedBy returns a boolean if a field has been set.

### SetLastModifiedByNil

`func (o *EnvironmentVariable) SetLastModifiedByNil(b bool)`

 SetLastModifiedByNil sets the value for LastModifiedBy to be an explicit nil

### UnsetLastModifiedBy
`func (o *EnvironmentVariable) UnsetLastModifiedBy()`

UnsetLastModifiedBy ensures that no value is present for LastModifiedBy, not even an explicit nil
### GetId

`func (o *EnvironmentVariable) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EnvironmentVariable) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EnvironmentVariable) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EnvironmentVariable) HasId() bool`

HasId returns a boolean if a field has been set.

### GetKey

`func (o *EnvironmentVariable) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *EnvironmentVariable) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *EnvironmentVariable) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *EnvironmentVariable) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *EnvironmentVariable) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *EnvironmentVariable) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetValue

`func (o *EnvironmentVariable) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *EnvironmentVariable) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *EnvironmentVariable) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *EnvironmentVariable) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *EnvironmentVariable) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *EnvironmentVariable) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetChannelId

`func (o *EnvironmentVariable) GetChannelId() string`

GetChannelId returns the ChannelId field if non-nil, zero value otherwise.

### GetChannelIdOk

`func (o *EnvironmentVariable) GetChannelIdOk() (*string, bool)`

GetChannelIdOk returns a tuple with the ChannelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelId

`func (o *EnvironmentVariable) SetChannelId(v string)`

SetChannelId sets ChannelId field to given value.

### HasChannelId

`func (o *EnvironmentVariable) HasChannelId() bool`

HasChannelId returns a boolean if a field has been set.

### GetChannel

`func (o *EnvironmentVariable) GetChannel() Channel`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *EnvironmentVariable) GetChannelOk() (*Channel, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *EnvironmentVariable) SetChannel(v Channel)`

SetChannel sets Channel field to given value.

### HasChannel

`func (o *EnvironmentVariable) HasChannel() bool`

HasChannel returns a boolean if a field has been set.

### GetDomainEvents

`func (o *EnvironmentVariable) GetDomainEvents() []DomainEvent`

GetDomainEvents returns the DomainEvents field if non-nil, zero value otherwise.

### GetDomainEventsOk

`func (o *EnvironmentVariable) GetDomainEventsOk() (*[]DomainEvent, bool)`

GetDomainEventsOk returns a tuple with the DomainEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainEvents

`func (o *EnvironmentVariable) SetDomainEvents(v []DomainEvent)`

SetDomainEvents sets DomainEvents field to given value.

### HasDomainEvents

`func (o *EnvironmentVariable) HasDomainEvents() bool`

HasDomainEvents returns a boolean if a field has been set.

### SetDomainEventsNil

`func (o *EnvironmentVariable) SetDomainEventsNil(b bool)`

 SetDomainEventsNil sets the value for DomainEvents to be an explicit nil

### UnsetDomainEvents
`func (o *EnvironmentVariable) UnsetDomainEvents()`

UnsetDomainEvents ensures that no value is present for DomainEvents, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


