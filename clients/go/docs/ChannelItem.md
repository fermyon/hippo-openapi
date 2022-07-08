# ChannelItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**AppId** | **string** |  | 
**Name** | **string** |  | 
**Domain** | **string** |  | 
**RevisionSelectionStrategy** | [**ChannelRevisionSelectionStrategy**](ChannelRevisionSelectionStrategy.md) |  | 
**ActiveRevision** | Pointer to [**RevisionItem**](RevisionItem.md) |  | [optional] 
**LastPublishAt** | Pointer to **NullableTime** |  | [optional] 
**RangeRule** | Pointer to **NullableString** |  | [optional] 
**Certificate** | Pointer to [**CertificateItem**](CertificateItem.md) |  | [optional] 
**EnvironmentVariables** | [**[]EnvironmentVariableItem**](EnvironmentVariableItem.md) |  | 
**AppSummary** | Pointer to [**AppSummaryDto**](AppSummaryDto.md) |  | [optional] 

## Methods

### NewChannelItem

`func NewChannelItem(id string, appId string, name string, domain string, revisionSelectionStrategy ChannelRevisionSelectionStrategy, environmentVariables []EnvironmentVariableItem, ) *ChannelItem`

NewChannelItem instantiates a new ChannelItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelItemWithDefaults

`func NewChannelItemWithDefaults() *ChannelItem`

NewChannelItemWithDefaults instantiates a new ChannelItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ChannelItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ChannelItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ChannelItem) SetId(v string)`

SetId sets Id field to given value.


### GetAppId

`func (o *ChannelItem) GetAppId() string`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *ChannelItem) GetAppIdOk() (*string, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *ChannelItem) SetAppId(v string)`

SetAppId sets AppId field to given value.


### GetName

`func (o *ChannelItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ChannelItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ChannelItem) SetName(v string)`

SetName sets Name field to given value.


### GetDomain

`func (o *ChannelItem) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ChannelItem) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ChannelItem) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetRevisionSelectionStrategy

`func (o *ChannelItem) GetRevisionSelectionStrategy() ChannelRevisionSelectionStrategy`

GetRevisionSelectionStrategy returns the RevisionSelectionStrategy field if non-nil, zero value otherwise.

### GetRevisionSelectionStrategyOk

`func (o *ChannelItem) GetRevisionSelectionStrategyOk() (*ChannelRevisionSelectionStrategy, bool)`

GetRevisionSelectionStrategyOk returns a tuple with the RevisionSelectionStrategy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionSelectionStrategy

`func (o *ChannelItem) SetRevisionSelectionStrategy(v ChannelRevisionSelectionStrategy)`

SetRevisionSelectionStrategy sets RevisionSelectionStrategy field to given value.


### GetActiveRevision

`func (o *ChannelItem) GetActiveRevision() RevisionItem`

GetActiveRevision returns the ActiveRevision field if non-nil, zero value otherwise.

### GetActiveRevisionOk

`func (o *ChannelItem) GetActiveRevisionOk() (*RevisionItem, bool)`

GetActiveRevisionOk returns a tuple with the ActiveRevision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveRevision

`func (o *ChannelItem) SetActiveRevision(v RevisionItem)`

SetActiveRevision sets ActiveRevision field to given value.

### HasActiveRevision

`func (o *ChannelItem) HasActiveRevision() bool`

HasActiveRevision returns a boolean if a field has been set.

### GetLastPublishAt

`func (o *ChannelItem) GetLastPublishAt() time.Time`

GetLastPublishAt returns the LastPublishAt field if non-nil, zero value otherwise.

### GetLastPublishAtOk

`func (o *ChannelItem) GetLastPublishAtOk() (*time.Time, bool)`

GetLastPublishAtOk returns a tuple with the LastPublishAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastPublishAt

`func (o *ChannelItem) SetLastPublishAt(v time.Time)`

SetLastPublishAt sets LastPublishAt field to given value.

### HasLastPublishAt

`func (o *ChannelItem) HasLastPublishAt() bool`

HasLastPublishAt returns a boolean if a field has been set.

### SetLastPublishAtNil

`func (o *ChannelItem) SetLastPublishAtNil(b bool)`

 SetLastPublishAtNil sets the value for LastPublishAt to be an explicit nil

### UnsetLastPublishAt
`func (o *ChannelItem) UnsetLastPublishAt()`

UnsetLastPublishAt ensures that no value is present for LastPublishAt, not even an explicit nil
### GetRangeRule

`func (o *ChannelItem) GetRangeRule() string`

GetRangeRule returns the RangeRule field if non-nil, zero value otherwise.

### GetRangeRuleOk

`func (o *ChannelItem) GetRangeRuleOk() (*string, bool)`

GetRangeRuleOk returns a tuple with the RangeRule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRangeRule

`func (o *ChannelItem) SetRangeRule(v string)`

SetRangeRule sets RangeRule field to given value.

### HasRangeRule

`func (o *ChannelItem) HasRangeRule() bool`

HasRangeRule returns a boolean if a field has been set.

### SetRangeRuleNil

`func (o *ChannelItem) SetRangeRuleNil(b bool)`

 SetRangeRuleNil sets the value for RangeRule to be an explicit nil

### UnsetRangeRule
`func (o *ChannelItem) UnsetRangeRule()`

UnsetRangeRule ensures that no value is present for RangeRule, not even an explicit nil
### GetCertificate

`func (o *ChannelItem) GetCertificate() CertificateItem`

GetCertificate returns the Certificate field if non-nil, zero value otherwise.

### GetCertificateOk

`func (o *ChannelItem) GetCertificateOk() (*CertificateItem, bool)`

GetCertificateOk returns a tuple with the Certificate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificate

`func (o *ChannelItem) SetCertificate(v CertificateItem)`

SetCertificate sets Certificate field to given value.

### HasCertificate

`func (o *ChannelItem) HasCertificate() bool`

HasCertificate returns a boolean if a field has been set.

### GetEnvironmentVariables

`func (o *ChannelItem) GetEnvironmentVariables() []EnvironmentVariableItem`

GetEnvironmentVariables returns the EnvironmentVariables field if non-nil, zero value otherwise.

### GetEnvironmentVariablesOk

`func (o *ChannelItem) GetEnvironmentVariablesOk() (*[]EnvironmentVariableItem, bool)`

GetEnvironmentVariablesOk returns a tuple with the EnvironmentVariables field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironmentVariables

`func (o *ChannelItem) SetEnvironmentVariables(v []EnvironmentVariableItem)`

SetEnvironmentVariables sets EnvironmentVariables field to given value.


### GetAppSummary

`func (o *ChannelItem) GetAppSummary() AppSummaryDto`

GetAppSummary returns the AppSummary field if non-nil, zero value otherwise.

### GetAppSummaryOk

`func (o *ChannelItem) GetAppSummaryOk() (*AppSummaryDto, bool)`

GetAppSummaryOk returns a tuple with the AppSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppSummary

`func (o *ChannelItem) SetAppSummary(v AppSummaryDto)`

SetAppSummary sets AppSummary field to given value.

### HasAppSummary

`func (o *ChannelItem) HasAppSummary() bool`

HasAppSummary returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


