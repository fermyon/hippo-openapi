# ChannelItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | [**uuid::Uuid**](uuid::Uuid.md) |  | 
**app_id** | [**uuid::Uuid**](uuid::Uuid.md) |  | 
**name** | **String** |  | 
**domain** | **String** |  | 
**revision_selection_strategy** | [**crate::models::ChannelRevisionSelectionStrategy**](ChannelRevisionSelectionStrategy.md) |  | 
**active_revision** | Option<[**crate::models::RevisionItem**](RevisionItem.md)> |  | [optional]
**last_publish_at** | Option<**String**> |  | [optional]
**range_rule** | Option<**String**> |  | [optional]
**certificate** | Option<[**crate::models::CertificateItem**](CertificateItem.md)> |  | [optional]
**environment_variables** | [**Vec<crate::models::EnvironmentVariableItem>**](EnvironmentVariableItem.md) |  | 
**app_summary** | Option<[**crate::models::AppSummaryDto**](AppSummaryDto.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


