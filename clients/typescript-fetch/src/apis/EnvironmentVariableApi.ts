/* tslint:disable */
/* eslint-disable */
/**
 * Hippo.Web
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateEnvironmentVariableCommand,
  EnvironmentVariablesVm,
  UpdateEnvironmentVariableCommand,
} from '../models';
import {
    CreateEnvironmentVariableCommandFromJSON,
    CreateEnvironmentVariableCommandToJSON,
    EnvironmentVariablesVmFromJSON,
    EnvironmentVariablesVmToJSON,
    UpdateEnvironmentVariableCommandFromJSON,
    UpdateEnvironmentVariableCommandToJSON,
} from '../models';

export interface ApiEnvironmentvariableIdDeleteRequest {
    id: string;
}

export interface ApiEnvironmentvariableIdPutRequest {
    id: string;
    updateEnvironmentVariableCommand?: UpdateEnvironmentVariableCommand;
}

export interface ApiEnvironmentvariablePostRequest {
    createEnvironmentVariableCommand?: CreateEnvironmentVariableCommand;
}

/**
 * 
 */
export class EnvironmentVariableApi extends runtime.BaseAPI {

    /**
     */
    async apiEnvironmentvariableExportGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/environmentvariable/export`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiEnvironmentvariableExportGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiEnvironmentvariableExportGetRaw(initOverrides);
    }

    /**
     */
    async apiEnvironmentvariableGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<EnvironmentVariablesVm>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/environmentvariable`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => EnvironmentVariablesVmFromJSON(jsonValue));
    }

    /**
     */
    async apiEnvironmentvariableGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<EnvironmentVariablesVm> {
        const response = await this.apiEnvironmentvariableGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiEnvironmentvariableIdDeleteRaw(requestParameters: ApiEnvironmentvariableIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEnvironmentvariableIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/environmentvariable/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiEnvironmentvariableIdDelete(requestParameters: ApiEnvironmentvariableIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiEnvironmentvariableIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiEnvironmentvariableIdPutRaw(requestParameters: ApiEnvironmentvariableIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiEnvironmentvariableIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/environmentvariable/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateEnvironmentVariableCommandToJSON(requestParameters.updateEnvironmentVariableCommand),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiEnvironmentvariableIdPut(requestParameters: ApiEnvironmentvariableIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiEnvironmentvariableIdPutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiEnvironmentvariablePostRaw(requestParameters: ApiEnvironmentvariablePostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/environmentvariable`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateEnvironmentVariableCommandToJSON(requestParameters.createEnvironmentVariableCommand),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async apiEnvironmentvariablePost(requestParameters: ApiEnvironmentvariablePostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.apiEnvironmentvariablePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
