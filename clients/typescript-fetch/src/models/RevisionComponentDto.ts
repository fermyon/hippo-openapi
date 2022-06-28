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
 * @interface RevisionComponentDto
 */
export interface RevisionComponentDto {
    /**
     * 
     * @type {string}
     * @memberof RevisionComponentDto
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof RevisionComponentDto
     */
    source: string;
    /**
     * 
     * @type {string}
     * @memberof RevisionComponentDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RevisionComponentDto
     */
    route?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RevisionComponentDto
     */
    channel?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RevisionComponentDto
     */
    type?: string | null;
}

/**
 * Check if a given object implements the RevisionComponentDto interface.
 */
export function instanceOfRevisionComponentDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function RevisionComponentDtoFromJSON(json: any): RevisionComponentDto {
    return RevisionComponentDtoFromJSONTyped(json, false);
}

export function RevisionComponentDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevisionComponentDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'source': json['source'],
        'name': json['name'],
        'route': !exists(json, 'route') ? undefined : json['route'],
        'channel': !exists(json, 'channel') ? undefined : json['channel'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function RevisionComponentDtoToJSON(value?: RevisionComponentDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'source': value.source,
        'name': value.name,
        'route': value.route,
        'channel': value.channel,
        'type': value.type,
    };
}
