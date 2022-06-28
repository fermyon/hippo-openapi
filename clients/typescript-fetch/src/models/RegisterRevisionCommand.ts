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
 * @interface RegisterRevisionCommand
 */
export interface RegisterRevisionCommand {
    /**
     * 
     * @type {string}
     * @memberof RegisterRevisionCommand
     */
    appStorageId: string;
    /**
     * 
     * @type {string}
     * @memberof RegisterRevisionCommand
     */
    revisionNumber: string;
}

/**
 * Check if a given object implements the RegisterRevisionCommand interface.
 */
export function instanceOfRegisterRevisionCommand(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "appStorageId" in value;
    isInstance = isInstance && "revisionNumber" in value;

    return isInstance;
}

export function RegisterRevisionCommandFromJSON(json: any): RegisterRevisionCommand {
    return RegisterRevisionCommandFromJSONTyped(json, false);
}

export function RegisterRevisionCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterRevisionCommand {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'appStorageId': json['appStorageId'],
        'revisionNumber': json['revisionNumber'],
    };
}

export function RegisterRevisionCommandToJSON(value?: RegisterRevisionCommand | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'appStorageId': value.appStorageId,
        'revisionNumber': value.revisionNumber,
    };
}
