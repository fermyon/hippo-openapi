# hippo_web

HippoWeb - JavaScript client for hippo_web
No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0
- Package version: 1.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install hippo_web --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your hippo_web from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/fermyon/hippo-openapi
then install it via:

```shell
    npm install fermyon/hippo-openapi --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var HippoWeb = require('hippo_web');

var defaultClient = HippoWeb.ApiClient.instance;
// Configure API key authorization: Bearer
var Bearer = defaultClient.authentications['Bearer'];
Bearer.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Bearer.apiKeyPrefix['Authorization'] = "Token"

var api = new HippoWeb.AccountApi()
var opts = {
  'createTokenCommand': new HippoWeb.CreateTokenCommand() // {CreateTokenCommand} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.apiAccountCreatetokenPost(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HippoWeb.AccountApi* | [**apiAccountCreatetokenPost**](docs/AccountApi.md#apiAccountCreatetokenPost) | **POST** /api/account/createtoken | 
*HippoWeb.AccountApi* | [**apiAccountPost**](docs/AccountApi.md#apiAccountPost) | **POST** /api/account | 
*HippoWeb.AppApi* | [**apiAppExportGet**](docs/AppApi.md#apiAppExportGet) | **GET** /api/app/export | 
*HippoWeb.AppApi* | [**apiAppGet**](docs/AppApi.md#apiAppGet) | **GET** /api/app | 
*HippoWeb.AppApi* | [**apiAppIdDelete**](docs/AppApi.md#apiAppIdDelete) | **DELETE** /api/app/{id} | 
*HippoWeb.AppApi* | [**apiAppIdPut**](docs/AppApi.md#apiAppIdPut) | **PUT** /api/app/{id} | 
*HippoWeb.AppApi* | [**apiAppPost**](docs/AppApi.md#apiAppPost) | **POST** /api/app | 
*HippoWeb.CertificateApi* | [**apiCertificateExportGet**](docs/CertificateApi.md#apiCertificateExportGet) | **GET** /api/certificate/export | 
*HippoWeb.CertificateApi* | [**apiCertificateGet**](docs/CertificateApi.md#apiCertificateGet) | **GET** /api/certificate | 
*HippoWeb.CertificateApi* | [**apiCertificateIdDelete**](docs/CertificateApi.md#apiCertificateIdDelete) | **DELETE** /api/certificate/{id} | 
*HippoWeb.CertificateApi* | [**apiCertificateIdPut**](docs/CertificateApi.md#apiCertificateIdPut) | **PUT** /api/certificate/{id} | 
*HippoWeb.CertificateApi* | [**apiCertificatePost**](docs/CertificateApi.md#apiCertificatePost) | **POST** /api/certificate | 
*HippoWeb.ChannelApi* | [**apiChannelExportGet**](docs/ChannelApi.md#apiChannelExportGet) | **GET** /api/channel/export | 
*HippoWeb.ChannelApi* | [**apiChannelGet**](docs/ChannelApi.md#apiChannelGet) | **GET** /api/channel | 
*HippoWeb.ChannelApi* | [**apiChannelIdDelete**](docs/ChannelApi.md#apiChannelIdDelete) | **DELETE** /api/channel/{id} | 
*HippoWeb.ChannelApi* | [**apiChannelIdGet**](docs/ChannelApi.md#apiChannelIdGet) | **GET** /api/channel/{id} | 
*HippoWeb.ChannelApi* | [**apiChannelIdPatch**](docs/ChannelApi.md#apiChannelIdPatch) | **PATCH** /api/channel/{id} | 
*HippoWeb.ChannelApi* | [**apiChannelIdPut**](docs/ChannelApi.md#apiChannelIdPut) | **PUT** /api/channel/{id} | 
*HippoWeb.ChannelApi* | [**apiChannelLogsIdGet**](docs/ChannelApi.md#apiChannelLogsIdGet) | **GET** /api/channel/logs/{id} | 
*HippoWeb.ChannelApi* | [**apiChannelPost**](docs/ChannelApi.md#apiChannelPost) | **POST** /api/channel | 
*HippoWeb.JobStatusApi* | [**apiJobstatusChannelIdGet**](docs/JobStatusApi.md#apiJobstatusChannelIdGet) | **GET** /api/jobstatus/{channelId} | 
*HippoWeb.JobStatusApi* | [**apiJobstatusGet**](docs/JobStatusApi.md#apiJobstatusGet) | **GET** /api/jobstatus | 
*HippoWeb.RevisionApi* | [**apiRevisionExportGet**](docs/RevisionApi.md#apiRevisionExportGet) | **GET** /api/revision/export | 
*HippoWeb.RevisionApi* | [**apiRevisionGet**](docs/RevisionApi.md#apiRevisionGet) | **GET** /api/revision | 
*HippoWeb.RevisionApi* | [**apiRevisionIdDelete**](docs/RevisionApi.md#apiRevisionIdDelete) | **DELETE** /api/revision/{id} | 
*HippoWeb.RevisionApi* | [**apiRevisionPost**](docs/RevisionApi.md#apiRevisionPost) | **POST** /api/revision | 
*HippoWeb.StorageApi* | [**apiStorageGet**](docs/StorageApi.md#apiStorageGet) | **GET** /api/storage | 


## Documentation for Models

 - [HippoWeb.AppChannelListItem](docs/AppChannelListItem.md)
 - [HippoWeb.AppItem](docs/AppItem.md)
 - [HippoWeb.AppItemPage](docs/AppItemPage.md)
 - [HippoWeb.AppSummaryDto](docs/AppSummaryDto.md)
 - [HippoWeb.CertificateItem](docs/CertificateItem.md)
 - [HippoWeb.CertificateItemPage](docs/CertificateItemPage.md)
 - [HippoWeb.ChannelItem](docs/ChannelItem.md)
 - [HippoWeb.ChannelItemPage](docs/ChannelItemPage.md)
 - [HippoWeb.ChannelJobStatusItem](docs/ChannelJobStatusItem.md)
 - [HippoWeb.ChannelJobStatusItemPage](docs/ChannelJobStatusItemPage.md)
 - [HippoWeb.ChannelRevisionSelectionStrategy](docs/ChannelRevisionSelectionStrategy.md)
 - [HippoWeb.ChannelRevisionSelectionStrategyField](docs/ChannelRevisionSelectionStrategyField.md)
 - [HippoWeb.CreateAccountCommand](docs/CreateAccountCommand.md)
 - [HippoWeb.CreateAppCommand](docs/CreateAppCommand.md)
 - [HippoWeb.CreateCertificateCommand](docs/CreateCertificateCommand.md)
 - [HippoWeb.CreateChannelCommand](docs/CreateChannelCommand.md)
 - [HippoWeb.CreateTokenCommand](docs/CreateTokenCommand.md)
 - [HippoWeb.EnvironmentVariableItem](docs/EnvironmentVariableItem.md)
 - [HippoWeb.GetChannelLogsVm](docs/GetChannelLogsVm.md)
 - [HippoWeb.GuidNullableField](docs/GuidNullableField.md)
 - [HippoWeb.JobStatus](docs/JobStatus.md)
 - [HippoWeb.PatchChannelCommand](docs/PatchChannelCommand.md)
 - [HippoWeb.RegisterRevisionCommand](docs/RegisterRevisionCommand.md)
 - [HippoWeb.RevisionComponentDto](docs/RevisionComponentDto.md)
 - [HippoWeb.RevisionItem](docs/RevisionItem.md)
 - [HippoWeb.RevisionItemPage](docs/RevisionItemPage.md)
 - [HippoWeb.StringField](docs/StringField.md)
 - [HippoWeb.StringPage](docs/StringPage.md)
 - [HippoWeb.TokenInfo](docs/TokenInfo.md)
 - [HippoWeb.UpdateAppCommand](docs/UpdateAppCommand.md)
 - [HippoWeb.UpdateCertificateCommand](docs/UpdateCertificateCommand.md)
 - [HippoWeb.UpdateChannelCommand](docs/UpdateChannelCommand.md)
 - [HippoWeb.UpdateEnvironmentVariableDto](docs/UpdateEnvironmentVariableDto.md)
 - [HippoWeb.UpdateEnvironmentVariableDtoListField](docs/UpdateEnvironmentVariableDtoListField.md)


## Documentation for Authorization



### Bearer


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

