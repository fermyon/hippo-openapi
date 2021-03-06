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

// AppChannelSummary struct for AppChannelSummary
type AppChannelSummary struct {
	Id string `json:"id"`
	Name string `json:"name"`
	ActiveRevisionNumber NullableString `json:"activeRevisionNumber,omitempty"`
}

// NewAppChannelSummary instantiates a new AppChannelSummary object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewAppChannelSummary(id string, name string) *AppChannelSummary {
	this := AppChannelSummary{}
	this.Id = id
	this.Name = name
	return &this
}

// NewAppChannelSummaryWithDefaults instantiates a new AppChannelSummary object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewAppChannelSummaryWithDefaults() *AppChannelSummary {
	this := AppChannelSummary{}
	return &this
}

// GetId returns the Id field value
func (o *AppChannelSummary) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *AppChannelSummary) GetIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *AppChannelSummary) SetId(v string) {
	o.Id = v
}

// GetName returns the Name field value
func (o *AppChannelSummary) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *AppChannelSummary) GetNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *AppChannelSummary) SetName(v string) {
	o.Name = v
}

// GetActiveRevisionNumber returns the ActiveRevisionNumber field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *AppChannelSummary) GetActiveRevisionNumber() string {
	if o == nil || o.ActiveRevisionNumber.Get() == nil {
		var ret string
		return ret
	}
	return *o.ActiveRevisionNumber.Get()
}

// GetActiveRevisionNumberOk returns a tuple with the ActiveRevisionNumber field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *AppChannelSummary) GetActiveRevisionNumberOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.ActiveRevisionNumber.Get(), o.ActiveRevisionNumber.IsSet()
}

// HasActiveRevisionNumber returns a boolean if a field has been set.
func (o *AppChannelSummary) HasActiveRevisionNumber() bool {
	if o != nil && o.ActiveRevisionNumber.IsSet() {
		return true
	}

	return false
}

// SetActiveRevisionNumber gets a reference to the given NullableString and assigns it to the ActiveRevisionNumber field.
func (o *AppChannelSummary) SetActiveRevisionNumber(v string) {
	o.ActiveRevisionNumber.Set(&v)
}
// SetActiveRevisionNumberNil sets the value for ActiveRevisionNumber to be an explicit nil
func (o *AppChannelSummary) SetActiveRevisionNumberNil() {
	o.ActiveRevisionNumber.Set(nil)
}

// UnsetActiveRevisionNumber ensures that no value is present for ActiveRevisionNumber, not even an explicit nil
func (o *AppChannelSummary) UnsetActiveRevisionNumber() {
	o.ActiveRevisionNumber.Unset()
}

func (o AppChannelSummary) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["name"] = o.Name
	}
	if o.ActiveRevisionNumber.IsSet() {
		toSerialize["activeRevisionNumber"] = o.ActiveRevisionNumber.Get()
	}
	return json.Marshal(toSerialize)
}

type NullableAppChannelSummary struct {
	value *AppChannelSummary
	isSet bool
}

func (v NullableAppChannelSummary) Get() *AppChannelSummary {
	return v.value
}

func (v *NullableAppChannelSummary) Set(val *AppChannelSummary) {
	v.value = val
	v.isSet = true
}

func (v NullableAppChannelSummary) IsSet() bool {
	return v.isSet
}

func (v *NullableAppChannelSummary) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableAppChannelSummary(val *AppChannelSummary) *NullableAppChannelSummary {
	return &NullableAppChannelSummary{value: val, isSet: true}
}

func (v NullableAppChannelSummary) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableAppChannelSummary) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


