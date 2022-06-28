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
  StorageList,
} from '../models';
import {
    StorageListFromJSON,
    StorageListToJSON,
} from '../models';

export interface ApiStorageGetRequest {
    queryString?: string;
    offset?: number;
    limit?: number;
}

/**
 * 
 */
export class StorageApi extends runtime.BaseAPI {

    /**
     */
    async apiStorageGetRaw(requestParameters: ApiStorageGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StorageList>> {
        const queryParameters: any = {};

        if (requestParameters.queryString !== undefined) {
            queryParameters['queryString'] = requestParameters.queryString;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/storage`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StorageListFromJSON(jsonValue));
    }

    /**
     */
    async apiStorageGet(requestParameters: ApiStorageGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StorageList> {
        const response = await this.apiStorageGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}