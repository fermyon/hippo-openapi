# RevisionItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**AppId** | **string** |  | 
**RevisionNumber** | **string** |  | 
**Components** | [**[]RevisionComponentDto**](RevisionComponentDto.md) |  | [readonly] 
**Type** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewRevisionItem

`func NewRevisionItem(id string, appId string, revisionNumber string, components []RevisionComponentDto, ) *RevisionItem`

NewRevisionItem instantiates a new RevisionItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevisionItemWithDefaults

`func NewRevisionItemWithDefaults() *RevisionItem`

NewRevisionItemWithDefaults instantiates a new RevisionItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RevisionItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RevisionItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RevisionItem) SetId(v string)`

SetId sets Id field to given value.


### GetAppId

`func (o *RevisionItem) GetAppId() string`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *RevisionItem) GetAppIdOk() (*string, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *RevisionItem) SetAppId(v string)`

SetAppId sets AppId field to given value.


### GetRevisionNumber

`func (o *RevisionItem) GetRevisionNumber() string`

GetRevisionNumber returns the RevisionNumber field if non-nil, zero value otherwise.

### GetRevisionNumberOk

`func (o *RevisionItem) GetRevisionNumberOk() (*string, bool)`

GetRevisionNumberOk returns a tuple with the RevisionNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionNumber

`func (o *RevisionItem) SetRevisionNumber(v string)`

SetRevisionNumber sets RevisionNumber field to given value.


### GetComponents

`func (o *RevisionItem) GetComponents() []RevisionComponentDto`

GetComponents returns the Components field if non-nil, zero value otherwise.

### GetComponentsOk

`func (o *RevisionItem) GetComponentsOk() (*[]RevisionComponentDto, bool)`

GetComponentsOk returns a tuple with the Components field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponents

`func (o *RevisionItem) SetComponents(v []RevisionComponentDto)`

SetComponents sets Components field to given value.


### GetType

`func (o *RevisionItem) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RevisionItem) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RevisionItem) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RevisionItem) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *RevisionItem) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *RevisionItem) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


