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


/**
 * 
 * @export
 */
export const JobStatus = {
    Unknown: 'Unknown',
    Pending: 'Pending',
    Running: 'Running',
    Dead: 'Dead'
} as const;
export type JobStatus = typeof JobStatus[keyof typeof JobStatus];


export function JobStatusFromJSON(json: any): JobStatus {
    return JobStatusFromJSONTyped(json, false);
}

export function JobStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobStatus {
    return json as JobStatus;
}

export function JobStatusToJSON(value?: JobStatus | null): any {
    return value as any;
}
