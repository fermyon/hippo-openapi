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
import AppChannelListItem from './AppChannelListItem';

/**
 * The AppItem model module.
 * @module model/AppItem
 * @version 1.0
 */
class AppItem {
    /**
     * Constructs a new <code>AppItem</code>.
     * @alias module:model/AppItem
     * @param id {String} 
     * @param name {String} 
     * @param storageId {String} 
     * @param channels {Array.<module:model/AppChannelListItem>} 
     */
    constructor(id, name, storageId, channels) { 
        
        AppItem.initialize(this, id, name, storageId, channels);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, storageId, channels) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['storageId'] = storageId;
        obj['channels'] = channels;
    }

    /**
     * Constructs a <code>AppItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AppItem} obj Optional instance to populate.
     * @return {module:model/AppItem} The populated <code>AppItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AppItem();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('storageId')) {
                obj['storageId'] = ApiClient.convertToType(data['storageId'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('channels')) {
                obj['channels'] = ApiClient.convertToType(data['channels'], [AppChannelListItem]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
AppItem.prototype['id'] = undefined;

/**
 * @member {String} name
 */
AppItem.prototype['name'] = undefined;

/**
 * @member {String} storageId
 */
AppItem.prototype['storageId'] = undefined;

/**
 * @member {String} description
 */
AppItem.prototype['description'] = undefined;

/**
 * @member {Array.<module:model/AppChannelListItem>} channels
 */
AppItem.prototype['channels'] = undefined;






export default AppItem;

