/*
Hippo.Web

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hippo-openapi

import (
	"encoding/json"
)

// AppDto struct for AppDto
type AppDto struct {
	Id string `json:"id"`
	Name string `json:"name"`
	StorageId string `json:"storageId"`
	Description NullableString `json:"description,omitempty"`
	Channels []AppChannelSummary `json:"channels"`
}

// NewAppDto instantiates a new AppDto object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAppDto(id string, name string, storageId string, channels []AppChannelSummary) *AppDto {
	this := AppDto{}
	this.Id = id
	this.Name = name
	this.StorageId = storageId
	this.Channels = channels
	return &this
}

// NewAppDtoWithDefaults instantiates a new AppDto object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAppDtoWithDefaults() *AppDto {
	this := AppDto{}
	return &this
}

// GetId returns the Id field value
func (o *AppDto) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *AppDto) GetIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *AppDto) SetId(v string) {
	o.Id = v
}

// GetName returns the Name field value
func (o *AppDto) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *AppDto) GetNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *AppDto) SetName(v string) {
	o.Name = v
}

// GetStorageId returns the StorageId field value
func (o *AppDto) GetStorageId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.StorageId
}

// GetStorageIdOk returns a tuple with the StorageId field value
// and a boolean to check if the value has been set.
func (o *AppDto) GetStorageIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.StorageId, true
}

// SetStorageId sets field value
func (o *AppDto) SetStorageId(v string) {
	o.StorageId = v
}

// GetDescription returns the Description field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *AppDto) GetDescription() string {
	if o == nil || o.Description.Get() == nil {
		var ret string
		return ret
	}
	return *o.Description.Get()
}

// GetDescriptionOk returns a tuple with the Description field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *AppDto) GetDescriptionOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.Description.Get(), o.Description.IsSet()
}

// HasDescription returns a boolean if a field has been set.
func (o *AppDto) HasDescription() bool {
	if o != nil && o.Description.IsSet() {
		return true
	}

	return false
}

// SetDescription gets a reference to the given NullableString and assigns it to the Description field.
func (o *AppDto) SetDescription(v string) {
	o.Description.Set(&v)
}
// SetDescriptionNil sets the value for Description to be an explicit nil
func (o *AppDto) SetDescriptionNil() {
	o.Description.Set(nil)
}

// UnsetDescription ensures that no value is present for Description, not even an explicit nil
func (o *AppDto) UnsetDescription() {
	o.Description.Unset()
}

// GetChannels returns the Channels field value
func (o *AppDto) GetChannels() []AppChannelSummary {
	if o == nil {
		var ret []AppChannelSummary
		return ret
	}

	return o.Channels
}

// GetChannelsOk returns a tuple with the Channels field value
// and a boolean to check if the value has been set.
func (o *AppDto) GetChannelsOk() ([]AppChannelSummary, bool) {
	if o == nil {
		return nil, false
	}
	return o.Channels, true
}

// SetChannels sets field value
func (o *AppDto) SetChannels(v []AppChannelSummary) {
	o.Channels = v
}

func (o AppDto) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["name"] = o.Name
	}
	if true {
		toSerialize["storageId"] = o.StorageId
	}
	if o.Description.IsSet() {
		toSerialize["description"] = o.Description.Get()
	}
	if true {
		toSerialize["channels"] = o.Channels
	}
	return json.Marshal(toSerialize)
}

type NullableAppDto struct {
	value *AppDto
	isSet bool
}

func (v NullableAppDto) Get() *AppDto {
	return v.value
}

func (v *NullableAppDto) Set(val *AppDto) {
	v.value = val
	v.isSet = true
}

func (v NullableAppDto) IsSet() bool {
	return v.isSet
}

func (v *NullableAppDto) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAppDto(val *AppDto) *NullableAppDto {
	return &NullableAppDto{value: val, isSet: true}
}

func (v NullableAppDto) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAppDto) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


