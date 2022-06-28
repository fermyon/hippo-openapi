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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface EnvironmentVariableDto
 */
export interface EnvironmentVariableDto {
    /**
     * 
     * @type {string}
     * @memberof EnvironmentVariableDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentVariableDto
     */
    channelId: string;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentVariableDto
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof EnvironmentVariableDto
     */
    value: string;
}

/**
 * Check if a given object implements the EnvironmentVariableDto interface.
 */
export function instanceOfEnvironmentVariableDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "channelId" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function EnvironmentVariableDtoFromJSON(json: any): EnvironmentVariableDto {
    return EnvironmentVariableDtoFromJSONTyped(json, false);
}

export function EnvironmentVariableDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): EnvironmentVariableDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'channelId': json['channelId'],
        'key': json['key'],
        'value': json['value'],
    };
}

export function EnvironmentVariableDtoToJSON(value?: EnvironmentVariableDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'channelId': value.channelId,
        'key': value.key,
        'value': value.value,
    };
}

