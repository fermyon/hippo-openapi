# ChannelDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** |  | 
**app_id** | **String** |  | 
**name** | **String** |  | 
**domain** | **String** |  | 
**revision_selection_strategy** | [**crate::models::ChannelRevisionSelectionStrategy**](ChannelRevisionSelectionStrategy.md) |  | 
**active_revision** | Option<[**crate::models::Revision**](Revision.md)> |  | [optional]
**range_rule** | Option<**String**> |  | [optional]
**certificate** | Option<[**crate::models::Certificate**](Certificate.md)> |  | [optional]
**environment_variables** | [**Vec<crate::models::EnvironmentVariableDto>**](EnvironmentVariableDto.md) |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


