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
  CreateAccountCommand,
  CreateTokenCommand,
  TokenInfo,
} from '../models';
import {
    CreateAccountCommandFromJSON,
    CreateAccountCommandToJSON,
    CreateTokenCommandFromJSON,
    CreateTokenCommandToJSON,
    TokenInfoFromJSON,
    TokenInfoToJSON,
} from '../models';

export interface ApiAccountCreatetokenPostRequest {
    createTokenCommand?: CreateTokenCommand;
}

export interface ApiAccountPostRequest {
    createAccountCommand?: CreateAccountCommand;
}

/**
 * 
 */
export class AccountApi extends runtime.BaseAPI {

    /**
     */
    async apiAccountCreatetokenPostRaw(requestParameters: ApiAccountCreatetokenPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TokenInfo>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/account/createtoken`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTokenCommandToJSON(requestParameters.createTokenCommand),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TokenInfoFromJSON(jsonValue));
    }

    /**
     */
    async apiAccountCreatetokenPost(requestParameters: ApiAccountCreatetokenPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TokenInfo> {
        const response = await this.apiAccountCreatetokenPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiAccountPostRaw(requestParameters: ApiAccountPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Bearer authentication
        }

        const response = await this.request({
            path: `/api/account`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateAccountCommandToJSON(requestParameters.createAccountCommand),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     */
    async apiAccountPost(requestParameters: ApiAccountPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.apiAccountPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}