# DomainEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsPublished** | Pointer to **bool** |  | [optional] 
**DateOccurred** | Pointer to **time.Time** |  | [optional] [readonly] 

## Methods

### NewDomainEvent

`func NewDomainEvent() *DomainEvent`

NewDomainEvent instantiates a new DomainEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDomainEventWithDefaults

`func NewDomainEventWithDefaults() *DomainEvent`

NewDomainEventWithDefaults instantiates a new DomainEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsPublished

`func (o *DomainEvent) GetIsPublished() bool`

GetIsPublished returns the IsPublished field if non-nil, zero value otherwise.

### GetIsPublishedOk

`func (o *DomainEvent) GetIsPublishedOk() (*bool, bool)`

GetIsPublishedOk returns a tuple with the IsPublished field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsPublished

`func (o *DomainEvent) SetIsPublished(v bool)`

SetIsPublished sets IsPublished field to given value.

### HasIsPublished

`func (o *DomainEvent) HasIsPublished() bool`

HasIsPublished returns a boolean if a field has been set.

### GetDateOccurred

`func (o *DomainEvent) GetDateOccurred() time.Time`

GetDateOccurred returns the DateOccurred field if non-nil, zero value otherwise.

### GetDateOccurredOk

`func (o *DomainEvent) GetDateOccurredOk() (*time.Time, bool)`

GetDateOccurredOk returns a tuple with the DateOccurred field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateOccurred

`func (o *DomainEvent) SetDateOccurred(v time.Time)`

SetDateOccurred sets DateOccurred field to given value.

### HasDateOccurred

`func (o *DomainEvent) HasDateOccurred() bool`

HasDateOccurred returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


