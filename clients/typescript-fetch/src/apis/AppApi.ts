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
  AppsVm,
  CreateAppCommand,
  UpdateAppCommand,
} from '../models';
import {
    AppsVmFromJSON,
    AppsVmToJSON,
    CreateAppCommandFromJSON,
    CreateAppCommandToJSON,
    UpdateAppCommandFromJSON,
    UpdateAppCommandToJSON,
} from '../models';

export interface ApiAppIdDeleteRequest {
    id: string;
}

export interface ApiAppIdPutRequest {
    id: string;
    updateAppCommand?: UpdateAppCommand;
}

export interface ApiAppPostRequest {
    createAppCommand?: CreateAppCommand;
}

/**
 * 
 */
export class AppApi extends runtime.BaseAPI {

    /**
     */
    async apiAppExportGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/app/export`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiAppExportGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiAppExportGetRaw(initOverrides);
    }

    /**
     */
    async apiAppGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppsVm>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/app`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppsVmFromJSON(jsonValue));
    }

    /**
     */
    async apiAppGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppsVm> {
        const response = await this.apiAppGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiAppIdDeleteRaw(requestParameters: ApiAppIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiAppIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/app/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiAppIdDelete(requestParameters: ApiAppIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiAppIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiAppIdPutRaw(requestParameters: ApiAppIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiAppIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/app/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateAppCommandToJSON(requestParameters.updateAppCommand),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiAppIdPut(requestParameters: ApiAppIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiAppIdPutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiAppPostRaw(requestParameters: ApiAppPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/app`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAppCommandToJSON(requestParameters.createAppCommand),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async apiAppPost(requestParameters: ApiAppPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.apiAppPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
