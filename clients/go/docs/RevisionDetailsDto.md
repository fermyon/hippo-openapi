# RevisionDetailsDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**RevisionNumber** | **string** |  | 
**Description** | **string** |  | 
**Components** | Pointer to [**[]RevisionComponentDto**](RevisionComponentDto.md) |  | [optional] [readonly] 

## Methods

### NewRevisionDetailsDto

`func NewRevisionDetailsDto(id string, revisionNumber string, description string, ) *RevisionDetailsDto`

NewRevisionDetailsDto instantiates a new RevisionDetailsDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevisionDetailsDtoWithDefaults

`func NewRevisionDetailsDtoWithDefaults() *RevisionDetailsDto`

NewRevisionDetailsDtoWithDefaults instantiates a new RevisionDetailsDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RevisionDetailsDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RevisionDetailsDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RevisionDetailsDto) SetId(v string)`

SetId sets Id field to given value.


### GetRevisionNumber

`func (o *RevisionDetailsDto) GetRevisionNumber() string`

GetRevisionNumber returns the RevisionNumber field if non-nil, zero value otherwise.

### GetRevisionNumberOk

`func (o *RevisionDetailsDto) GetRevisionNumberOk() (*string, bool)`

GetRevisionNumberOk returns a tuple with the RevisionNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevisionNumber

`func (o *RevisionDetailsDto) SetRevisionNumber(v string)`

SetRevisionNumber sets RevisionNumber field to given value.


### GetDescription

`func (o *RevisionDetailsDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RevisionDetailsDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RevisionDetailsDto) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetComponents

`func (o *RevisionDetailsDto) GetComponents() []RevisionComponentDto`

GetComponents returns the Components field if non-nil, zero value otherwise.

### GetComponentsOk

`func (o *RevisionDetailsDto) GetComponentsOk() (*[]RevisionComponentDto, bool)`

GetComponentsOk returns a tuple with the Components field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComponents

`func (o *RevisionDetailsDto) SetComponents(v []RevisionComponentDto)`

SetComponents sets Components field to given value.

### HasComponents

`func (o *RevisionDetailsDto) HasComponents() bool`

HasComponents returns a boolean if a field has been set.

### SetComponentsNil

`func (o *RevisionDetailsDto) SetComponentsNil(b bool)`

 SetComponentsNil sets the value for Components to be an explicit nil

### UnsetComponents
`func (o *RevisionDetailsDto) UnsetComponents()`

UnsetComponents ensures that no value is present for Components, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


