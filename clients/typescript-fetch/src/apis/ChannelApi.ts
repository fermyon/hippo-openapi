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
  ChannelDto,
  ChannelsVm,
  CreateChannelCommand,
  GetChannelLogsVm,
  UpdateChannelCommand,
  UpdateChannelEnvironmentVariablesCommand,
} from '../models';
import {
    ChannelDtoFromJSON,
    ChannelDtoToJSON,
    ChannelsVmFromJSON,
    ChannelsVmToJSON,
    CreateChannelCommandFromJSON,
    CreateChannelCommandToJSON,
    GetChannelLogsVmFromJSON,
    GetChannelLogsVmToJSON,
    UpdateChannelCommandFromJSON,
    UpdateChannelCommandToJSON,
    UpdateChannelEnvironmentVariablesCommandFromJSON,
    UpdateChannelEnvironmentVariablesCommandToJSON,
} from '../models';

export interface ApiChannelChannelIdEnvironmentVariablesPutRequest {
    channelId: string;
    updateChannelEnvironmentVariablesCommand?: UpdateChannelEnvironmentVariablesCommand;
}

export interface ApiChannelChannelIdGetRequest {
    channelId: string;
}

export interface ApiChannelIdDeleteRequest {
    id: string;
}

export interface ApiChannelIdPutRequest {
    id: string;
    updateChannelCommand?: UpdateChannelCommand;
}

export interface ApiChannelLogsChannelIdGetRequest {
    channelId: string;
}

export interface ApiChannelPostRequest {
    createChannelCommand?: CreateChannelCommand;
}

/**
 * 
 */
export class ChannelApi extends runtime.BaseAPI {

    /**
     */
    async apiChannelChannelIdEnvironmentVariablesPutRaw(requestParameters: ApiChannelChannelIdEnvironmentVariablesPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling apiChannelChannelIdEnvironmentVariablesPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/channel/{channelId}/environment-variables`.replace(`{${"channelId"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateChannelEnvironmentVariablesCommandToJSON(requestParameters.updateChannelEnvironmentVariablesCommand),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiChannelChannelIdEnvironmentVariablesPut(requestParameters: ApiChannelChannelIdEnvironmentVariablesPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiChannelChannelIdEnvironmentVariablesPutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiChannelChannelIdGetRaw(requestParameters: ApiChannelChannelIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelDto>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling apiChannelChannelIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/channel/{channelId}`.replace(`{${"channelId"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelDtoFromJSON(jsonValue));
    }

    /**
     */
    async apiChannelChannelIdGet(requestParameters: ApiChannelChannelIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelDto> {
        const response = await this.apiChannelChannelIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChannelExportGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/channel/export`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiChannelExportGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiChannelExportGetRaw(initOverrides);
    }

    /**
     */
    async apiChannelGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChannelsVm>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/channel`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChannelsVmFromJSON(jsonValue));
    }

    /**
     */
    async apiChannelGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChannelsVm> {
        const response = await this.apiChannelGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChannelIdDeleteRaw(requestParameters: ApiChannelIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiChannelIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/channel/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiChannelIdDelete(requestParameters: ApiChannelIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiChannelIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiChannelIdPutRaw(requestParameters: ApiChannelIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiChannelIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/channel/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateChannelCommandToJSON(requestParameters.updateChannelCommand),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiChannelIdPut(requestParameters: ApiChannelIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiChannelIdPutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiChannelLogsChannelIdGetRaw(requestParameters: ApiChannelLogsChannelIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetChannelLogsVm>> {
        if (requestParameters.channelId === null || requestParameters.channelId === undefined) {
            throw new runtime.RequiredError('channelId','Required parameter requestParameters.channelId was null or undefined when calling apiChannelLogsChannelIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/channel/logs/{channelId}`.replace(`{${"channelId"}}`, encodeURIComponent(String(requestParameters.channelId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetChannelLogsVmFromJSON(jsonValue));
    }

    /**
     */
    async apiChannelLogsChannelIdGet(requestParameters: ApiChannelLogsChannelIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetChannelLogsVm> {
        const response = await this.apiChannelLogsChannelIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiChannelPostRaw(requestParameters: ApiChannelPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/channel`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateChannelCommandToJSON(requestParameters.createChannelCommand),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async apiChannelPost(requestParameters: ApiChannelPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.apiChannelPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}