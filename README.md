# hippo-openapi

This repository contains the Hippo OpenAPI specification and related artifacts.

The OpenAPI specification defines a machine-readable schema for describing HTTP
APIs. From an OpenAPI specification, clients and servers for your project can
be generated in a number of programming languages.

The latest version of the OpenAPI specification for Hippo can be found in this
repository at swagger.yaml. This file is itself a generated file and should not
be edited directly. You can use this file to generate a client for the Hippo
HTTP API in the language of your choice.

## Using the Rust client

To use the Rust client, add a reference to it in your Cargo.toml:

```
hippo-openapi = "0.1"
```

## Code Generation

This repository uses the OpenAPI Generator project to generate clients that is
then used to validate the generated specification.

Fetching a new swagger.json can be done by running Hippo in development mode
and opening a new page:

https://localhost:5309/swagger/v1/swagger.json
