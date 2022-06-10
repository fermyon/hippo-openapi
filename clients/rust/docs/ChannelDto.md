# ChannelDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**app_id** | **String** |  | 
**name** | **String** |  | 
**domain** | **String** |  | 
**revision_selection_strategy** | [**crate::models::ChannelRevisionSelectionStrategy**](ChannelRevisionSelectionStrategy.md) |  | 
**active_revision** | Option<[**crate::models::RevisionDto**](RevisionDto.md)> |  | [optional]
**range_rule** | Option<**String**> |  | [optional]
**certificate** | Option<[**crate::models::CertificateDto**](CertificateDto.md)> |  | [optional]
**environment_variables** | [**Vec<crate::models::EnvironmentVariableDto>**](EnvironmentVariableDto.md) |  | 
**app_summary** | Option<[**crate::models::AppSummaryDto**](AppSummaryDto.md)> |  | [optional]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


