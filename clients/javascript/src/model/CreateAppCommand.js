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
 * The CreateAppCommand model module.
 * @module model/CreateAppCommand
 * @version 1.0
 */
class CreateAppCommand {
    /**
     * Constructs a new <code>CreateAppCommand</code>.
     * @alias module:model/CreateAppCommand
     * @param name {String} 
     * @param storageId {String} 
     */
    constructor(name, storageId) { 
        
        CreateAppCommand.initialize(this, name, storageId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, storageId) { 
        obj['name'] = name;
        obj['storageId'] = storageId;
    }

    /**
     * Constructs a <code>CreateAppCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAppCommand} obj Optional instance to populate.
     * @return {module:model/CreateAppCommand} The populated <code>CreateAppCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAppCommand();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('storageId')) {
                obj['storageId'] = ApiClient.convertToType(data['storageId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
CreateAppCommand.prototype['name'] = undefined;

/**
 * @member {String} storageId
 */
CreateAppCommand.prototype['storageId'] = undefined;






export default CreateAppCommand;

