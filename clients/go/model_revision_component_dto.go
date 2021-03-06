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

// RevisionComponentDto struct for RevisionComponentDto
type RevisionComponentDto struct {
	Id string `json:"id"`
	Source string `json:"source"`
	Name string `json:"name"`
	Route NullableString `json:"route,omitempty"`
	Channel NullableString `json:"channel,omitempty"`
	Type NullableString `json:"type,omitempty"`
}

// NewRevisionComponentDto instantiates a new RevisionComponentDto object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewRevisionComponentDto(id string, source string, name string) *RevisionComponentDto {
	this := RevisionComponentDto{}
	this.Id = id
	this.Source = source
	this.Name = name
	return &this
}

// NewRevisionComponentDtoWithDefaults instantiates a new RevisionComponentDto object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewRevisionComponentDtoWithDefaults() *RevisionComponentDto {
	this := RevisionComponentDto{}
	return &this
}

// GetId returns the Id field value
func (o *RevisionComponentDto) GetId() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Id
}

// GetIdOk returns a tuple with the Id field value
// and a boolean to check if the value has been set.
func (o *RevisionComponentDto) GetIdOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Id, true
}

// SetId sets field value
func (o *RevisionComponentDto) SetId(v string) {
	o.Id = v
}

// GetSource returns the Source field value
func (o *RevisionComponentDto) GetSource() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Source
}

// GetSourceOk returns a tuple with the Source field value
// and a boolean to check if the value has been set.
func (o *RevisionComponentDto) GetSourceOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Source, true
}

// SetSource sets field value
func (o *RevisionComponentDto) SetSource(v string) {
	o.Source = v
}

// GetName returns the Name field value
func (o *RevisionComponentDto) GetName() string {
	if o == nil {
		var ret string
		return ret
	}

	return o.Name
}

// GetNameOk returns a tuple with the Name field value
// and a boolean to check if the value has been set.
func (o *RevisionComponentDto) GetNameOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return &o.Name, true
}

// SetName sets field value
func (o *RevisionComponentDto) SetName(v string) {
	o.Name = v
}

// GetRoute returns the Route field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *RevisionComponentDto) GetRoute() string {
	if o == nil || o.Route.Get() == nil {
		var ret string
		return ret
	}
	return *o.Route.Get()
}

// GetRouteOk returns a tuple with the Route field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *RevisionComponentDto) GetRouteOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.Route.Get(), o.Route.IsSet()
}

// HasRoute returns a boolean if a field has been set.
func (o *RevisionComponentDto) HasRoute() bool {
	if o != nil && o.Route.IsSet() {
		return true
	}

	return false
}

// SetRoute gets a reference to the given NullableString and assigns it to the Route field.
func (o *RevisionComponentDto) SetRoute(v string) {
	o.Route.Set(&v)
}
// SetRouteNil sets the value for Route to be an explicit nil
func (o *RevisionComponentDto) SetRouteNil() {
	o.Route.Set(nil)
}

// UnsetRoute ensures that no value is present for Route, not even an explicit nil
func (o *RevisionComponentDto) UnsetRoute() {
	o.Route.Unset()
}

// GetChannel returns the Channel field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *RevisionComponentDto) GetChannel() string {
	if o == nil || o.Channel.Get() == nil {
		var ret string
		return ret
	}
	return *o.Channel.Get()
}

// GetChannelOk returns a tuple with the Channel field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *RevisionComponentDto) GetChannelOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.Channel.Get(), o.Channel.IsSet()
}

// HasChannel returns a boolean if a field has been set.
func (o *RevisionComponentDto) HasChannel() bool {
	if o != nil && o.Channel.IsSet() {
		return true
	}

	return false
}

// SetChannel gets a reference to the given NullableString and assigns it to the Channel field.
func (o *RevisionComponentDto) SetChannel(v string) {
	o.Channel.Set(&v)
}
// SetChannelNil sets the value for Channel to be an explicit nil
func (o *RevisionComponentDto) SetChannelNil() {
	o.Channel.Set(nil)
}

// UnsetChannel ensures that no value is present for Channel, not even an explicit nil
func (o *RevisionComponentDto) UnsetChannel() {
	o.Channel.Unset()
}

// GetType returns the Type field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *RevisionComponentDto) GetType() string {
	if o == nil || o.Type.Get() == nil {
		var ret string
		return ret
	}
	return *o.Type.Get()
}

// GetTypeOk returns a tuple with the Type field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *RevisionComponentDto) GetTypeOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.Type.Get(), o.Type.IsSet()
}

// HasType returns a boolean if a field has been set.
func (o *RevisionComponentDto) HasType() bool {
	if o != nil && o.Type.IsSet() {
		return true
	}

	return false
}

// SetType gets a reference to the given NullableString and assigns it to the Type field.
func (o *RevisionComponentDto) SetType(v string) {
	o.Type.Set(&v)
}
// SetTypeNil sets the value for Type to be an explicit nil
func (o *RevisionComponentDto) SetTypeNil() {
	o.Type.Set(nil)
}

// UnsetType ensures that no value is present for Type, not even an explicit nil
func (o *RevisionComponentDto) UnsetType() {
	o.Type.Unset()
}

func (o RevisionComponentDto) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if true {
		toSerialize["id"] = o.Id
	}
	if true {
		toSerialize["source"] = o.Source
	}
	if true {
		toSerialize["name"] = o.Name
	}
	if o.Route.IsSet() {
		toSerialize["route"] = o.Route.Get()
	}
	if o.Channel.IsSet() {
		toSerialize["channel"] = o.Channel.Get()
	}
	if o.Type.IsSet() {
		toSerialize["type"] = o.Type.Get()
	}
	return json.Marshal(toSerialize)
}

type NullableRevisionComponentDto struct {
	value *RevisionComponentDto
	isSet bool
}

func (v NullableRevisionComponentDto) Get() *RevisionComponentDto {
	return v.value
}

func (v *NullableRevisionComponentDto) Set(val *RevisionComponentDto) {
	v.value = val
	v.isSet = true
}

func (v NullableRevisionComponentDto) IsSet() bool {
	return v.isSet
}

func (v *NullableRevisionComponentDto) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableRevisionComponentDto(val *RevisionComponentDto) *NullableRevisionComponentDto {
	return &NullableRevisionComponentDto{value: val, isSet: true}
}

func (v NullableRevisionComponentDto) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableRevisionComponentDto) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


