/*
 * Hippo.Web
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 * Generated by: https://openapi-generator.tech
 */




#[derive(Clone, Debug, PartialEq, Default, Serialize, Deserialize)]
pub struct CreateChannelCommand {
    #[serde(rename = "appId")]
    pub app_id: uuid::Uuid,
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "domain", skip_serializing_if = "Option::is_none")]
    pub domain: Option<String>,
    #[serde(rename = "revisionSelectionStrategy")]
    pub revision_selection_strategy: crate::models::ChannelRevisionSelectionStrategy,
    #[serde(rename = "rangeRule", skip_serializing_if = "Option::is_none")]
    pub range_rule: Option<String>,
    #[serde(rename = "activeRevisionId", skip_serializing_if = "Option::is_none")]
    pub active_revision_id: Option<uuid::Uuid>,
    #[serde(rename = "certificateId", skip_serializing_if = "Option::is_none")]
    pub certificate_id: Option<uuid::Uuid>,
}

impl CreateChannelCommand {
    pub fn new(app_id: uuid::Uuid, name: String, revision_selection_strategy: crate::models::ChannelRevisionSelectionStrategy) -> CreateChannelCommand {
        CreateChannelCommand {
            app_id,
            name,
            domain: None,
            revision_selection_strategy,
            range_rule: None,
            active_revision_id: None,
            certificate_id: None,
        }
    }
}


