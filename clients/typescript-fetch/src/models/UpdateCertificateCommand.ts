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
 * @interface UpdateCertificateCommand
 */
export interface UpdateCertificateCommand {
    /**
     * 
     * @type {string}
     * @memberof UpdateCertificateCommand
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateCertificateCommand
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateCertificateCommand
     */
    publicKey: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateCertificateCommand
     */
    privateKey: string;
}

/**
 * Check if a given object implements the UpdateCertificateCommand interface.
 */
export function instanceOfUpdateCertificateCommand(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "publicKey" in value;
    isInstance = isInstance && "privateKey" in value;

    return isInstance;
}

export function UpdateCertificateCommandFromJSON(json: any): UpdateCertificateCommand {
    return UpdateCertificateCommandFromJSONTyped(json, false);
}

export function UpdateCertificateCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCertificateCommand {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'publicKey': json['publicKey'],
        'privateKey': json['privateKey'],
    };
}

export function UpdateCertificateCommandToJSON(value?: UpdateCertificateCommand | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'publicKey': value.publicKey,
        'privateKey': value.privateKey,
    };
}

