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
pub struct UpdateEnvironmentVariableCommand {
    #[serde(rename = "id")]
    pub id: String,
    #[serde(rename = "key")]
    pub key: String,
    #[serde(rename = "value")]
    pub value: String,
}

impl UpdateEnvironmentVariableCommand {
    pub fn new(id: String, key: String, value: String) -> UpdateEnvironmentVariableCommand {
        UpdateEnvironmentVariableCommand {
            id,
            key,
            value,
        }
    }
}

