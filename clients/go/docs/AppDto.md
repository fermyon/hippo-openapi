# AppDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **NullableString** |  | [optional] 
**StorageId** | Pointer to **NullableString** |  | [optional] 
**Channels** | Pointer to [**[]ChannelDto**](ChannelDto.md) |  | [optional] 
**Revisions** | Pointer to [**[]RevisionDto**](RevisionDto.md) |  | [optional] 

## Methods

### NewAppDto

`func NewAppDto() *AppDto`

NewAppDto instantiates a new AppDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppDtoWithDefaults

`func NewAppDtoWithDefaults() *AppDto`

NewAppDtoWithDefaults instantiates a new AppDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AppDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AppDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AppDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AppDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AppDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AppDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AppDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AppDto) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *AppDto) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *AppDto) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetStorageId

`func (o *AppDto) GetStorageId() string`

GetStorageId returns the StorageId field if non-nil, zero value otherwise.

### GetStorageIdOk

`func (o *AppDto) GetStorageIdOk() (*string, bool)`

GetStorageIdOk returns a tuple with the StorageId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStorageId

`func (o *AppDto) SetStorageId(v string)`

SetStorageId sets StorageId field to given value.

### HasStorageId

`func (o *AppDto) HasStorageId() bool`

HasStorageId returns a boolean if a field has been set.

### SetStorageIdNil

`func (o *AppDto) SetStorageIdNil(b bool)`

 SetStorageIdNil sets the value for StorageId to be an explicit nil

### UnsetStorageId
`func (o *AppDto) UnsetStorageId()`

UnsetStorageId ensures that no value is present for StorageId, not even an explicit nil
### GetChannels

`func (o *AppDto) GetChannels() []ChannelDto`

GetChannels returns the Channels field if non-nil, zero value otherwise.

### GetChannelsOk

`func (o *AppDto) GetChannelsOk() (*[]ChannelDto, bool)`

GetChannelsOk returns a tuple with the Channels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannels

`func (o *AppDto) SetChannels(v []ChannelDto)`

SetChannels sets Channels field to given value.

### HasChannels

`func (o *AppDto) HasChannels() bool`

HasChannels returns a boolean if a field has been set.

### SetChannelsNil

`func (o *AppDto) SetChannelsNil(b bool)`

 SetChannelsNil sets the value for Channels to be an explicit nil

### UnsetChannels
`func (o *AppDto) UnsetChannels()`

UnsetChannels ensures that no value is present for Channels, not even an explicit nil
### GetRevisions

`func (o *AppDto) GetRevisions() []RevisionDto`

GetRevisions returns the Revisions field if non-nil, zero value otherwise.

### GetRevisionsOk

`func (o *AppDto) GetRevisionsOk() (*[]RevisionDto, bool)`

GetRevisionsOk returns a tuple with the Revisions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisions

`func (o *AppDto) SetRevisions(v []RevisionDto)`

SetRevisions sets Revisions field to given value.

### HasRevisions

`func (o *AppDto) HasRevisions() bool`

HasRevisions returns a boolean if a field has been set.

### SetRevisionsNil

`func (o *AppDto) SetRevisionsNil(b bool)`

 SetRevisionsNil sets the value for Revisions to be an explicit nil

### UnsetRevisions
`func (o *AppDto) UnsetRevisions()`

UnsetRevisions ensures that no value is present for Revisions, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


