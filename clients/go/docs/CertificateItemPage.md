# CertificateItemPage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | Pointer to [**[]CertificateItem**](CertificateItem.md) |  | [optional] 
**TotalItems** | Pointer to **int32** |  | [optional] 
**PageIndex** | Pointer to **NullableInt32** |  | [optional] 
**PageSize** | Pointer to **NullableInt32** |  | [optional] 
**IsLastPage** | Pointer to **NullableBool** |  | [optional] [readonly] 

## Methods

### NewCertificateItemPage

`func NewCertificateItemPage() *CertificateItemPage`

NewCertificateItemPage instantiates a new CertificateItemPage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificateItemPageWithDefaults

`func NewCertificateItemPageWithDefaults() *CertificateItemPage`

NewCertificateItemPageWithDefaults instantiates a new CertificateItemPage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *CertificateItemPage) GetItems() []CertificateItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *CertificateItemPage) GetItemsOk() (*[]CertificateItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *CertificateItemPage) SetItems(v []CertificateItem)`

SetItems sets Items field to given value.

### HasItems

`func (o *CertificateItemPage) HasItems() bool`

HasItems returns a boolean if a field has been set.

### SetItemsNil

`func (o *CertificateItemPage) SetItemsNil(b bool)`

 SetItemsNil sets the value for Items to be an explicit nil

### UnsetItems
`func (o *CertificateItemPage) UnsetItems()`

UnsetItems ensures that no value is present for Items, not even an explicit nil
### GetTotalItems

`func (o *CertificateItemPage) GetTotalItems() int32`

GetTotalItems returns the TotalItems field if non-nil, zero value otherwise.

### GetTotalItemsOk

`func (o *CertificateItemPage) GetTotalItemsOk() (*int32, bool)`

GetTotalItemsOk returns a tuple with the TotalItems field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalItems

`func (o *CertificateItemPage) SetTotalItems(v int32)`

SetTotalItems sets TotalItems field to given value.

### HasTotalItems

`func (o *CertificateItemPage) HasTotalItems() bool`

HasTotalItems returns a boolean if a field has been set.

### GetPageIndex

`func (o *CertificateItemPage) GetPageIndex() int32`

GetPageIndex returns the PageIndex field if non-nil, zero value otherwise.

### GetPageIndexOk

`func (o *CertificateItemPage) GetPageIndexOk() (*int32, bool)`

GetPageIndexOk returns a tuple with the PageIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageIndex

`func (o *CertificateItemPage) SetPageIndex(v int32)`

SetPageIndex sets PageIndex field to given value.

### HasPageIndex

`func (o *CertificateItemPage) HasPageIndex() bool`

HasPageIndex returns a boolean if a field has been set.

### SetPageIndexNil

`func (o *CertificateItemPage) SetPageIndexNil(b bool)`

 SetPageIndexNil sets the value for PageIndex to be an explicit nil

### UnsetPageIndex
`func (o *CertificateItemPage) UnsetPageIndex()`

UnsetPageIndex ensures that no value is present for PageIndex, not even an explicit nil
### GetPageSize

`func (o *CertificateItemPage) GetPageSize() int32`

GetPageSize returns the PageSize field if non-nil, zero value otherwise.

### GetPageSizeOk

`func (o *CertificateItemPage) GetPageSizeOk() (*int32, bool)`

GetPageSizeOk returns a tuple with the PageSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPageSize

`func (o *CertificateItemPage) SetPageSize(v int32)`

SetPageSize sets PageSize field to given value.

### HasPageSize

`func (o *CertificateItemPage) HasPageSize() bool`

HasPageSize returns a boolean if a field has been set.

### SetPageSizeNil

`func (o *CertificateItemPage) SetPageSizeNil(b bool)`

 SetPageSizeNil sets the value for PageSize to be an explicit nil

### UnsetPageSize
`func (o *CertificateItemPage) UnsetPageSize()`

UnsetPageSize ensures that no value is present for PageSize, not even an explicit nil
### GetIsLastPage

`func (o *CertificateItemPage) GetIsLastPage() bool`

GetIsLastPage returns the IsLastPage field if non-nil, zero value otherwise.

### GetIsLastPageOk

`func (o *CertificateItemPage) GetIsLastPageOk() (*bool, bool)`

GetIsLastPageOk returns a tuple with the IsLastPage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsLastPage

`func (o *CertificateItemPage) SetIsLastPage(v bool)`

SetIsLastPage sets IsLastPage field to given value.

### HasIsLastPage

`func (o *CertificateItemPage) HasIsLastPage() bool`

HasIsLastPage returns a boolean if a field has been set.

### SetIsLastPageNil

`func (o *CertificateItemPage) SetIsLastPageNil(b bool)`

 SetIsLastPageNil sets the value for IsLastPage to be an explicit nil

### UnsetIsLastPage
`func (o *CertificateItemPage) UnsetIsLastPage()`

UnsetIsLastPage ensures that no value is present for IsLastPage, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


