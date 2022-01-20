# \AccountApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiAccountCreatetokenPost**](AccountApi.md#ApiAccountCreatetokenPost) | **Post** /api/account/createtoken | 
[**ApiAccountPost**](AccountApi.md#ApiAccountPost) | **Post** /api/account | 



## ApiAccountCreatetokenPost

> TokenInfo ApiAccountCreatetokenPost(ctx).CreateTokenCommand(createTokenCommand).Execute()



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
    createTokenCommand := *openapiclient.NewCreateTokenCommand() // CreateTokenCommand |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AccountApi.ApiAccountCreatetokenPost(context.Background()).CreateTokenCommand(createTokenCommand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.ApiAccountCreatetokenPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiAccountCreatetokenPost`: TokenInfo
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.ApiAccountCreatetokenPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiAccountCreatetokenPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTokenCommand** | [**CreateTokenCommand**](CreateTokenCommand.md) |  | 

### Return type

[**TokenInfo**](TokenInfo.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiAccountPost

> string ApiAccountPost(ctx).CreateAccountCommand(createAccountCommand).Execute()



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
    createAccountCommand := *openapiclient.NewCreateAccountCommand() // CreateAccountCommand |  (optional)

    configuration := openapiclient.NewConfiguration()
    api_client := openapiclient.NewAPIClient(configuration)
    resp, r, err := api_client.AccountApi.ApiAccountPost(context.Background()).CreateAccountCommand(createAccountCommand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AccountApi.ApiAccountPost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiAccountPost`: string
    fmt.Fprintf(os.Stdout, "Response from `AccountApi.ApiAccountPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiAccountPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAccountCommand** | [**CreateAccountCommand**](CreateAccountCommand.md) |  | 

### Return type

**string**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

