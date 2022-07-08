# ChannelItemPage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**[]ChannelItem**](ChannelItem.md) |  | [optional] 
**TotalItems** | Pointer to **int32** |  | [optional] 
**PageIndex** | Pointer to **NullableInt32** |  | [optional] 
**PageSize** | Pointer to **NullableInt32** |  | [optional] 
**IsLastPage** | Pointer to **NullableBool** |  | [optional] [readonly] 

## Methods

### NewChannelItemPage

`func NewChannelItemPage() *ChannelItemPage`

NewChannelItemPage instantiates a new ChannelItemPage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelItemPageWithDefaults

`func NewChannelItemPageWithDefaults() *ChannelItemPage`

NewChannelItemPageWithDefaults instantiates a new ChannelItemPage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ChannelItemPage) GetItems() []ChannelItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ChannelItemPage) GetItemsOk() (*[]ChannelItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ChannelItemPage) SetItems(v []ChannelItem)`

SetItems sets Items field to given value.

### HasItems

`func (o *ChannelItemPage) HasItems() bool`

HasItems returns a boolean if a field has been set.

### SetItemsNil

`func (o *ChannelItemPage) SetItemsNil(b bool)`

 SetItemsNil sets the value for Items to be an explicit nil

### UnsetItems
`func (o *ChannelItemPage) UnsetItems()`

UnsetItems ensures that no value is present for Items, not even an explicit nil
### GetTotalItems

`func (o *ChannelItemPage) GetTotalItems() int32`

GetTotalItems returns the TotalItems field if non-nil, zero value otherwise.

### GetTotalItemsOk

`func (o *ChannelItemPage) GetTotalItemsOk() (*int32, bool)`

GetTotalItemsOk returns a tuple with the TotalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalItems

`func (o *ChannelItemPage) SetTotalItems(v int32)`

SetTotalItems sets TotalItems field to given value.

### HasTotalItems

`func (o *ChannelItemPage) HasTotalItems() bool`

HasTotalItems returns a boolean if a field has been set.

### GetPageIndex

`func (o *ChannelItemPage) GetPageIndex() int32`

GetPageIndex returns the PageIndex field if non-nil, zero value otherwise.

### GetPageIndexOk

`func (o *ChannelItemPage) GetPageIndexOk() (*int32, bool)`

GetPageIndexOk returns a tuple with the PageIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageIndex

`func (o *ChannelItemPage) SetPageIndex(v int32)`

SetPageIndex sets PageIndex field to given value.

### HasPageIndex

`func (o *ChannelItemPage) HasPageIndex() bool`

HasPageIndex returns a boolean if a field has been set.

### SetPageIndexNil

`func (o *ChannelItemPage) SetPageIndexNil(b bool)`

 SetPageIndexNil sets the value for PageIndex to be an explicit nil

### UnsetPageIndex
`func (o *ChannelItemPage) UnsetPageIndex()`

UnsetPageIndex ensures that no value is present for PageIndex, not even an explicit nil
### GetPageSize

`func (o *ChannelItemPage) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *ChannelItemPage) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *ChannelItemPage) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *ChannelItemPage) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### SetPageSizeNil

`func (o *ChannelItemPage) SetPageSizeNil(b bool)`

 SetPageSizeNil sets the value for PageSize to be an explicit nil

### UnsetPageSize
`func (o *ChannelItemPage) UnsetPageSize()`

UnsetPageSize ensures that no value is present for PageSize, not even an explicit nil
### GetIsLastPage

`func (o *ChannelItemPage) GetIsLastPage() bool`

GetIsLastPage returns the IsLastPage field if non-nil, zero value otherwise.

### GetIsLastPageOk

`func (o *ChannelItemPage) GetIsLastPageOk() (*bool, bool)`

GetIsLastPageOk returns a tuple with the IsLastPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsLastPage

`func (o *ChannelItemPage) SetIsLastPage(v bool)`

SetIsLastPage sets IsLastPage field to given value.

### HasIsLastPage

`func (o *ChannelItemPage) HasIsLastPage() bool`

HasIsLastPage returns a boolean if a field has been set.

### SetIsLastPageNil

`func (o *ChannelItemPage) SetIsLastPageNil(b bool)`

 SetIsLastPageNil sets the value for IsLastPage to be an explicit nil

### UnsetIsLastPage
`func (o *ChannelItemPage) UnsetIsLastPage()`

UnsetIsLastPage ensures that no value is present for IsLastPage, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


