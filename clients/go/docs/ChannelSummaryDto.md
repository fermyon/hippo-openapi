# ChannelSummaryDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Name** | **string** |  | 
**Domain** | **string** |  | 
**AppSummary** | [**AppSummaryDto**](AppSummaryDto.md) |  | 

## Methods

### NewChannelSummaryDto

`func NewChannelSummaryDto(id string, name string, domain string, appSummary AppSummaryDto, ) *ChannelSummaryDto`

NewChannelSummaryDto instantiates a new ChannelSummaryDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelSummaryDtoWithDefaults

`func NewChannelSummaryDtoWithDefaults() *ChannelSummaryDto`

NewChannelSummaryDtoWithDefaults instantiates a new ChannelSummaryDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ChannelSummaryDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ChannelSummaryDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ChannelSummaryDto) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *ChannelSummaryDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ChannelSummaryDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ChannelSummaryDto) SetName(v string)`

SetName sets Name field to given value.


### GetDomain

`func (o *ChannelSummaryDto) GetDomain() string`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *ChannelSummaryDto) GetDomainOk() (*string, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *ChannelSummaryDto) SetDomain(v string)`

SetDomain sets Domain field to given value.


### GetAppSummary

`func (o *ChannelSummaryDto) GetAppSummary() AppSummaryDto`

GetAppSummary returns the AppSummary field if non-nil, zero value otherwise.

### GetAppSummaryOk

`func (o *ChannelSummaryDto) GetAppSummaryOk() (*AppSummaryDto, bool)`

GetAppSummaryOk returns a tuple with the AppSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppSummary

`func (o *ChannelSummaryDto) SetAppSummary(v AppSummaryDto)`

SetAppSummary sets AppSummary field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


