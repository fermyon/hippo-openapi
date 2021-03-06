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

/**
 * The UpdateEnvironmentVariableDto model module.
 * @module model/UpdateEnvironmentVariableDto
 * @version 1.0
 */
class UpdateEnvironmentVariableDto {
    /**
     * Constructs a new <code>UpdateEnvironmentVariableDto</code>.
     * @alias module:model/UpdateEnvironmentVariableDto
     * @param key {String} 
     * @param value {String} 
     */
    constructor(key, value) { 
        
        UpdateEnvironmentVariableDto.initialize(this, key, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, key, value) { 
        obj['key'] = key;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>UpdateEnvironmentVariableDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateEnvironmentVariableDto} obj Optional instance to populate.
     * @return {module:model/UpdateEnvironmentVariableDto} The populated <code>UpdateEnvironmentVariableDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateEnvironmentVariableDto();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} key
 */
UpdateEnvironmentVariableDto.prototype['key'] = undefined;

/**
 * @member {String} value
 */
UpdateEnvironmentVariableDto.prototype['value'] = undefined;






export default UpdateEnvironmentVariableDto;

