# Certificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **time.Time** |  | [optional] 
**CreatedBy** | Pointer to **NullableString** |  | [optional] 
**LastModified** | Pointer to **time.Time** |  | [optional] 
**LastModifiedBy** | Pointer to **NullableString** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **NullableString** |  | [optional] 
**PublicKey** | Pointer to **NullableString** |  | [optional] 
**PrivateKey** | Pointer to **NullableString** |  | [optional] 
**Channels** | Pointer to [**[]Channel**](Channel.md) |  | [optional] [readonly] 
**DomainEvents** | Pointer to [**[]DomainEvent**](DomainEvent.md) |  | [optional] 

## Methods

### NewCertificate

`func NewCertificate() *Certificate`

NewCertificate instantiates a new Certificate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificateWithDefaults

`func NewCertificateWithDefaults() *Certificate`

NewCertificateWithDefaults instantiates a new Certificate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *Certificate) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Certificate) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Certificate) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Certificate) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetCreatedBy

`func (o *Certificate) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *Certificate) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *Certificate) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *Certificate) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### SetCreatedByNil

`func (o *Certificate) SetCreatedByNil(b bool)`

 SetCreatedByNil sets the value for CreatedBy to be an explicit nil

### UnsetCreatedBy
`func (o *Certificate) UnsetCreatedBy()`

UnsetCreatedBy ensures that no value is present for CreatedBy, not even an explicit nil
### GetLastModified

`func (o *Certificate) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Certificate) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Certificate) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.

### HasLastModified

`func (o *Certificate) HasLastModified() bool`

HasLastModified returns a boolean if a field has been set.

### GetLastModifiedBy

`func (o *Certificate) GetLastModifiedBy() string`

GetLastModifiedBy returns the LastModifiedBy field if non-nil, zero value otherwise.

### GetLastModifiedByOk

`func (o *Certificate) GetLastModifiedByOk() (*string, bool)`

GetLastModifiedByOk returns a tuple with the LastModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifiedBy

`func (o *Certificate) SetLastModifiedBy(v string)`

SetLastModifiedBy sets LastModifiedBy field to given value.

### HasLastModifiedBy

`func (o *Certificate) HasLastModifiedBy() bool`

HasLastModifiedBy returns a boolean if a field has been set.

### SetLastModifiedByNil

`func (o *Certificate) SetLastModifiedByNil(b bool)`

 SetLastModifiedByNil sets the value for LastModifiedBy to be an explicit nil

### UnsetLastModifiedBy
`func (o *Certificate) UnsetLastModifiedBy()`

UnsetLastModifiedBy ensures that no value is present for LastModifiedBy, not even an explicit nil
### GetId

`func (o *Certificate) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Certificate) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Certificate) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Certificate) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Certificate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Certificate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Certificate) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Certificate) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Certificate) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Certificate) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetPublicKey

`func (o *Certificate) GetPublicKey() string`

GetPublicKey returns the PublicKey field if non-nil, zero value otherwise.

### GetPublicKeyOk

`func (o *Certificate) GetPublicKeyOk() (*string, bool)`

GetPublicKeyOk returns a tuple with the PublicKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKey

`func (o *Certificate) SetPublicKey(v string)`

SetPublicKey sets PublicKey field to given value.

### HasPublicKey

`func (o *Certificate) HasPublicKey() bool`

HasPublicKey returns a boolean if a field has been set.

### SetPublicKeyNil

`func (o *Certificate) SetPublicKeyNil(b bool)`

 SetPublicKeyNil sets the value for PublicKey to be an explicit nil

### UnsetPublicKey
`func (o *Certificate) UnsetPublicKey()`

UnsetPublicKey ensures that no value is present for PublicKey, not even an explicit nil
### GetPrivateKey

`func (o *Certificate) GetPrivateKey() string`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *Certificate) GetPrivateKeyOk() (*string, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *Certificate) SetPrivateKey(v string)`

SetPrivateKey sets PrivateKey field to given value.

### HasPrivateKey

`func (o *Certificate) HasPrivateKey() bool`

HasPrivateKey returns a boolean if a field has been set.

### SetPrivateKeyNil

`func (o *Certificate) SetPrivateKeyNil(b bool)`

 SetPrivateKeyNil sets the value for PrivateKey to be an explicit nil

### UnsetPrivateKey
`func (o *Certificate) UnsetPrivateKey()`

UnsetPrivateKey ensures that no value is present for PrivateKey, not even an explicit nil
### GetChannels

`func (o *Certificate) GetChannels() []Channel`

GetChannels returns the Channels field if non-nil, zero value otherwise.

### GetChannelsOk

`func (o *Certificate) GetChannelsOk() (*[]Channel, bool)`

GetChannelsOk returns a tuple with the Channels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannels

`func (o *Certificate) SetChannels(v []Channel)`

SetChannels sets Channels field to given value.

### HasChannels

`func (o *Certificate) HasChannels() bool`

HasChannels returns a boolean if a field has been set.

### SetChannelsNil

`func (o *Certificate) SetChannelsNil(b bool)`

 SetChannelsNil sets the value for Channels to be an explicit nil

### UnsetChannels
`func (o *Certificate) UnsetChannels()`

UnsetChannels ensures that no value is present for Channels, not even an explicit nil
### GetDomainEvents

`func (o *Certificate) GetDomainEvents() []DomainEvent`

GetDomainEvents returns the DomainEvents field if non-nil, zero value otherwise.

### GetDomainEventsOk

`func (o *Certificate) GetDomainEventsOk() (*[]DomainEvent, bool)`

GetDomainEventsOk returns a tuple with the DomainEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainEvents

`func (o *Certificate) SetDomainEvents(v []DomainEvent)`

SetDomainEvents sets DomainEvents field to given value.

### HasDomainEvents

`func (o *Certificate) HasDomainEvents() bool`

HasDomainEvents returns a boolean if a field has been set.

### SetDomainEventsNil

`func (o *Certificate) SetDomainEventsNil(b bool)`

 SetDomainEventsNil sets the value for DomainEvents to be an explicit nil

### UnsetDomainEvents
`func (o *Certificate) UnsetDomainEvents()`

UnsetDomainEvents ensures that no value is present for DomainEvents, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


