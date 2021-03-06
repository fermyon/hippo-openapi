/*
Hippo.Web

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

API version: 1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package hippo-openapi

import (
	"encoding/json"
	"time"
)

// EnvironmentVariable struct for EnvironmentVariable
type EnvironmentVariable struct {
	Created *time.Time `json:"created,omitempty"`
	CreatedBy NullableString `json:"createdBy,omitempty"`
	LastModified *time.Time `json:"lastModified,omitempty"`
	LastModifiedBy NullableString `json:"lastModifiedBy,omitempty"`
	Id *string `json:"id,omitempty"`
	Key NullableString `json:"key,omitempty"`
	Value NullableString `json:"value,omitempty"`
	ChannelId *string `json:"channelId,omitempty"`
	Channel *Channel `json:"channel,omitempty"`
	DomainEvents []DomainEvent `json:"domainEvents,omitempty"`
}

// NewEnvironmentVariable instantiates a new EnvironmentVariable object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewEnvironmentVariable() *EnvironmentVariable {
	this := EnvironmentVariable{}
	return &this
}

// NewEnvironmentVariableWithDefaults instantiates a new EnvironmentVariable object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewEnvironmentVariableWithDefaults() *EnvironmentVariable {
	this := EnvironmentVariable{}
	return &this
}

// GetCreated returns the Created field value if set, zero value otherwise.
func (o *EnvironmentVariable) GetCreated() time.Time {
	if o == nil || o.Created == nil {
		var ret time.Time
		return ret
	}
	return *o.Created
}

// GetCreatedOk returns a tuple with the Created field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnvironmentVariable) GetCreatedOk() (*time.Time, bool) {
	if o == nil || o.Created == nil {
		return nil, false
	}
	return o.Created, true
}

// HasCreated returns a boolean if a field has been set.
func (o *EnvironmentVariable) HasCreated() bool {
	if o != nil && o.Created != nil {
		return true
	}

	return false
}

// SetCreated gets a reference to the given time.Time and assigns it to the Created field.
func (o *EnvironmentVariable) SetCreated(v time.Time) {
	o.Created = &v
}

// GetCreatedBy returns the CreatedBy field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *EnvironmentVariable) GetCreatedBy() string {
	if o == nil || o.CreatedBy.Get() == nil {
		var ret string
		return ret
	}
	return *o.CreatedBy.Get()
}

// GetCreatedByOk returns a tuple with the CreatedBy field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *EnvironmentVariable) GetCreatedByOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.CreatedBy.Get(), o.CreatedBy.IsSet()
}

// HasCreatedBy returns a boolean if a field has been set.
func (o *EnvironmentVariable) HasCreatedBy() bool {
	if o != nil && o.CreatedBy.IsSet() {
		return true
	}

	return false
}

// SetCreatedBy gets a reference to the given NullableString and assigns it to the CreatedBy field.
func (o *EnvironmentVariable) SetCreatedBy(v string) {
	o.CreatedBy.Set(&v)
}
// SetCreatedByNil sets the value for CreatedBy to be an explicit nil
func (o *EnvironmentVariable) SetCreatedByNil() {
	o.CreatedBy.Set(nil)
}

// UnsetCreatedBy ensures that no value is present for CreatedBy, not even an explicit nil
func (o *EnvironmentVariable) UnsetCreatedBy() {
	o.CreatedBy.Unset()
}

// GetLastModified returns the LastModified field value if set, zero value otherwise.
func (o *EnvironmentVariable) GetLastModified() time.Time {
	if o == nil || o.LastModified == nil {
		var ret time.Time
		return ret
	}
	return *o.LastModified
}

// GetLastModifiedOk returns a tuple with the LastModified field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnvironmentVariable) GetLastModifiedOk() (*time.Time, bool) {
	if o == nil || o.LastModified == nil {
		return nil, false
	}
	return o.LastModified, true
}

// HasLastModified returns a boolean if a field has been set.
func (o *EnvironmentVariable) HasLastModified() bool {
	if o != nil && o.LastModified != nil {
		return true
	}

	return false
}

// SetLastModified gets a reference to the given time.Time and assigns it to the LastModified field.
func (o *EnvironmentVariable) SetLastModified(v time.Time) {
	o.LastModified = &v
}

// GetLastModifiedBy returns the LastModifiedBy field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *EnvironmentVariable) GetLastModifiedBy() string {
	if o == nil || o.LastModifiedBy.Get() == nil {
		var ret string
		return ret
	}
	return *o.LastModifiedBy.Get()
}

// GetLastModifiedByOk returns a tuple with the LastModifiedBy field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *EnvironmentVariable) GetLastModifiedByOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.LastModifiedBy.Get(), o.LastModifiedBy.IsSet()
}

// HasLastModifiedBy returns a boolean if a field has been set.
func (o *EnvironmentVariable) HasLastModifiedBy() bool {
	if o != nil && o.LastModifiedBy.IsSet() {
		return true
	}

	return false
}

// SetLastModifiedBy gets a reference to the given NullableString and assigns it to the LastModifiedBy field.
func (o *EnvironmentVariable) SetLastModifiedBy(v string) {
	o.LastModifiedBy.Set(&v)
}
// SetLastModifiedByNil sets the value for LastModifiedBy to be an explicit nil
func (o *EnvironmentVariable) SetLastModifiedByNil() {
	o.LastModifiedBy.Set(nil)
}

// UnsetLastModifiedBy ensures that no value is present for LastModifiedBy, not even an explicit nil
func (o *EnvironmentVariable) UnsetLastModifiedBy() {
	o.LastModifiedBy.Unset()
}

// GetId returns the Id field value if set, zero value otherwise.
func (o *EnvironmentVariable) GetId() string {
	if o == nil || o.Id == nil {
		var ret string
		return ret
	}
	return *o.Id
}

// GetIdOk returns a tuple with the Id field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnvironmentVariable) GetIdOk() (*string, bool) {
	if o == nil || o.Id == nil {
		return nil, false
	}
	return o.Id, true
}

// HasId returns a boolean if a field has been set.
func (o *EnvironmentVariable) HasId() bool {
	if o != nil && o.Id != nil {
		return true
	}

	return false
}

// SetId gets a reference to the given string and assigns it to the Id field.
func (o *EnvironmentVariable) SetId(v string) {
	o.Id = &v
}

// GetKey returns the Key field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *EnvironmentVariable) GetKey() string {
	if o == nil || o.Key.Get() == nil {
		var ret string
		return ret
	}
	return *o.Key.Get()
}

// GetKeyOk returns a tuple with the Key field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *EnvironmentVariable) GetKeyOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.Key.Get(), o.Key.IsSet()
}

// HasKey returns a boolean if a field has been set.
func (o *EnvironmentVariable) HasKey() bool {
	if o != nil && o.Key.IsSet() {
		return true
	}

	return false
}

// SetKey gets a reference to the given NullableString and assigns it to the Key field.
func (o *EnvironmentVariable) SetKey(v string) {
	o.Key.Set(&v)
}
// SetKeyNil sets the value for Key to be an explicit nil
func (o *EnvironmentVariable) SetKeyNil() {
	o.Key.Set(nil)
}

// UnsetKey ensures that no value is present for Key, not even an explicit nil
func (o *EnvironmentVariable) UnsetKey() {
	o.Key.Unset()
}

// GetValue returns the Value field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *EnvironmentVariable) GetValue() string {
	if o == nil || o.Value.Get() == nil {
		var ret string
		return ret
	}
	return *o.Value.Get()
}

// GetValueOk returns a tuple with the Value field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *EnvironmentVariable) GetValueOk() (*string, bool) {
	if o == nil {
		return nil, false
	}
	return o.Value.Get(), o.Value.IsSet()
}

// HasValue returns a boolean if a field has been set.
func (o *EnvironmentVariable) HasValue() bool {
	if o != nil && o.Value.IsSet() {
		return true
	}

	return false
}

// SetValue gets a reference to the given NullableString and assigns it to the Value field.
func (o *EnvironmentVariable) SetValue(v string) {
	o.Value.Set(&v)
}
// SetValueNil sets the value for Value to be an explicit nil
func (o *EnvironmentVariable) SetValueNil() {
	o.Value.Set(nil)
}

// UnsetValue ensures that no value is present for Value, not even an explicit nil
func (o *EnvironmentVariable) UnsetValue() {
	o.Value.Unset()
}

// GetChannelId returns the ChannelId field value if set, zero value otherwise.
func (o *EnvironmentVariable) GetChannelId() string {
	if o == nil || o.ChannelId == nil {
		var ret string
		return ret
	}
	return *o.ChannelId
}

// GetChannelIdOk returns a tuple with the ChannelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnvironmentVariable) GetChannelIdOk() (*string, bool) {
	if o == nil || o.ChannelId == nil {
		return nil, false
	}
	return o.ChannelId, true
}

// HasChannelId returns a boolean if a field has been set.
func (o *EnvironmentVariable) HasChannelId() bool {
	if o != nil && o.ChannelId != nil {
		return true
	}

	return false
}

// SetChannelId gets a reference to the given string and assigns it to the ChannelId field.
func (o *EnvironmentVariable) SetChannelId(v string) {
	o.ChannelId = &v
}

// GetChannel returns the Channel field value if set, zero value otherwise.
func (o *EnvironmentVariable) GetChannel() Channel {
	if o == nil || o.Channel == nil {
		var ret Channel
		return ret
	}
	return *o.Channel
}

// GetChannelOk returns a tuple with the Channel field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *EnvironmentVariable) GetChannelOk() (*Channel, bool) {
	if o == nil || o.Channel == nil {
		return nil, false
	}
	return o.Channel, true
}

// HasChannel returns a boolean if a field has been set.
func (o *EnvironmentVariable) HasChannel() bool {
	if o != nil && o.Channel != nil {
		return true
	}

	return false
}

// SetChannel gets a reference to the given Channel and assigns it to the Channel field.
func (o *EnvironmentVariable) SetChannel(v Channel) {
	o.Channel = &v
}

// GetDomainEvents returns the DomainEvents field value if set, zero value otherwise (both if not set or set to explicit null).
func (o *EnvironmentVariable) GetDomainEvents() []DomainEvent {
	if o == nil {
		var ret []DomainEvent
		return ret
	}
	return o.DomainEvents
}

// GetDomainEventsOk returns a tuple with the DomainEvents field value if set, nil otherwise
// and a boolean to check if the value has been set.
// NOTE: If the value is an explicit nil, `nil, true` will be returned
func (o *EnvironmentVariable) GetDomainEventsOk() ([]DomainEvent, bool) {
	if o == nil || o.DomainEvents == nil {
		return nil, false
	}
	return o.DomainEvents, true
}

// HasDomainEvents returns a boolean if a field has been set.
func (o *EnvironmentVariable) HasDomainEvents() bool {
	if o != nil && o.DomainEvents != nil {
		return true
	}

	return false
}

// SetDomainEvents gets a reference to the given []DomainEvent and assigns it to the DomainEvents field.
func (o *EnvironmentVariable) SetDomainEvents(v []DomainEvent) {
	o.DomainEvents = v
}

func (o EnvironmentVariable) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.Created != nil {
		toSerialize["created"] = o.Created
	}
	if o.CreatedBy.IsSet() {
		toSerialize["createdBy"] = o.CreatedBy.Get()
	}
	if o.LastModified != nil {
		toSerialize["lastModified"] = o.LastModified
	}
	if o.LastModifiedBy.IsSet() {
		toSerialize["lastModifiedBy"] = o.LastModifiedBy.Get()
	}
	if o.Id != nil {
		toSerialize["id"] = o.Id
	}
	if o.Key.IsSet() {
		toSerialize["key"] = o.Key.Get()
	}
	if o.Value.IsSet() {
		toSerialize["value"] = o.Value.Get()
	}
	if o.ChannelId != nil {
		toSerialize["channelId"] = o.ChannelId
	}
	if o.Channel != nil {
		toSerialize["channel"] = o.Channel
	}
	if o.DomainEvents != nil {
		toSerialize["domainEvents"] = o.DomainEvents
	}
	return json.Marshal(toSerialize)
}

type NullableEnvironmentVariable struct {
	value *EnvironmentVariable
	isSet bool
}

func (v NullableEnvironmentVariable) Get() *EnvironmentVariable {
	return v.value
}

func (v *NullableEnvironmentVariable) Set(val *EnvironmentVariable) {
	v.value = val
	v.isSet = true
}

func (v NullableEnvironmentVariable) IsSet() bool {
	return v.isSet
}

func (v *NullableEnvironmentVariable) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableEnvironmentVariable(val *EnvironmentVariable) *NullableEnvironmentVariable {
	return &NullableEnvironmentVariable{value: val, isSet: true}
}

func (v NullableEnvironmentVariable) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableEnvironmentVariable) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


