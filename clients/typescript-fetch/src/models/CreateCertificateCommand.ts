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
 * @interface CreateCertificateCommand
 */
export interface CreateCertificateCommand {
    /**
     * 
     * @type {string}
     * @memberof CreateCertificateCommand
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCertificateCommand
     */
    publicKey: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCertificateCommand
     */
    privateKey: string;
}

/**
 * Check if a given object implements the CreateCertificateCommand interface.
 */
export function instanceOfCreateCertificateCommand(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "publicKey" in value;
    isInstance = isInstance && "privateKey" in value;

    return isInstance;
}

export function CreateCertificateCommandFromJSON(json: any): CreateCertificateCommand {
    return CreateCertificateCommandFromJSONTyped(json, false);
}

export function CreateCertificateCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCertificateCommand {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'publicKey': json['publicKey'],
        'privateKey': json['privateKey'],
    };
}

export function CreateCertificateCommandToJSON(value?: CreateCertificateCommand | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'publicKey': value.publicKey,
        'privateKey': value.privateKey,
    };
}
