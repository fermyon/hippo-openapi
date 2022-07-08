# UpdateChannelCommand

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Name** | **string** |  | 
**Domain** | **string** |  | 
**RevisionSelectionStrategy** | [**ChannelRevisionSelectionStrategy**](ChannelRevisionSelectionStrategy.md) |  | 
**RangeRule** | Pointer to **NullableString** |  | [optional] 
**ActiveRevisionId** | Pointer to **NullableString** |  | [optional] 
**LastPublishDate** | Pointer to **time.Time** |  | [optional] 
**CertificateId** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewUpdateChannelCommand

`func NewUpdateChannelCommand(id string, name string, domain string, revisionSelectionStrategy ChannelRevisionSelectionStrategy, ) *UpdateChannelCommand`

NewUpdateChannelCommand instantiates a new UpdateChannelCommand object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdateChannelCommandWithDefaults

`func NewUpdateChannelCommandWithDefaults() *UpdateChannelCommand`

NewUpdateChannelCommandWithDefaults instantiates a new UpdateChannelCommand object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *UpdateChannelCommand) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *UpdateChannelCommand) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *UpdateChannelCommand) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *UpdateChannelCommand) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UpdateChannelCommand) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UpdateChannelCommand) SetName(v string)`

SetName sets Name field to given value.


### GetDomain

`func (o *UpdateChannelCommand) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *UpdateChannelCommand) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *UpdateChannelCommand) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetRevisionSelectionStrategy

`func (o *UpdateChannelCommand) GetRevisionSelectionStrategy() ChannelRevisionSelectionStrategy`

GetRevisionSelectionStrategy returns the RevisionSelectionStrategy field if non-nil, zero value otherwise.

### GetRevisionSelectionStrategyOk

`func (o *UpdateChannelCommand) GetRevisionSelectionStrategyOk() (*ChannelRevisionSelectionStrategy, bool)`

GetRevisionSelectionStrategyOk returns a tuple with the RevisionSelectionStrategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionSelectionStrategy

`func (o *UpdateChannelCommand) SetRevisionSelectionStrategy(v ChannelRevisionSelectionStrategy)`

SetRevisionSelectionStrategy sets RevisionSelectionStrategy field to given value.


### GetRangeRule

`func (o *UpdateChannelCommand) GetRangeRule() string`

GetRangeRule returns the RangeRule field if non-nil, zero value otherwise.

### GetRangeRuleOk

`func (o *UpdateChannelCommand) GetRangeRuleOk() (*string, bool)`

GetRangeRuleOk returns a tuple with the RangeRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRangeRule

`func (o *UpdateChannelCommand) SetRangeRule(v string)`

SetRangeRule sets RangeRule field to given value.

### HasRangeRule

`func (o *UpdateChannelCommand) HasRangeRule() bool`

HasRangeRule returns a boolean if a field has been set.

### SetRangeRuleNil

`func (o *UpdateChannelCommand) SetRangeRuleNil(b bool)`

 SetRangeRuleNil sets the value for RangeRule to be an explicit nil

### UnsetRangeRule
`func (o *UpdateChannelCommand) UnsetRangeRule()`

UnsetRangeRule ensures that no value is present for RangeRule, not even an explicit nil
### GetActiveRevisionId

`func (o *UpdateChannelCommand) GetActiveRevisionId() string`

GetActiveRevisionId returns the ActiveRevisionId field if non-nil, zero value otherwise.

### GetActiveRevisionIdOk

`func (o *UpdateChannelCommand) GetActiveRevisionIdOk() (*string, bool)`

GetActiveRevisionIdOk returns a tuple with the ActiveRevisionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveRevisionId

`func (o *UpdateChannelCommand) SetActiveRevisionId(v string)`

SetActiveRevisionId sets ActiveRevisionId field to given value.

### HasActiveRevisionId

`func (o *UpdateChannelCommand) HasActiveRevisionId() bool`

HasActiveRevisionId returns a boolean if a field has been set.

### SetActiveRevisionIdNil

`func (o *UpdateChannelCommand) SetActiveRevisionIdNil(b bool)`

 SetActiveRevisionIdNil sets the value for ActiveRevisionId to be an explicit nil

### UnsetActiveRevisionId
`func (o *UpdateChannelCommand) UnsetActiveRevisionId()`

UnsetActiveRevisionId ensures that no value is present for ActiveRevisionId, not even an explicit nil
### GetLastPublishDate

`func (o *UpdateChannelCommand) GetLastPublishDate() time.Time`

GetLastPublishDate returns the LastPublishDate field if non-nil, zero value otherwise.

### GetLastPublishDateOk

`func (o *UpdateChannelCommand) GetLastPublishDateOk() (*time.Time, bool)`

GetLastPublishDateOk returns a tuple with the LastPublishDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastPublishDate

`func (o *UpdateChannelCommand) SetLastPublishDate(v time.Time)`

SetLastPublishDate sets LastPublishDate field to given value.

### HasLastPublishDate

`func (o *UpdateChannelCommand) HasLastPublishDate() bool`

HasLastPublishDate returns a boolean if a field has been set.

### GetCertificateId

`func (o *UpdateChannelCommand) GetCertificateId() string`

GetCertificateId returns the CertificateId field if non-nil, zero value otherwise.

### GetCertificateIdOk

`func (o *UpdateChannelCommand) GetCertificateIdOk() (*string, bool)`

GetCertificateIdOk returns a tuple with the CertificateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificateId

`func (o *UpdateChannelCommand) SetCertificateId(v string)`

SetCertificateId sets CertificateId field to given value.

### HasCertificateId

`func (o *UpdateChannelCommand) HasCertificateId() bool`

HasCertificateId returns a boolean if a field has been set.

### SetCertificateIdNil

`func (o *UpdateChannelCommand) SetCertificateIdNil(b bool)`

 SetCertificateIdNil sets the value for CertificateId to be an explicit nil

### UnsetCertificateId
`func (o *UpdateChannelCommand) UnsetCertificateId()`

UnsetCertificateId ensures that no value is present for CertificateId, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


