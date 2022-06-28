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

// ChannelJobStatus struct for ChannelJobStatus
type ChannelJobStatus struct {
	ChannelId string `json:"channelId"`
	Status JobStatus `json:"status"`
}

// NewChannelJobStatus instantiates a new ChannelJobStatus object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewChannelJobStatus(channelId string, status JobStatus) *ChannelJobStatus {
	this := ChannelJobStatus{}
	this.ChannelId = channelId
	this.Status = status
	return &this
}

// NewChannelJobStatusWithDefaults instantiates a new ChannelJobStatus object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewChannelJobStatusWithDefaults() *ChannelJobStatus {
	this := ChannelJobStatus{}
	return &this
}

// GetChannelId returns the ChannelId field value
func (o *ChannelJobStatus) GetChannelId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.ChannelId
}

// GetChannelIdOk returns a tuple with the ChannelId field value
// and a boolean to check if the value has been set.
func (o *ChannelJobStatus) GetChannelIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.ChannelId, true
}

// SetChannelId sets field value
func (o *ChannelJobStatus) SetChannelId(v string) {
	o.ChannelId = v
}

// GetStatus returns the Status field value
func (o *ChannelJobStatus) GetStatus() JobStatus {
	if o == nil {
		var ret JobStatus
		return ret
	}

	return o.Status
}

// GetStatusOk returns a tuple with the Status field value
// and a boolean to check if the value has been set.
func (o *ChannelJobStatus) GetStatusOk() (*JobStatus, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Status, true
}

// SetStatus sets field value
func (o *ChannelJobStatus) SetStatus(v JobStatus) {
	o.Status = v
}

func (o ChannelJobStatus) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["channelId"] = o.ChannelId
	}
	if true {
		toSerialize["status"] = o.Status
	}
	return json.Marshal(toSerialize)
}

type NullableChannelJobStatus struct {
	value *ChannelJobStatus
	isSet bool
}

func (v NullableChannelJobStatus) Get() *ChannelJobStatus {
	return v.value
}

func (v *NullableChannelJobStatus) Set(val *ChannelJobStatus) {
	v.value = val
	v.isSet = true
}

func (v NullableChannelJobStatus) IsSet() bool {
	return v.isSet
}

func (v *NullableChannelJobStatus) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChannelJobStatus(val *ChannelJobStatus) *NullableChannelJobStatus {
	return &NullableChannelJobStatus{value: val, isSet: true}
}

func (v NullableChannelJobStatus) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChannelJobStatus) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

