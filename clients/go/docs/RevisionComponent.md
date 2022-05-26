# RevisionComponent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Created** | Pointer to **time.Time** |  | [optional] 
**CreatedBy** | Pointer to **NullableString** |  | [optional] 
**LastModified** | Pointer to **time.Time** |  | [optional] 
**LastModifiedBy** | Pointer to **NullableString** |  | [optional] 
**Id** | Pointer to **string** |  | [optional] 
**Source** | Pointer to **NullableString** |  | [optional] 
**Name** | Pointer to **NullableString** |  | [optional] 
**Route** | Pointer to **NullableString** |  | [optional] 
**RevisionId** | Pointer to **string** |  | [optional] 
**Revision** | Pointer to [**Revision**](Revision.md) |  | [optional] 
**DomainEvents** | Pointer to [**[]DomainEvent**](DomainEvent.md) |  | [optional] 

## Methods

### NewRevisionComponent

`func NewRevisionComponent() *RevisionComponent`

NewRevisionComponent instantiates a new RevisionComponent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevisionComponentWithDefaults

`func NewRevisionComponentWithDefaults() *RevisionComponent`

NewRevisionComponentWithDefaults instantiates a new RevisionComponent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreated

`func (o *RevisionComponent) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *RevisionComponent) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *RevisionComponent) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *RevisionComponent) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetCreatedBy

`func (o *RevisionComponent) GetCreatedBy() string`

GetCreatedBy returns the CreatedBy field if non-nil, zero value otherwise.

### GetCreatedByOk

`func (o *RevisionComponent) GetCreatedByOk() (*string, bool)`

GetCreatedByOk returns a tuple with the CreatedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedBy

`func (o *RevisionComponent) SetCreatedBy(v string)`

SetCreatedBy sets CreatedBy field to given value.

### HasCreatedBy

`func (o *RevisionComponent) HasCreatedBy() bool`

HasCreatedBy returns a boolean if a field has been set.

### SetCreatedByNil

`func (o *RevisionComponent) SetCreatedByNil(b bool)`

 SetCreatedByNil sets the value for CreatedBy to be an explicit nil

### UnsetCreatedBy
`func (o *RevisionComponent) UnsetCreatedBy()`

UnsetCreatedBy ensures that no value is present for CreatedBy, not even an explicit nil
### GetLastModified

`func (o *RevisionComponent) GetLastModified() time.Time`

GetLastModified returns the LastModified field if non-nil, zero value otherwise.

### GetLastModifiedOk

`func (o *RevisionComponent) GetLastModifiedOk() (*time.Time, bool)`

GetLastModifiedOk returns a tuple with the LastModified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModified

`func (o *RevisionComponent) SetLastModified(v time.Time)`

SetLastModified sets LastModified field to given value.

### HasLastModified

`func (o *RevisionComponent) HasLastModified() bool`

HasLastModified returns a boolean if a field has been set.

### GetLastModifiedBy

`func (o *RevisionComponent) GetLastModifiedBy() string`

GetLastModifiedBy returns the LastModifiedBy field if non-nil, zero value otherwise.

### GetLastModifiedByOk

`func (o *RevisionComponent) GetLastModifiedByOk() (*string, bool)`

GetLastModifiedByOk returns a tuple with the LastModifiedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifiedBy

`func (o *RevisionComponent) SetLastModifiedBy(v string)`

SetLastModifiedBy sets LastModifiedBy field to given value.

### HasLastModifiedBy

`func (o *RevisionComponent) HasLastModifiedBy() bool`

HasLastModifiedBy returns a boolean if a field has been set.

### SetLastModifiedByNil

`func (o *RevisionComponent) SetLastModifiedByNil(b bool)`

 SetLastModifiedByNil sets the value for LastModifiedBy to be an explicit nil

### UnsetLastModifiedBy
`func (o *RevisionComponent) UnsetLastModifiedBy()`

UnsetLastModifiedBy ensures that no value is present for LastModifiedBy, not even an explicit nil
### GetId

`func (o *RevisionComponent) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RevisionComponent) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RevisionComponent) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RevisionComponent) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSource

`func (o *RevisionComponent) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *RevisionComponent) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *RevisionComponent) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *RevisionComponent) HasSource() bool`

HasSource returns a boolean if a field has been set.

### SetSourceNil

`func (o *RevisionComponent) SetSourceNil(b bool)`

 SetSourceNil sets the value for Source to be an explicit nil

### UnsetSource
`func (o *RevisionComponent) UnsetSource()`

UnsetSource ensures that no value is present for Source, not even an explicit nil
### GetName

`func (o *RevisionComponent) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RevisionComponent) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RevisionComponent) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RevisionComponent) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *RevisionComponent) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *RevisionComponent) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetRoute

`func (o *RevisionComponent) GetRoute() string`

GetRoute returns the Route field if non-nil, zero value otherwise.

### GetRouteOk

`func (o *RevisionComponent) GetRouteOk() (*string, bool)`

GetRouteOk returns a tuple with the Route field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoute

`func (o *RevisionComponent) SetRoute(v string)`

SetRoute sets Route field to given value.

### HasRoute

`func (o *RevisionComponent) HasRoute() bool`

HasRoute returns a boolean if a field has been set.

### SetRouteNil

`func (o *RevisionComponent) SetRouteNil(b bool)`

 SetRouteNil sets the value for Route to be an explicit nil

### UnsetRoute
`func (o *RevisionComponent) UnsetRoute()`

UnsetRoute ensures that no value is present for Route, not even an explicit nil
### GetRevisionId

`func (o *RevisionComponent) GetRevisionId() string`

GetRevisionId returns the RevisionId field if non-nil, zero value otherwise.

### GetRevisionIdOk

`func (o *RevisionComponent) GetRevisionIdOk() (*string, bool)`

GetRevisionIdOk returns a tuple with the RevisionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionId

`func (o *RevisionComponent) SetRevisionId(v string)`

SetRevisionId sets RevisionId field to given value.

### HasRevisionId

`func (o *RevisionComponent) HasRevisionId() bool`

HasRevisionId returns a boolean if a field has been set.

### GetRevision

`func (o *RevisionComponent) GetRevision() Revision`

GetRevision returns the Revision field if non-nil, zero value otherwise.

### GetRevisionOk

`func (o *RevisionComponent) GetRevisionOk() (*Revision, bool)`

GetRevisionOk returns a tuple with the Revision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevision

`func (o *RevisionComponent) SetRevision(v Revision)`

SetRevision sets Revision field to given value.

### HasRevision

`func (o *RevisionComponent) HasRevision() bool`

HasRevision returns a boolean if a field has been set.

### GetDomainEvents

`func (o *RevisionComponent) GetDomainEvents() []DomainEvent`

GetDomainEvents returns the DomainEvents field if non-nil, zero value otherwise.

### GetDomainEventsOk

`func (o *RevisionComponent) GetDomainEventsOk() (*[]DomainEvent, bool)`

GetDomainEventsOk returns a tuple with the DomainEvents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomainEvents

`func (o *RevisionComponent) SetDomainEvents(v []DomainEvent)`

SetDomainEvents sets DomainEvents field to given value.

### HasDomainEvents

`func (o *RevisionComponent) HasDomainEvents() bool`

HasDomainEvents returns a boolean if a field has been set.

### SetDomainEventsNil

`func (o *RevisionComponent) SetDomainEventsNil(b bool)`

 SetDomainEventsNil sets the value for DomainEvents to be an explicit nil

### UnsetDomainEvents
`func (o *RevisionComponent) UnsetDomainEvents()`

UnsetDomainEvents ensures that no value is present for DomainEvents, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


