# StringPage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]string** |  | 
**TotalItems** | **int32** |  | 
**PageIndex** | **int32** |  | 
**PageSize** | **int32** |  | 
**IsLastPage** | **bool** |  | [readonly] 

## Methods

### NewStringPage

`func NewStringPage(items []string, totalItems int32, pageIndex int32, pageSize int32, isLastPage bool, ) *StringPage`

NewStringPage instantiates a new StringPage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStringPageWithDefaults

`func NewStringPageWithDefaults() *StringPage`

NewStringPageWithDefaults instantiates a new StringPage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *StringPage) GetItems() []string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *StringPage) GetItemsOk() (*[]string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *StringPage) SetItems(v []string)`

SetItems sets Items field to given value.


### GetTotalItems

`func (o *StringPage) GetTotalItems() int32`

GetTotalItems returns the TotalItems field if non-nil, zero value otherwise.

### GetTotalItemsOk

`func (o *StringPage) GetTotalItemsOk() (*int32, bool)`

GetTotalItemsOk returns a tuple with the TotalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalItems

`func (o *StringPage) SetTotalItems(v int32)`

SetTotalItems sets TotalItems field to given value.


### GetPageIndex

`func (o *StringPage) GetPageIndex() int32`

GetPageIndex returns the PageIndex field if non-nil, zero value otherwise.

### GetPageIndexOk

`func (o *StringPage) GetPageIndexOk() (*int32, bool)`

GetPageIndexOk returns a tuple with the PageIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageIndex

`func (o *StringPage) SetPageIndex(v int32)`

SetPageIndex sets PageIndex field to given value.


### GetPageSize

`func (o *StringPage) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *StringPage) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *StringPage) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.


### GetIsLastPage

`func (o *StringPage) GetIsLastPage() bool`

GetIsLastPage returns the IsLastPage field if non-nil, zero value otherwise.

### GetIsLastPageOk

`func (o *StringPage) GetIsLastPageOk() (*bool, bool)`

GetIsLastPageOk returns a tuple with the IsLastPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsLastPage

`func (o *StringPage) SetIsLastPage(v bool)`

SetIsLastPage sets IsLastPage field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


