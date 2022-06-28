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
import type { ChannelDto } from './ChannelDto';
import {
    ChannelDtoFromJSON,
    ChannelDtoFromJSONTyped,
    ChannelDtoToJSON,
} from './ChannelDto';

/**
 * 
 * @export
 * @interface CertificateDto
 */
export interface CertificateDto {
    /**
     * 
     * @type {string}
     * @memberof CertificateDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateDto
     */
    publicKey: string;
    /**
     * 
     * @type {string}
     * @memberof CertificateDto
     */
    privateKey: string;
    /**
     * 
     * @type {Array<ChannelDto>}
     * @memberof CertificateDto
     */
    channels: Array<ChannelDto>;
}

/**
 * Check if a given object implements the CertificateDto interface.
 */
export function instanceOfCertificateDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "publicKey" in value;
    isInstance = isInstance && "privateKey" in value;
    isInstance = isInstance && "channels" in value;

    return isInstance;
}

export function CertificateDtoFromJSON(json: any): CertificateDto {
    return CertificateDtoFromJSONTyped(json, false);
}

export function CertificateDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CertificateDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'publicKey': json['publicKey'],
        'privateKey': json['privateKey'],
        'channels': ((json['channels'] as Array<any>).map(ChannelDtoFromJSON)),
    };
}

export function CertificateDtoToJSON(value?: CertificateDto | null): any {
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
        'channels': ((value.channels as Array<any>).map(ChannelDtoToJSON)),
    };
}

