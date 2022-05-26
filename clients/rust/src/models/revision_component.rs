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
pub struct RevisionComponent {
    #[serde(rename = "created", skip_serializing_if = "Option::is_none")]
    pub created: Option<String>,
    #[serde(rename = "createdBy", skip_serializing_if = "Option::is_none")]
    pub created_by: Option<String>,
    #[serde(rename = "lastModified", skip_serializing_if = "Option::is_none")]
    pub last_modified: Option<String>,
    #[serde(rename = "lastModifiedBy", skip_serializing_if = "Option::is_none")]
    pub last_modified_by: Option<String>,
    #[serde(rename = "id", skip_serializing_if = "Option::is_none")]
    pub id: Option<String>,
    #[serde(rename = "source", skip_serializing_if = "Option::is_none")]
    pub source: Option<String>,
    #[serde(rename = "name", skip_serializing_if = "Option::is_none")]
    pub name: Option<String>,
    #[serde(rename = "route", skip_serializing_if = "Option::is_none")]
    pub route: Option<String>,
    #[serde(rename = "revisionId", skip_serializing_if = "Option::is_none")]
    pub revision_id: Option<String>,
    #[serde(rename = "revision", skip_serializing_if = "Option::is_none")]
    pub revision: Option<Box<crate::models::Revision>>,
    #[serde(rename = "domainEvents", skip_serializing_if = "Option::is_none")]
    pub domain_events: Option<Vec<crate::models::DomainEvent>>,
}

impl RevisionComponent {
    pub fn new() -> RevisionComponent {
        RevisionComponent {
            created: None,
            created_by: None,
            last_modified: None,
            last_modified_by: None,
            id: None,
            source: None,
            name: None,
            route: None,
            revision_id: None,
            revision: None,
            domain_events: None,
        }
    }
}

