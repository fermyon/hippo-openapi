# CertificateItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** |  | 
**Name** | **string** |  | 
**PublicKey** | **string** |  | 
**PrivateKey** | **string** |  | 
**Channels** | [**[]ChannelItem**](ChannelItem.md) |  | 

## Methods

### NewCertificateItem

`func NewCertificateItem(id string, name string, publicKey string, privateKey string, channels []ChannelItem, ) *CertificateItem`

NewCertificateItem instantiates a new CertificateItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificateItemWithDefaults

`func NewCertificateItemWithDefaults() *CertificateItem`

NewCertificateItemWithDefaults instantiates a new CertificateItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CertificateItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertificateItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertificateItem) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CertificateItem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CertificateItem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CertificateItem) SetName(v string)`

SetName sets Name field to given value.


### GetPublicKey

`func (o *CertificateItem) GetPublicKey() string`

GetPublicKey returns the PublicKey field if non-nil, zero value otherwise.

### GetPublicKeyOk

`func (o *CertificateItem) GetPublicKeyOk() (*string, bool)`

GetPublicKeyOk returns a tuple with the PublicKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKey

`func (o *CertificateItem) SetPublicKey(v string)`

SetPublicKey sets PublicKey field to given value.


### GetPrivateKey

`func (o *CertificateItem) GetPrivateKey() string`

GetPrivateKey returns the PrivateKey field if non-nil, zero value otherwise.

### GetPrivateKeyOk

`func (o *CertificateItem) GetPrivateKeyOk() (*string, bool)`

GetPrivateKeyOk returns a tuple with the PrivateKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivateKey

`func (o *CertificateItem) SetPrivateKey(v string)`

SetPrivateKey sets PrivateKey field to given value.


### GetChannels

`func (o *CertificateItem) GetChannels() []ChannelItem`

GetChannels returns the Channels field if non-nil, zero value otherwise.

### GetChannelsOk

`func (o *CertificateItem) GetChannelsOk() (*[]ChannelItem, bool)`

GetChannelsOk returns a tuple with the Channels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannels

`func (o *CertificateItem) SetChannels(v []ChannelItem)`

SetChannels sets Channels field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


