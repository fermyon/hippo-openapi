# AppSummaryDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Name** | **string** |  | 
**StorageId** | **string** |  | 
**Channels** | [**[]AppChannelListItem**](AppChannelListItem.md) |  | 

## Methods

### NewAppSummaryDto

`func NewAppSummaryDto(id string, name string, storageId string, channels []AppChannelListItem, ) *AppSummaryDto`

NewAppSummaryDto instantiates a new AppSummaryDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppSummaryDtoWithDefaults

`func NewAppSummaryDtoWithDefaults() *AppSummaryDto`

NewAppSummaryDtoWithDefaults instantiates a new AppSummaryDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AppSummaryDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AppSummaryDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AppSummaryDto) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AppSummaryDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AppSummaryDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AppSummaryDto) SetName(v string)`

SetName sets Name field to given value.


### GetStorageId

`func (o *AppSummaryDto) GetStorageId() string`

GetStorageId returns the StorageId field if non-nil, zero value otherwise.

### GetStorageIdOk

`func (o *AppSummaryDto) GetStorageIdOk() (*string, bool)`

GetStorageIdOk returns a tuple with the StorageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorageId

`func (o *AppSummaryDto) SetStorageId(v string)`

SetStorageId sets StorageId field to given value.


### GetChannels

`func (o *AppSummaryDto) GetChannels() []AppChannelListItem`

GetChannels returns the Channels field if non-nil, zero value otherwise.

### GetChannelsOk

`func (o *AppSummaryDto) GetChannelsOk() (*[]AppChannelListItem, bool)`

GetChannelsOk returns a tuple with the Channels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannels

`func (o *AppSummaryDto) SetChannels(v []AppChannelListItem)`

SetChannels sets Channels field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


