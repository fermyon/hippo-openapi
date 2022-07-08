# AppItemPage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]AppItem**](AppItem.md) |  | 
**TotalItems** | **int32** |  | 
**PageIndex** | **int32** |  | 
**PageSize** | **int32** |  | 
**IsLastPage** | **bool** |  | [readonly] 

## Methods

### NewAppItemPage

`func NewAppItemPage(items []AppItem, totalItems int32, pageIndex int32, pageSize int32, isLastPage bool, ) *AppItemPage`

NewAppItemPage instantiates a new AppItemPage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppItemPageWithDefaults

`func NewAppItemPageWithDefaults() *AppItemPage`

NewAppItemPageWithDefaults instantiates a new AppItemPage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *AppItemPage) GetItems() []AppItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *AppItemPage) GetItemsOk() (*[]AppItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *AppItemPage) SetItems(v []AppItem)`

SetItems sets Items field to given value.


### GetTotalItems

`func (o *AppItemPage) GetTotalItems() int32`

GetTotalItems returns the TotalItems field if non-nil, zero value otherwise.

### GetTotalItemsOk

`func (o *AppItemPage) GetTotalItemsOk() (*int32, bool)`

GetTotalItemsOk returns a tuple with the TotalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalItems

`func (o *AppItemPage) SetTotalItems(v int32)`

SetTotalItems sets TotalItems field to given value.


### GetPageIndex

`func (o *AppItemPage) GetPageIndex() int32`

GetPageIndex returns the PageIndex field if non-nil, zero value otherwise.

### GetPageIndexOk

`func (o *AppItemPage) GetPageIndexOk() (*int32, bool)`

GetPageIndexOk returns a tuple with the PageIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageIndex

`func (o *AppItemPage) SetPageIndex(v int32)`

SetPageIndex sets PageIndex field to given value.


### GetPageSize

`func (o *AppItemPage) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *AppItemPage) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *AppItemPage) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.


### GetIsLastPage

`func (o *AppItemPage) GetIsLastPage() bool`

GetIsLastPage returns the IsLastPage field if non-nil, zero value otherwise.

### GetIsLastPageOk

`func (o *AppItemPage) GetIsLastPageOk() (*bool, bool)`

GetIsLastPageOk returns a tuple with the IsLastPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsLastPage

`func (o *AppItemPage) SetIsLastPage(v bool)`

SetIsLastPage sets IsLastPage field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


