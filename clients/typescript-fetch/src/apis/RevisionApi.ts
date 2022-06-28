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
  RegisterRevisionCommand,
  RevisionsVm,
} from '../models';
import {
    RegisterRevisionCommandFromJSON,
    RegisterRevisionCommandToJSON,
    RevisionsVmFromJSON,
    RevisionsVmToJSON,
} from '../models';

export interface ApiRevisionIdDeleteRequest {
    id: string;
}

export interface ApiRevisionPostRequest {
    registerRevisionCommand?: RegisterRevisionCommand;
}

/**
 * 
 */
export class RevisionApi extends runtime.BaseAPI {

    /**
     */
    async apiRevisionExportGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/revision/export`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiRevisionExportGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiRevisionExportGetRaw(initOverrides);
    }

    /**
     */
    async apiRevisionGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RevisionsVm>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/revision`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RevisionsVmFromJSON(jsonValue));
    }

    /**
     */
    async apiRevisionGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RevisionsVm> {
        const response = await this.apiRevisionGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiRevisionIdDeleteRaw(requestParameters: ApiRevisionIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiRevisionIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/revision/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiRevisionIdDelete(requestParameters: ApiRevisionIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiRevisionIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiRevisionPostRaw(requestParameters: ApiRevisionPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/revision`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RegisterRevisionCommandToJSON(requestParameters.registerRevisionCommand),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiRevisionPost(requestParameters: ApiRevisionPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiRevisionPostRaw(requestParameters, initOverrides);
    }

}
