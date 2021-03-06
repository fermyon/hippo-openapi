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
 * The CreateAccountCommand model module.
 * @module model/CreateAccountCommand
 * @version 1.0
 */
class CreateAccountCommand {
    /**
     * Constructs a new <code>CreateAccountCommand</code>.
     * @alias module:model/CreateAccountCommand
     * @param userName {String} 
     * @param password {String} 
     */
    constructor(userName, password) { 
        
        CreateAccountCommand.initialize(this, userName, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, userName, password) { 
        obj['userName'] = userName;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>CreateAccountCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAccountCommand} obj Optional instance to populate.
     * @return {module:model/CreateAccountCommand} The populated <code>CreateAccountCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAccountCommand();

            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} userName
 */
CreateAccountCommand.prototype['userName'] = undefined;

/**
 * @member {String} password
 */
CreateAccountCommand.prototype['password'] = undefined;






export default CreateAccountCommand;

