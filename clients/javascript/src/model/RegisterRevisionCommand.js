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
 * The RegisterRevisionCommand model module.
 * @module model/RegisterRevisionCommand
 * @version 1.0
 */
class RegisterRevisionCommand {
    /**
     * Constructs a new <code>RegisterRevisionCommand</code>.
     * @alias module:model/RegisterRevisionCommand
     * @param appStorageId {String} 
     * @param revisionNumber {String} 
     */
    constructor(appStorageId, revisionNumber) { 
        
        RegisterRevisionCommand.initialize(this, appStorageId, revisionNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, appStorageId, revisionNumber) { 
        obj['appStorageId'] = appStorageId;
        obj['revisionNumber'] = revisionNumber;
    }

    /**
     * Constructs a <code>RegisterRevisionCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterRevisionCommand} obj Optional instance to populate.
     * @return {module:model/RegisterRevisionCommand} The populated <code>RegisterRevisionCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterRevisionCommand();

            if (data.hasOwnProperty('appStorageId')) {
                obj['appStorageId'] = ApiClient.convertToType(data['appStorageId'], 'String');
            }
            if (data.hasOwnProperty('revisionNumber')) {
                obj['revisionNumber'] = ApiClient.convertToType(data['revisionNumber'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} appStorageId
 */
RegisterRevisionCommand.prototype['appStorageId'] = undefined;

/**
 * @member {String} revisionNumber
 */
RegisterRevisionCommand.prototype['revisionNumber'] = undefined;






export default RegisterRevisionCommand;

