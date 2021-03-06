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
pub struct RevisionDto {
    #[serde(rename = "id")]
    pub id: String,
    #[serde(rename = "appId")]
    pub app_id: String,
    #[serde(rename = "revisionNumber")]
    pub revision_number: String,
    #[serde(rename = "components")]
    pub components: Vec<crate::models::RevisionComponentDto>,
}

impl RevisionDto {
    pub fn new(id: String, app_id: String, revision_number: String, components: Vec<crate::models::RevisionComponentDto>) -> RevisionDto {
        RevisionDto {
            id,
            app_id,
            revision_number,
            components,
        }
    }
}


