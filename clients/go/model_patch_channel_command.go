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

// PatchChannelCommand struct for PatchChannelCommand
type PatchChannelCommand struct {
	ChannelId *string `json:"channelId,omitempty"`
	EnvironmentVariables *UpdateEnvironmentVariableDtoListField `json:"environmentVariables,omitempty"`
	Name *StringField `json:"name,omitempty"`
	Domain *StringField `json:"domain,omitempty"`
	RevisionSelectionStrategy *ChannelRevisionSelectionStrategyField `json:"revisionSelectionStrategy,omitempty"`
	RangeRule *StringField `json:"rangeRule,omitempty"`
	ActiveRevisionId *GuidNullableField `json:"activeRevisionId,omitempty"`
	CertificateId *GuidNullableField `json:"certificateId,omitempty"`
}

// NewPatchChannelCommand instantiates a new PatchChannelCommand object
// This constructor will assign default values to properties that have it defined,
// and makes sure properties required by API are set, but the set of arguments
// will change when the set of required properties is changed
func NewPatchChannelCommand() *PatchChannelCommand {
	this := PatchChannelCommand{}
	return &this
}

// NewPatchChannelCommandWithDefaults instantiates a new PatchChannelCommand object
// This constructor will only assign default values to properties that have it defined,
// but it doesn't guarantee that properties required by API are set
func NewPatchChannelCommandWithDefaults() *PatchChannelCommand {
	this := PatchChannelCommand{}
	return &this
}

// GetChannelId returns the ChannelId field value if set, zero value otherwise.
func (o *PatchChannelCommand) GetChannelId() string {
	if o == nil || o.ChannelId == nil {
		var ret string
		return ret
	}
	return *o.ChannelId
}

// GetChannelIdOk returns a tuple with the ChannelId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchChannelCommand) GetChannelIdOk() (*string, bool) {
	if o == nil || o.ChannelId == nil {
		return nil, false
	}
	return o.ChannelId, true
}

// HasChannelId returns a boolean if a field has been set.
func (o *PatchChannelCommand) HasChannelId() bool {
	if o != nil && o.ChannelId != nil {
		return true
	}

	return false
}

// SetChannelId gets a reference to the given string and assigns it to the ChannelId field.
func (o *PatchChannelCommand) SetChannelId(v string) {
	o.ChannelId = &v
}

// GetEnvironmentVariables returns the EnvironmentVariables field value if set, zero value otherwise.
func (o *PatchChannelCommand) GetEnvironmentVariables() UpdateEnvironmentVariableDtoListField {
	if o == nil || o.EnvironmentVariables == nil {
		var ret UpdateEnvironmentVariableDtoListField
		return ret
	}
	return *o.EnvironmentVariables
}

// GetEnvironmentVariablesOk returns a tuple with the EnvironmentVariables field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchChannelCommand) GetEnvironmentVariablesOk() (*UpdateEnvironmentVariableDtoListField, bool) {
	if o == nil || o.EnvironmentVariables == nil {
		return nil, false
	}
	return o.EnvironmentVariables, true
}

// HasEnvironmentVariables returns a boolean if a field has been set.
func (o *PatchChannelCommand) HasEnvironmentVariables() bool {
	if o != nil && o.EnvironmentVariables != nil {
		return true
	}

	return false
}

// SetEnvironmentVariables gets a reference to the given UpdateEnvironmentVariableDtoListField and assigns it to the EnvironmentVariables field.
func (o *PatchChannelCommand) SetEnvironmentVariables(v UpdateEnvironmentVariableDtoListField) {
	o.EnvironmentVariables = &v
}

// GetName returns the Name field value if set, zero value otherwise.
func (o *PatchChannelCommand) GetName() StringField {
	if o == nil || o.Name == nil {
		var ret StringField
		return ret
	}
	return *o.Name
}

// GetNameOk returns a tuple with the Name field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchChannelCommand) GetNameOk() (*StringField, bool) {
	if o == nil || o.Name == nil {
		return nil, false
	}
	return o.Name, true
}

// HasName returns a boolean if a field has been set.
func (o *PatchChannelCommand) HasName() bool {
	if o != nil && o.Name != nil {
		return true
	}

	return false
}

// SetName gets a reference to the given StringField and assigns it to the Name field.
func (o *PatchChannelCommand) SetName(v StringField) {
	o.Name = &v
}

// GetDomain returns the Domain field value if set, zero value otherwise.
func (o *PatchChannelCommand) GetDomain() StringField {
	if o == nil || o.Domain == nil {
		var ret StringField
		return ret
	}
	return *o.Domain
}

// GetDomainOk returns a tuple with the Domain field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchChannelCommand) GetDomainOk() (*StringField, bool) {
	if o == nil || o.Domain == nil {
		return nil, false
	}
	return o.Domain, true
}

// HasDomain returns a boolean if a field has been set.
func (o *PatchChannelCommand) HasDomain() bool {
	if o != nil && o.Domain != nil {
		return true
	}

	return false
}

// SetDomain gets a reference to the given StringField and assigns it to the Domain field.
func (o *PatchChannelCommand) SetDomain(v StringField) {
	o.Domain = &v
}

// GetRevisionSelectionStrategy returns the RevisionSelectionStrategy field value if set, zero value otherwise.
func (o *PatchChannelCommand) GetRevisionSelectionStrategy() ChannelRevisionSelectionStrategyField {
	if o == nil || o.RevisionSelectionStrategy == nil {
		var ret ChannelRevisionSelectionStrategyField
		return ret
	}
	return *o.RevisionSelectionStrategy
}

// GetRevisionSelectionStrategyOk returns a tuple with the RevisionSelectionStrategy field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchChannelCommand) GetRevisionSelectionStrategyOk() (*ChannelRevisionSelectionStrategyField, bool) {
	if o == nil || o.RevisionSelectionStrategy == nil {
		return nil, false
	}
	return o.RevisionSelectionStrategy, true
}

// HasRevisionSelectionStrategy returns a boolean if a field has been set.
func (o *PatchChannelCommand) HasRevisionSelectionStrategy() bool {
	if o != nil && o.RevisionSelectionStrategy != nil {
		return true
	}

	return false
}

// SetRevisionSelectionStrategy gets a reference to the given ChannelRevisionSelectionStrategyField and assigns it to the RevisionSelectionStrategy field.
func (o *PatchChannelCommand) SetRevisionSelectionStrategy(v ChannelRevisionSelectionStrategyField) {
	o.RevisionSelectionStrategy = &v
}

// GetRangeRule returns the RangeRule field value if set, zero value otherwise.
func (o *PatchChannelCommand) GetRangeRule() StringField {
	if o == nil || o.RangeRule == nil {
		var ret StringField
		return ret
	}
	return *o.RangeRule
}

// GetRangeRuleOk returns a tuple with the RangeRule field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchChannelCommand) GetRangeRuleOk() (*StringField, bool) {
	if o == nil || o.RangeRule == nil {
		return nil, false
	}
	return o.RangeRule, true
}

// HasRangeRule returns a boolean if a field has been set.
func (o *PatchChannelCommand) HasRangeRule() bool {
	if o != nil && o.RangeRule != nil {
		return true
	}

	return false
}

// SetRangeRule gets a reference to the given StringField and assigns it to the RangeRule field.
func (o *PatchChannelCommand) SetRangeRule(v StringField) {
	o.RangeRule = &v
}

// GetActiveRevisionId returns the ActiveRevisionId field value if set, zero value otherwise.
func (o *PatchChannelCommand) GetActiveRevisionId() GuidNullableField {
	if o == nil || o.ActiveRevisionId == nil {
		var ret GuidNullableField
		return ret
	}
	return *o.ActiveRevisionId
}

// GetActiveRevisionIdOk returns a tuple with the ActiveRevisionId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchChannelCommand) GetActiveRevisionIdOk() (*GuidNullableField, bool) {
	if o == nil || o.ActiveRevisionId == nil {
		return nil, false
	}
	return o.ActiveRevisionId, true
}

// HasActiveRevisionId returns a boolean if a field has been set.
func (o *PatchChannelCommand) HasActiveRevisionId() bool {
	if o != nil && o.ActiveRevisionId != nil {
		return true
	}

	return false
}

// SetActiveRevisionId gets a reference to the given GuidNullableField and assigns it to the ActiveRevisionId field.
func (o *PatchChannelCommand) SetActiveRevisionId(v GuidNullableField) {
	o.ActiveRevisionId = &v
}

// GetCertificateId returns the CertificateId field value if set, zero value otherwise.
func (o *PatchChannelCommand) GetCertificateId() GuidNullableField {
	if o == nil || o.CertificateId == nil {
		var ret GuidNullableField
		return ret
	}
	return *o.CertificateId
}

// GetCertificateIdOk returns a tuple with the CertificateId field value if set, nil otherwise
// and a boolean to check if the value has been set.
func (o *PatchChannelCommand) GetCertificateIdOk() (*GuidNullableField, bool) {
	if o == nil || o.CertificateId == nil {
		return nil, false
	}
	return o.CertificateId, true
}

// HasCertificateId returns a boolean if a field has been set.
func (o *PatchChannelCommand) HasCertificateId() bool {
	if o != nil && o.CertificateId != nil {
		return true
	}

	return false
}

// SetCertificateId gets a reference to the given GuidNullableField and assigns it to the CertificateId field.
func (o *PatchChannelCommand) SetCertificateId(v GuidNullableField) {
	o.CertificateId = &v
}

func (o PatchChannelCommand) MarshalJSON() ([]byte, error) {
	toSerialize := map[string]interface{}{}
	if o.ChannelId != nil {
		toSerialize["channelId"] = o.ChannelId
	}
	if o.EnvironmentVariables != nil {
		toSerialize["environmentVariables"] = o.EnvironmentVariables
	}
	if o.Name != nil {
		toSerialize["name"] = o.Name
	}
	if o.Domain != nil {
		toSerialize["domain"] = o.Domain
	}
	if o.RevisionSelectionStrategy != nil {
		toSerialize["revisionSelectionStrategy"] = o.RevisionSelectionStrategy
	}
	if o.RangeRule != nil {
		toSerialize["rangeRule"] = o.RangeRule
	}
	if o.ActiveRevisionId != nil {
		toSerialize["activeRevisionId"] = o.ActiveRevisionId
	}
	if o.CertificateId != nil {
		toSerialize["certificateId"] = o.CertificateId
	}
	return json.Marshal(toSerialize)
}

type NullablePatchChannelCommand struct {
	value *PatchChannelCommand
	isSet bool
}

func (v NullablePatchChannelCommand) Get() *PatchChannelCommand {
	return v.value
}

func (v *NullablePatchChannelCommand) Set(val *PatchChannelCommand) {
	v.value = val
	v.isSet = true
}

func (v NullablePatchChannelCommand) IsSet() bool {
	return v.isSet
}

func (v *NullablePatchChannelCommand) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullablePatchChannelCommand(val *PatchChannelCommand) *NullablePatchChannelCommand {
	return &NullablePatchChannelCommand{value: val, isSet: true}
}

func (v NullablePatchChannelCommand) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullablePatchChannelCommand) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}


