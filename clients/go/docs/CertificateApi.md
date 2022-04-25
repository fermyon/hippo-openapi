# \CertificateApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiCertificateExportGet**](CertificateApi.md#ApiCertificateExportGet) | **Get** /api/certificate/export | 
[**ApiCertificateGet**](CertificateApi.md#ApiCertificateGet) | **Get** /api/certificate | 
[**ApiCertificateIdDelete**](CertificateApi.md#ApiCertificateIdDelete) | **Delete** /api/certificate/{id} | 
[**ApiCertificateIdPut**](CertificateApi.md#ApiCertificateIdPut) | **Put** /api/certificate/{id} | 
[**ApiCertificatePost**](CertificateApi.md#ApiCertificatePost) | **Post** /api/certificate | 



## ApiCertificateExportGet

> ApiCertificateExportGet(ctx).Execute()



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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificateApi.ApiCertificateExportGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CertificateApi.ApiCertificateExportGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiApiCertificateExportGetRequest struct via the builder pattern


### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiCertificateGet

> CertificatesVm ApiCertificateGet(ctx).Execute()



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

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificateApi.ApiCertificateGet(context.Background()).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CertificateApi.ApiCertificateGet``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiCertificateGet`: CertificatesVm
    fmt.Fprintf(os.Stdout, "Response from `CertificateApi.ApiCertificateGet`: %v\n", resp)
}
```

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiApiCertificateGetRequest struct via the builder pattern


### Return type

[**CertificatesVm**](CertificatesVm.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiCertificateIdDelete

> ApiCertificateIdDelete(ctx, id).Execute()



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
    id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificateApi.ApiCertificateIdDelete(context.Background(), id).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CertificateApi.ApiCertificateIdDelete``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiCertificateIdDeleteRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiCertificateIdPut

> ApiCertificateIdPut(ctx, id).UpdateCertificateCommand(updateCertificateCommand).Execute()



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
    id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
    updateCertificateCommand := *openapiclient.NewUpdateCertificateCommand("Id_example", "Name_example", "PublicKey_example", "PrivateKey_example") // UpdateCertificateCommand |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificateApi.ApiCertificateIdPut(context.Background(), id).UpdateCertificateCommand(updateCertificateCommand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CertificateApi.ApiCertificateIdPut``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiCertificateIdPutRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateCertificateCommand** | [**UpdateCertificateCommand**](UpdateCertificateCommand.md) |  | 

### Return type

 (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

- **Content-Type**: application/json, text/json, application/_*+json
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiCertificatePost

> string ApiCertificatePost(ctx).CreateCertificateCommand(createCertificateCommand).Execute()



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
    createCertificateCommand := *openapiclient.NewCreateCertificateCommand("Name_example", "PublicKey_example", "PrivateKey_example") // CreateCertificateCommand |  (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificateApi.ApiCertificatePost(context.Background()).CreateCertificateCommand(createCertificateCommand).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CertificateApi.ApiCertificatePost``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApiCertificatePost`: string
    fmt.Fprintf(os.Stdout, "Response from `CertificateApi.ApiCertificatePost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiCertificatePostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createCertificateCommand** | [**CreateCertificateCommand**](CreateCertificateCommand.md) |  | 

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

