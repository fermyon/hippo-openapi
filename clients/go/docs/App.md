# App

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **time.Time** |  | [optional] 
**CreatedBy** | Pointer to **NullableString** |  | [optional] 
**LastModified** | Pointer to **time.Time** |  | [optional] 
**LastModifiedBy** | Pointer to **NullableString** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **NullableString** |  | [optional] 
**StorageId** | Pointer to **NullableString** |  | [optional] 
**Channels** | Pointer to [**[]Channel**](Channel.md) |  | [optional] [readonly] 
**Revisions** | Pointer to [**[]Revision**](Revision.md) |  | [optional] [readonly] 
**DomainEvents** | Pointer to [**[]DomainEvent**](DomainEvent.md) |  | [optional] 

## Methods

### NewApp

`func NewApp() *App`

NewApp instantiates a new App object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppWithDefaults

`func NewAppWithDefaults() *App`

NewAppWithDefaults instantiates a new App object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *App) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *App) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *App) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *App) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetCreatedBy

`func (o *App) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *App) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *App) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *App) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### SetCreatedByNil

`func (o *App) SetCreatedByNil(b bool)`

 SetCreatedByNil sets the value for CreatedBy to be an explicit nil

### UnsetCreatedBy
`func (o *App) UnsetCreatedBy()`

UnsetCreatedBy ensures that no value is present for CreatedBy, not even an explicit nil
### GetLastModified

`func (o *App) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *App) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *App) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.

### HasLastModified

`func (o *App) HasLastModified() bool`

HasLastModified returns a boolean if a field has been set.

### GetLastModifiedBy

`func (o *App) GetLastModifiedBy() string`

GetLastModifiedBy returns the LastModifiedBy field if non-nil, zero value otherwise.

### GetLastModifiedByOk

`func (o *App) GetLastModifiedByOk() (*string, bool)`

GetLastModifiedByOk returns a tuple with the LastModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifiedBy

`func (o *App) SetLastModifiedBy(v string)`

SetLastModifiedBy sets LastModifiedBy field to given value.

### HasLastModifiedBy

`func (o *App) HasLastModifiedBy() bool`

HasLastModifiedBy returns a boolean if a field has been set.

### SetLastModifiedByNil

`func (o *App) SetLastModifiedByNil(b bool)`

 SetLastModifiedByNil sets the value for LastModifiedBy to be an explicit nil

### UnsetLastModifiedBy
`func (o *App) UnsetLastModifiedBy()`

UnsetLastModifiedBy ensures that no value is present for LastModifiedBy, not even an explicit nil
### GetId

`func (o *App) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *App) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *App) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *App) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *App) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *App) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *App) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *App) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *App) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *App) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetStorageId

`func (o *App) GetStorageId() string`

GetStorageId returns the StorageId field if non-nil, zero value otherwise.

### GetStorageIdOk

`func (o *App) GetStorageIdOk() (*string, bool)`

GetStorageIdOk returns a tuple with the StorageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorageId

`func (o *App) SetStorageId(v string)`

SetStorageId sets StorageId field to given value.

### HasStorageId

`func (o *App) HasStorageId() bool`

HasStorageId returns a boolean if a field has been set.

### SetStorageIdNil

`func (o *App) SetStorageIdNil(b bool)`

 SetStorageIdNil sets the value for StorageId to be an explicit nil

### UnsetStorageId
`func (o *App) UnsetStorageId()`

UnsetStorageId ensures that no value is present for StorageId, not even an explicit nil
### GetChannels

`func (o *App) GetChannels() []Channel`

GetChannels returns the Channels field if non-nil, zero value otherwise.

### GetChannelsOk

`func (o *App) GetChannelsOk() (*[]Channel, bool)`

GetChannelsOk returns a tuple with the Channels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannels

`func (o *App) SetChannels(v []Channel)`

SetChannels sets Channels field to given value.

### HasChannels

`func (o *App) HasChannels() bool`

HasChannels returns a boolean if a field has been set.

### SetChannelsNil

`func (o *App) SetChannelsNil(b bool)`

 SetChannelsNil sets the value for Channels to be an explicit nil

### UnsetChannels
`func (o *App) UnsetChannels()`

UnsetChannels ensures that no value is present for Channels, not even an explicit nil
### GetRevisions

`func (o *App) GetRevisions() []Revision`

GetRevisions returns the Revisions field if non-nil, zero value otherwise.

### GetRevisionsOk

`func (o *App) GetRevisionsOk() (*[]Revision, bool)`

GetRevisionsOk returns a tuple with the Revisions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisions

`func (o *App) SetRevisions(v []Revision)`

SetRevisions sets Revisions field to given value.

### HasRevisions

`func (o *App) HasRevisions() bool`

HasRevisions returns a boolean if a field has been set.

### SetRevisionsNil

`func (o *App) SetRevisionsNil(b bool)`

 SetRevisionsNil sets the value for Revisions to be an explicit nil

### UnsetRevisions
`func (o *App) UnsetRevisions()`

UnsetRevisions ensures that no value is present for Revisions, not even an explicit nil
### GetDomainEvents

`func (o *App) GetDomainEvents() []DomainEvent`

GetDomainEvents returns the DomainEvents field if non-nil, zero value otherwise.

### GetDomainEventsOk

`func (o *App) GetDomainEventsOk() (*[]DomainEvent, bool)`

GetDomainEventsOk returns a tuple with the DomainEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainEvents

`func (o *App) SetDomainEvents(v []DomainEvent)`

SetDomainEvents sets DomainEvents field to given value.

### HasDomainEvents

`func (o *App) HasDomainEvents() bool`

HasDomainEvents returns a boolean if a field has been set.

### SetDomainEventsNil

`func (o *App) SetDomainEventsNil(b bool)`

 SetDomainEventsNil sets the value for DomainEvents to be an explicit nil

### UnsetDomainEvents
`func (o *App) UnsetDomainEvents()`

UnsetDomainEvents ensures that no value is present for DomainEvents, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


