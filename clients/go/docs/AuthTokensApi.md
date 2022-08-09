# \AuthTokensApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiAuthTokensPost**](AuthTokensApi.md#ApiAuthTokensPost) | **Post** /api/auth-tokens | 



## ApiAuthTokensPost

> TokenInfo ApiAuthTokensPost(ctx).CreateTokenCommand(createTokenCommand).Execute()



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "./openapi"
)

func main() {
    createTokenCommand := *openapiclient.NewCreateTokenCommand("UserName_example", "Password_example") // CreateTokenCommand |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AuthTokensApi.ApiAuthTokensPost(context.Background()).CreateTokenCommand(createTokenCommand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthTokensApi.ApiAuthTokensPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiAuthTokensPost`: TokenInfo
    fmt.Fprintf(os.Stdout, "Response from `AuthTokensApi.ApiAuthTokensPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiAuthTokensPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTokenCommand** | [**CreateTokenCommand**](CreateTokenCommand.md) |  | 

### Return type

[**TokenInfo**](TokenInfo.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json, text/json, application/*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

