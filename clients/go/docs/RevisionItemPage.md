# RevisionItemPage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]RevisionItem**](RevisionItem.md) |  | 
**TotalItems** | **int32** |  | 
**PageIndex** | **int32** |  | 
**PageSize** | **int32** |  | 
**IsLastPage** | **bool** |  | [readonly] 

## Methods

### NewRevisionItemPage

`func NewRevisionItemPage(items []RevisionItem, totalItems int32, pageIndex int32, pageSize int32, isLastPage bool, ) *RevisionItemPage`

NewRevisionItemPage instantiates a new RevisionItemPage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRevisionItemPageWithDefaults

`func NewRevisionItemPageWithDefaults() *RevisionItemPage`

NewRevisionItemPageWithDefaults instantiates a new RevisionItemPage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *RevisionItemPage) GetItems() []RevisionItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *RevisionItemPage) GetItemsOk() (*[]RevisionItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *RevisionItemPage) SetItems(v []RevisionItem)`

SetItems sets Items field to given value.


### GetTotalItems

`func (o *RevisionItemPage) GetTotalItems() int32`

GetTotalItems returns the TotalItems field if non-nil, zero value otherwise.

### GetTotalItemsOk

`func (o *RevisionItemPage) GetTotalItemsOk() (*int32, bool)`

GetTotalItemsOk returns a tuple with the TotalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalItems

`func (o *RevisionItemPage) SetTotalItems(v int32)`

SetTotalItems sets TotalItems field to given value.


### GetPageIndex

`func (o *RevisionItemPage) GetPageIndex() int32`

GetPageIndex returns the PageIndex field if non-nil, zero value otherwise.

### GetPageIndexOk

`func (o *RevisionItemPage) GetPageIndexOk() (*int32, bool)`

GetPageIndexOk returns a tuple with the PageIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageIndex

`func (o *RevisionItemPage) SetPageIndex(v int32)`

SetPageIndex sets PageIndex field to given value.


### GetPageSize

`func (o *RevisionItemPage) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *RevisionItemPage) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *RevisionItemPage) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.


### GetIsLastPage

`func (o *RevisionItemPage) GetIsLastPage() bool`

GetIsLastPage returns the IsLastPage field if non-nil, zero value otherwise.

### GetIsLastPageOk

`func (o *RevisionItemPage) GetIsLastPageOk() (*bool, bool)`

GetIsLastPageOk returns a tuple with the IsLastPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsLastPage

`func (o *RevisionItemPage) SetIsLastPage(v bool)`

SetIsLastPage sets IsLastPage field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


