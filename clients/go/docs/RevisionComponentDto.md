# RevisionComponentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Source** | **string** |  | 
**Name** | **string** |  | 
**Route** | Pointer to **NullableString** |  | [optional] 
**Channel** | Pointer to **NullableString** |  | [optional] 
**Type** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewRevisionComponentDto

`func NewRevisionComponentDto(id string, source string, name string, ) *RevisionComponentDto`

NewRevisionComponentDto instantiates a new RevisionComponentDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevisionComponentDtoWithDefaults

`func NewRevisionComponentDtoWithDefaults() *RevisionComponentDto`

NewRevisionComponentDtoWithDefaults instantiates a new RevisionComponentDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RevisionComponentDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RevisionComponentDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RevisionComponentDto) SetId(v string)`

SetId sets Id field to given value.


### GetSource

`func (o *RevisionComponentDto) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *RevisionComponentDto) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *RevisionComponentDto) SetSource(v string)`

SetSource sets Source field to given value.


### GetName

`func (o *RevisionComponentDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RevisionComponentDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RevisionComponentDto) SetName(v string)`

SetName sets Name field to given value.


### GetRoute

`func (o *RevisionComponentDto) GetRoute() string`

GetRoute returns the Route field if non-nil, zero value otherwise.

### GetRouteOk

`func (o *RevisionComponentDto) GetRouteOk() (*string, bool)`

GetRouteOk returns a tuple with the Route field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoute

`func (o *RevisionComponentDto) SetRoute(v string)`

SetRoute sets Route field to given value.

### HasRoute

`func (o *RevisionComponentDto) HasRoute() bool`

HasRoute returns a boolean if a field has been set.

### SetRouteNil

`func (o *RevisionComponentDto) SetRouteNil(b bool)`

 SetRouteNil sets the value for Route to be an explicit nil

### UnsetRoute
`func (o *RevisionComponentDto) UnsetRoute()`

UnsetRoute ensures that no value is present for Route, not even an explicit nil
### GetChannel

`func (o *RevisionComponentDto) GetChannel() string`

GetChannel returns the Channel field if non-nil, zero value otherwise.

### GetChannelOk

`func (o *RevisionComponentDto) GetChannelOk() (*string, bool)`

GetChannelOk returns a tuple with the Channel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannel

`func (o *RevisionComponentDto) SetChannel(v string)`

SetChannel sets Channel field to given value.

### HasChannel

`func (o *RevisionComponentDto) HasChannel() bool`

HasChannel returns a boolean if a field has been set.

### SetChannelNil

`func (o *RevisionComponentDto) SetChannelNil(b bool)`

 SetChannelNil sets the value for Channel to be an explicit nil

### UnsetChannel
`func (o *RevisionComponentDto) UnsetChannel()`

UnsetChannel ensures that no value is present for Channel, not even an explicit nil
### GetType

`func (o *RevisionComponentDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RevisionComponentDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RevisionComponentDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RevisionComponentDto) HasType() bool`

HasType returns a boolean if a field has been set.

### SetTypeNil

`func (o *RevisionComponentDto) SetTypeNil(b bool)`

 SetTypeNil sets the value for Type to be an explicit nil

### UnsetType
`func (o *RevisionComponentDto) UnsetType()`

UnsetType ensures that no value is present for Type, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


