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
pub struct CreateEnvironmentVariableCommand {
    #[serde(rename = "key")]
    pub key: String,
    #[serde(rename = "value")]
    pub value: String,
    #[serde(rename = "channelId")]
    pub channel_id: String,
}

impl CreateEnvironmentVariableCommand {
    pub fn new(key: String, value: String, channel_id: String) -> CreateEnvironmentVariableCommand {
        CreateEnvironmentVariableCommand {
            key,
            value,
            channel_id,
        }
    }
}


