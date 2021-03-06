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
 *
 */

import ApiClient from '../ApiClient';
import RevisionComponentDto from './RevisionComponentDto';

/**
 * The RevisionDto model module.
 * @module model/RevisionDto
 * @version 1.0
 */
class RevisionDto {
    /**
     * Constructs a new <code>RevisionDto</code>.
     * @alias module:model/RevisionDto
     * @param id {String} 
     * @param appId {String} 
     * @param revisionNumber {String} 
     * @param components {Array.<module:model/RevisionComponentDto>} 
     */
    constructor(id, appId, revisionNumber, components) { 
        
        RevisionDto.initialize(this, id, appId, revisionNumber, components);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, appId, revisionNumber, components) { 
        obj['id'] = id;
        obj['appId'] = appId;
        obj['revisionNumber'] = revisionNumber;
        obj['components'] = components;
    }

    /**
     * Constructs a <code>RevisionDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevisionDto} obj Optional instance to populate.
     * @return {module:model/RevisionDto} The populated <code>RevisionDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RevisionDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('appId')) {
                obj['appId'] = ApiClient.convertToType(data['appId'], 'String');
            }
            if (data.hasOwnProperty('revisionNumber')) {
                obj['revisionNumber'] = ApiClient.convertToType(data['revisionNumber'], 'String');
            }
            if (data.hasOwnProperty('components')) {
                obj['components'] = ApiClient.convertToType(data['components'], [RevisionComponentDto]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
RevisionDto.prototype['id'] = undefined;

/**
 * @member {String} appId
 */
RevisionDto.prototype['appId'] = undefined;

/**
 * @member {String} revisionNumber
 */
RevisionDto.prototype['revisionNumber'] = undefined;

/**
 * @member {Array.<module:model/RevisionComponentDto>} components
 */
RevisionDto.prototype['components'] = undefined;






export default RevisionDto;

