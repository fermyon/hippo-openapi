# Revision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **time.Time** |  | [optional] 
**CreatedBy** | Pointer to **NullableString** |  | [optional] 
**LastModified** | Pointer to **time.Time** |  | [optional] 
**LastModifiedBy** | Pointer to **NullableString** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**RevisionNumber** | Pointer to **NullableString** |  | [optional] 
**AppId** | Pointer to **string** |  | [optional] 
**App** | Pointer to [**App**](App.md) |  | [optional] 
**DomainEvents** | Pointer to [**[]DomainEvent**](DomainEvent.md) |  | [optional] 

## Methods

### NewRevision

`func NewRevision() *Revision`

NewRevision instantiates a new Revision object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevisionWithDefaults

`func NewRevisionWithDefaults() *Revision`

NewRevisionWithDefaults instantiates a new Revision object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *Revision) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Revision) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Revision) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Revision) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetCreatedBy

`func (o *Revision) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *Revision) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *Revision) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *Revision) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### SetCreatedByNil

`func (o *Revision) SetCreatedByNil(b bool)`

 SetCreatedByNil sets the value for CreatedBy to be an explicit nil

### UnsetCreatedBy
`func (o *Revision) UnsetCreatedBy()`

UnsetCreatedBy ensures that no value is present for CreatedBy, not even an explicit nil
### GetLastModified

`func (o *Revision) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *Revision) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *Revision) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.

### HasLastModified

`func (o *Revision) HasLastModified() bool`

HasLastModified returns a boolean if a field has been set.

### GetLastModifiedBy

`func (o *Revision) GetLastModifiedBy() string`

GetLastModifiedBy returns the LastModifiedBy field if non-nil, zero value otherwise.

### GetLastModifiedByOk

`func (o *Revision) GetLastModifiedByOk() (*string, bool)`

GetLastModifiedByOk returns a tuple with the LastModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifiedBy

`func (o *Revision) SetLastModifiedBy(v string)`

SetLastModifiedBy sets LastModifiedBy field to given value.

### HasLastModifiedBy

`func (o *Revision) HasLastModifiedBy() bool`

HasLastModifiedBy returns a boolean if a field has been set.

### SetLastModifiedByNil

`func (o *Revision) SetLastModifiedByNil(b bool)`

 SetLastModifiedByNil sets the value for LastModifiedBy to be an explicit nil

### UnsetLastModifiedBy
`func (o *Revision) UnsetLastModifiedBy()`

UnsetLastModifiedBy ensures that no value is present for LastModifiedBy, not even an explicit nil
### GetId

`func (o *Revision) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Revision) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Revision) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Revision) HasId() bool`

HasId returns a boolean if a field has been set.

### GetRevisionNumber

`func (o *Revision) GetRevisionNumber() string`

GetRevisionNumber returns the RevisionNumber field if non-nil, zero value otherwise.

### GetRevisionNumberOk

`func (o *Revision) GetRevisionNumberOk() (*string, bool)`

GetRevisionNumberOk returns a tuple with the RevisionNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionNumber

`func (o *Revision) SetRevisionNumber(v string)`

SetRevisionNumber sets RevisionNumber field to given value.

### HasRevisionNumber

`func (o *Revision) HasRevisionNumber() bool`

HasRevisionNumber returns a boolean if a field has been set.

### SetRevisionNumberNil

`func (o *Revision) SetRevisionNumberNil(b bool)`

 SetRevisionNumberNil sets the value for RevisionNumber to be an explicit nil

### UnsetRevisionNumber
`func (o *Revision) UnsetRevisionNumber()`

UnsetRevisionNumber ensures that no value is present for RevisionNumber, not even an explicit nil
### GetAppId

`func (o *Revision) GetAppId() string`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *Revision) GetAppIdOk() (*string, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *Revision) SetAppId(v string)`

SetAppId sets AppId field to given value.

### HasAppId

`func (o *Revision) HasAppId() bool`

HasAppId returns a boolean if a field has been set.

### GetApp

`func (o *Revision) GetApp() App`

GetApp returns the App field if non-nil, zero value otherwise.

### GetAppOk

`func (o *Revision) GetAppOk() (*App, bool)`

GetAppOk returns a tuple with the App field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApp

`func (o *Revision) SetApp(v App)`

SetApp sets App field to given value.

### HasApp

`func (o *Revision) HasApp() bool`

HasApp returns a boolean if a field has been set.

### GetDomainEvents

`func (o *Revision) GetDomainEvents() []DomainEvent`

GetDomainEvents returns the DomainEvents field if non-nil, zero value otherwise.

### GetDomainEventsOk

`func (o *Revision) GetDomainEventsOk() (*[]DomainEvent, bool)`

GetDomainEventsOk returns a tuple with the DomainEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainEvents

`func (o *Revision) SetDomainEvents(v []DomainEvent)`

SetDomainEvents sets DomainEvents field to given value.

### HasDomainEvents

`func (o *Revision) HasDomainEvents() bool`

HasDomainEvents returns a boolean if a field has been set.

### SetDomainEventsNil

`func (o *Revision) SetDomainEventsNil(b bool)`

 SetDomainEventsNil sets the value for DomainEvents to be an explicit nil

### UnsetDomainEvents
`func (o *Revision) UnsetDomainEvents()`

UnsetDomainEvents ensures that no value is present for DomainEvents, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


