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

// EnvironmentVariableItem struct for EnvironmentVariableItem
type EnvironmentVariableItem struct {
	ChannelId string `json:"channelId"`
	Key string `json:"key"`
	Value string `json:"value"`
}

// NewEnvironmentVariableItem instantiates a new EnvironmentVariableItem object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEnvironmentVariableItem(channelId string, key string, value string) *EnvironmentVariableItem {
	this := EnvironmentVariableItem{}
	this.ChannelId = channelId
	this.Key = key
	this.Value = value
	return &this
}

// NewEnvironmentVariableItemWithDefaults instantiates a new EnvironmentVariableItem object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEnvironmentVariableItemWithDefaults() *EnvironmentVariableItem {
	this := EnvironmentVariableItem{}
	return &this
}

// GetChannelId returns the ChannelId field value
func (o *EnvironmentVariableItem) GetChannelId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ChannelId
}

// GetChannelIdOk returns a tuple with the ChannelId field value
// and a boolean to check if the value has been set.
func (o *EnvironmentVariableItem) GetChannelIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ChannelId, true
}

// SetChannelId sets field value
func (o *EnvironmentVariableItem) SetChannelId(v string) {
	o.ChannelId = v
}

// GetKey returns the Key field value
func (o *EnvironmentVariableItem) GetKey() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Key
}

// GetKeyOk returns a tuple with the Key field value
// and a boolean to check if the value has been set.
func (o *EnvironmentVariableItem) GetKeyOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Key, true
}

// SetKey sets field value
func (o *EnvironmentVariableItem) SetKey(v string) {
	o.Key = v
}

// GetValue returns the Value field value
func (o *EnvironmentVariableItem) GetValue() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Value
}

// GetValueOk returns a tuple with the Value field value
// and a boolean to check if the value has been set.
func (o *EnvironmentVariableItem) GetValueOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Value, true
}

// SetValue sets field value
func (o *EnvironmentVariableItem) SetValue(v string) {
	o.Value = v
}

func (o EnvironmentVariableItem) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["channelId"] = o.ChannelId
	}
	if true {
		toSerialize["key"] = o.Key
	}
	if true {
		toSerialize["value"] = o.Value
	}
	return json.Marshal(toSerialize)
}

type NullableEnvironmentVariableItem struct {
	value *EnvironmentVariableItem
	isSet bool
}

func (v NullableEnvironmentVariableItem) Get() *EnvironmentVariableItem {
	return v.value
}

func (v *NullableEnvironmentVariableItem) Set(val *EnvironmentVariableItem) {
	v.value = val
	v.isSet = true
}

func (v NullableEnvironmentVariableItem) IsSet() bool {
	return v.isSet
}

func (v *NullableEnvironmentVariableItem) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEnvironmentVariableItem(val *EnvironmentVariableItem) *NullableEnvironmentVariableItem {
	return &NullableEnvironmentVariableItem{value: val, isSet: true}
}

func (v NullableEnvironmentVariableItem) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEnvironmentVariableItem) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

