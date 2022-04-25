# ChannelDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**AppId** | **string** |  | 
**Name** | **string** |  | 
**Domain** | **string** |  | 
**RevisionSelectionStrategy** | [**ChannelRevisionSelectionStrategy**](ChannelRevisionSelectionStrategy.md) |  | 
**ActiveRevision** | Pointer to [**Revision**](Revision.md) |  | [optional] 
**RangeRule** | Pointer to **NullableString** |  | [optional] 
**Certificate** | Pointer to [**Certificate**](Certificate.md) |  | [optional] 
**EnvironmentVariables** | [**[]EnvironmentVariableDto**](EnvironmentVariableDto.md) |  | 

## Methods

### NewChannelDto

`func NewChannelDto(id string, appId string, name string, domain string, revisionSelectionStrategy ChannelRevisionSelectionStrategy, environmentVariables []EnvironmentVariableDto, ) *ChannelDto`

NewChannelDto instantiates a new ChannelDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelDtoWithDefaults

`func NewChannelDtoWithDefaults() *ChannelDto`

NewChannelDtoWithDefaults instantiates a new ChannelDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ChannelDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ChannelDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ChannelDto) SetId(v string)`

SetId sets Id field to given value.


### GetAppId

`func (o *ChannelDto) GetAppId() string`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *ChannelDto) GetAppIdOk() (*string, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *ChannelDto) SetAppId(v string)`

SetAppId sets AppId field to given value.


### GetName

`func (o *ChannelDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ChannelDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ChannelDto) SetName(v string)`

SetName sets Name field to given value.


### GetDomain

`func (o *ChannelDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ChannelDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ChannelDto) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetRevisionSelectionStrategy

`func (o *ChannelDto) GetRevisionSelectionStrategy() ChannelRevisionSelectionStrategy`

GetRevisionSelectionStrategy returns the RevisionSelectionStrategy field if non-nil, zero value otherwise.

### GetRevisionSelectionStrategyOk

`func (o *ChannelDto) GetRevisionSelectionStrategyOk() (*ChannelRevisionSelectionStrategy, bool)`

GetRevisionSelectionStrategyOk returns a tuple with the RevisionSelectionStrategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionSelectionStrategy

`func (o *ChannelDto) SetRevisionSelectionStrategy(v ChannelRevisionSelectionStrategy)`

SetRevisionSelectionStrategy sets RevisionSelectionStrategy field to given value.


### GetActiveRevision

`func (o *ChannelDto) GetActiveRevision() Revision`

GetActiveRevision returns the ActiveRevision field if non-nil, zero value otherwise.

### GetActiveRevisionOk

`func (o *ChannelDto) GetActiveRevisionOk() (*Revision, bool)`

GetActiveRevisionOk returns a tuple with the ActiveRevision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveRevision

`func (o *ChannelDto) SetActiveRevision(v Revision)`

SetActiveRevision sets ActiveRevision field to given value.

### HasActiveRevision

`func (o *ChannelDto) HasActiveRevision() bool`

HasActiveRevision returns a boolean if a field has been set.

### GetRangeRule

`func (o *ChannelDto) GetRangeRule() string`

GetRangeRule returns the RangeRule field if non-nil, zero value otherwise.

### GetRangeRuleOk

`func (o *ChannelDto) GetRangeRuleOk() (*string, bool)`

GetRangeRuleOk returns a tuple with the RangeRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRangeRule

`func (o *ChannelDto) SetRangeRule(v string)`

SetRangeRule sets RangeRule field to given value.

### HasRangeRule

`func (o *ChannelDto) HasRangeRule() bool`

HasRangeRule returns a boolean if a field has been set.

### SetRangeRuleNil

`func (o *ChannelDto) SetRangeRuleNil(b bool)`

 SetRangeRuleNil sets the value for RangeRule to be an explicit nil

### UnsetRangeRule
`func (o *ChannelDto) UnsetRangeRule()`

UnsetRangeRule ensures that no value is present for RangeRule, not even an explicit nil
### GetCertificate

`func (o *ChannelDto) GetCertificate() Certificate`

GetCertificate returns the Certificate field if non-nil, zero value otherwise.

### GetCertificateOk

`func (o *ChannelDto) GetCertificateOk() (*Certificate, bool)`

GetCertificateOk returns a tuple with the Certificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificate

`func (o *ChannelDto) SetCertificate(v Certificate)`

SetCertificate sets Certificate field to given value.

### HasCertificate

`func (o *ChannelDto) HasCertificate() bool`

HasCertificate returns a boolean if a field has been set.

### GetEnvironmentVariables

`func (o *ChannelDto) GetEnvironmentVariables() []EnvironmentVariableDto`

GetEnvironmentVariables returns the EnvironmentVariables field if non-nil, zero value otherwise.

### GetEnvironmentVariablesOk

`func (o *ChannelDto) GetEnvironmentVariablesOk() (*[]EnvironmentVariableDto, bool)`

GetEnvironmentVariablesOk returns a tuple with the EnvironmentVariables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironmentVariables

`func (o *ChannelDto) SetEnvironmentVariables(v []EnvironmentVariableDto)`

SetEnvironmentVariables sets EnvironmentVariables field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


