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
import type { AppChannelSummary } from './AppChannelSummary';
import {
    AppChannelSummaryFromJSON,
    AppChannelSummaryFromJSONTyped,
    AppChannelSummaryToJSON,
} from './AppChannelSummary';

/**
 * 
 * @export
 * @interface AppSummaryDto
 */
export interface AppSummaryDto {
    /**
     * 
     * @type {string}
     * @memberof AppSummaryDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof AppSummaryDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppSummaryDto
     */
    storageId: string;
    /**
     * 
     * @type {Array<AppChannelSummary>}
     * @memberof AppSummaryDto
     */
    channels: Array<AppChannelSummary>;
}

/**
 * Check if a given object implements the AppSummaryDto interface.
 */
export function instanceOfAppSummaryDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "storageId" in value;
    isInstance = isInstance && "channels" in value;

    return isInstance;
}

export function AppSummaryDtoFromJSON(json: any): AppSummaryDto {
    return AppSummaryDtoFromJSONTyped(json, false);
}

export function AppSummaryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSummaryDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'storageId': json['storageId'],
        'channels': ((json['channels'] as Array<any>).map(AppChannelSummaryFromJSON)),
    };
}

export function AppSummaryDtoToJSON(value?: AppSummaryDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'storageId': value.storageId,
        'channels': ((value.channels as Array<any>).map(AppChannelSummaryToJSON)),
    };
}
