# AppItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Name** | **string** |  | 
**StorageId** | **string** |  | 
**Description** | Pointer to **NullableString** |  | [optional] 
**Channels** | [**[]AppChannelListItem**](AppChannelListItem.md) |  | 

## Methods

### NewAppItem

`func NewAppItem(id string, name string, storageId string, channels []AppChannelListItem, ) *AppItem`

NewAppItem instantiates a new AppItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppItemWithDefaults

`func NewAppItemWithDefaults() *AppItem`

NewAppItemWithDefaults instantiates a new AppItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AppItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AppItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AppItem) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *AppItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AppItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AppItem) SetName(v string)`

SetName sets Name field to given value.


### GetStorageId

`func (o *AppItem) GetStorageId() string`

GetStorageId returns the StorageId field if non-nil, zero value otherwise.

### GetStorageIdOk

`func (o *AppItem) GetStorageIdOk() (*string, bool)`

GetStorageIdOk returns a tuple with the StorageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorageId

`func (o *AppItem) SetStorageId(v string)`

SetStorageId sets StorageId field to given value.


### GetDescription

`func (o *AppItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AppItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AppItem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AppItem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *AppItem) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *AppItem) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetChannels

`func (o *AppItem) GetChannels() []AppChannelListItem`

GetChannels returns the Channels field if non-nil, zero value otherwise.

### GetChannelsOk

`func (o *AppItem) GetChannelsOk() (*[]AppChannelListItem, bool)`

GetChannelsOk returns a tuple with the Channels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannels

`func (o *AppItem) SetChannels(v []AppChannelListItem)`

SetChannels sets Channels field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


