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
pub struct AppChannelListItem {
    #[serde(rename = "id")]
    pub id: uuid::Uuid,
    #[serde(rename = "name")]
    pub name: String,
    #[serde(rename = "activeRevisionNumber", skip_serializing_if = "Option::is_none")]
    pub active_revision_number: Option<String>,
}

impl AppChannelListItem {
    pub fn new(id: uuid::Uuid, name: String) -> AppChannelListItem {
        AppChannelListItem {
            id,
            name,
            active_revision_number: None,
        }
    }
}


