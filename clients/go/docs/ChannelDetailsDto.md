# ChannelDetailsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Name** | **string** |  | 
**Domain** | **string** |  | 
**RevisionSelectionStrategy** | [**ChannelRevisionSelectionStrategy**](ChannelRevisionSelectionStrategy.md) |  | 
**ActiveRevision** | Pointer to [**RevisionDetailsDto**](RevisionDetailsDto.md) |  | [optional] 
**RangeRule** | Pointer to **NullableString** |  | [optional] 
**Certificate** | Pointer to [**Certificate**](Certificate.md) |  | [optional] 
**EnvironmentVariables** | [**[]EnvironmentVariableDto**](EnvironmentVariableDto.md) |  | 

## Methods

### NewChannelDetailsDto

`func NewChannelDetailsDto(id string, name string, domain string, revisionSelectionStrategy ChannelRevisionSelectionStrategy, environmentVariables []EnvironmentVariableDto, ) *ChannelDetailsDto`

NewChannelDetailsDto instantiates a new ChannelDetailsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelDetailsDtoWithDefaults

`func NewChannelDetailsDtoWithDefaults() *ChannelDetailsDto`

NewChannelDetailsDtoWithDefaults instantiates a new ChannelDetailsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ChannelDetailsDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ChannelDetailsDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ChannelDetailsDto) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *ChannelDetailsDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ChannelDetailsDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ChannelDetailsDto) SetName(v string)`

SetName sets Name field to given value.


### GetDomain

`func (o *ChannelDetailsDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ChannelDetailsDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ChannelDetailsDto) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetRevisionSelectionStrategy

`func (o *ChannelDetailsDto) GetRevisionSelectionStrategy() ChannelRevisionSelectionStrategy`

GetRevisionSelectionStrategy returns the RevisionSelectionStrategy field if non-nil, zero value otherwise.

### GetRevisionSelectionStrategyOk

`func (o *ChannelDetailsDto) GetRevisionSelectionStrategyOk() (*ChannelRevisionSelectionStrategy, bool)`

GetRevisionSelectionStrategyOk returns a tuple with the RevisionSelectionStrategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionSelectionStrategy

`func (o *ChannelDetailsDto) SetRevisionSelectionStrategy(v ChannelRevisionSelectionStrategy)`

SetRevisionSelectionStrategy sets RevisionSelectionStrategy field to given value.


### GetActiveRevision

`func (o *ChannelDetailsDto) GetActiveRevision() RevisionDetailsDto`

GetActiveRevision returns the ActiveRevision field if non-nil, zero value otherwise.

### GetActiveRevisionOk

`func (o *ChannelDetailsDto) GetActiveRevisionOk() (*RevisionDetailsDto, bool)`

GetActiveRevisionOk returns a tuple with the ActiveRevision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveRevision

`func (o *ChannelDetailsDto) SetActiveRevision(v RevisionDetailsDto)`

SetActiveRevision sets ActiveRevision field to given value.

### HasActiveRevision

`func (o *ChannelDetailsDto) HasActiveRevision() bool`

HasActiveRevision returns a boolean if a field has been set.

### GetRangeRule

`func (o *ChannelDetailsDto) GetRangeRule() string`

GetRangeRule returns the RangeRule field if non-nil, zero value otherwise.

### GetRangeRuleOk

`func (o *ChannelDetailsDto) GetRangeRuleOk() (*string, bool)`

GetRangeRuleOk returns a tuple with the RangeRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRangeRule

`func (o *ChannelDetailsDto) SetRangeRule(v string)`

SetRangeRule sets RangeRule field to given value.

### HasRangeRule

`func (o *ChannelDetailsDto) HasRangeRule() bool`

HasRangeRule returns a boolean if a field has been set.

### SetRangeRuleNil

`func (o *ChannelDetailsDto) SetRangeRuleNil(b bool)`

 SetRangeRuleNil sets the value for RangeRule to be an explicit nil

### UnsetRangeRule
`func (o *ChannelDetailsDto) UnsetRangeRule()`

UnsetRangeRule ensures that no value is present for RangeRule, not even an explicit nil
### GetCertificate

`func (o *ChannelDetailsDto) GetCertificate() Certificate`

GetCertificate returns the Certificate field if non-nil, zero value otherwise.

### GetCertificateOk

`func (o *ChannelDetailsDto) GetCertificateOk() (*Certificate, bool)`

GetCertificateOk returns a tuple with the Certificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificate

`func (o *ChannelDetailsDto) SetCertificate(v Certificate)`

SetCertificate sets Certificate field to given value.

### HasCertificate

`func (o *ChannelDetailsDto) HasCertificate() bool`

HasCertificate returns a boolean if a field has been set.

### GetEnvironmentVariables

`func (o *ChannelDetailsDto) GetEnvironmentVariables() []EnvironmentVariableDto`

GetEnvironmentVariables returns the EnvironmentVariables field if non-nil, zero value otherwise.

### GetEnvironmentVariablesOk

`func (o *ChannelDetailsDto) GetEnvironmentVariablesOk() (*[]EnvironmentVariableDto, bool)`

GetEnvironmentVariablesOk returns a tuple with the EnvironmentVariables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironmentVariables

`func (o *ChannelDetailsDto) SetEnvironmentVariables(v []EnvironmentVariableDto)`

SetEnvironmentVariables sets EnvironmentVariables field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


