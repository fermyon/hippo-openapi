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
 * The StringPage model module.
 * @module model/StringPage
 * @version 1.0
 */
class StringPage {
    /**
     * Constructs a new <code>StringPage</code>.
     * @alias module:model/StringPage
     * @param items {Array.<String>} 
     * @param totalItems {Number} 
     * @param pageIndex {Number} 
     * @param pageSize {Number} 
     * @param isLastPage {Boolean} 
     */
    constructor(items, totalItems, pageIndex, pageSize, isLastPage) { 
        
        StringPage.initialize(this, items, totalItems, pageIndex, pageSize, isLastPage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, items, totalItems, pageIndex, pageSize, isLastPage) { 
        obj['items'] = items;
        obj['totalItems'] = totalItems;
        obj['pageIndex'] = pageIndex;
        obj['pageSize'] = pageSize;
        obj['isLastPage'] = isLastPage;
    }

    /**
     * Constructs a <code>StringPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StringPage} obj Optional instance to populate.
     * @return {module:model/StringPage} The populated <code>StringPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StringPage();

            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], ['String']);
            }
            if (data.hasOwnProperty('totalItems')) {
                obj['totalItems'] = ApiClient.convertToType(data['totalItems'], 'Number');
            }
            if (data.hasOwnProperty('pageIndex')) {
                obj['pageIndex'] = ApiClient.convertToType(data['pageIndex'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('isLastPage')) {
                obj['isLastPage'] = ApiClient.convertToType(data['isLastPage'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} items
 */
StringPage.prototype['items'] = undefined;

/**
 * @member {Number} totalItems
 */
StringPage.prototype['totalItems'] = undefined;

/**
 * @member {Number} pageIndex
 */
StringPage.prototype['pageIndex'] = undefined;

/**
 * @member {Number} pageSize
 */
StringPage.prototype['pageSize'] = undefined;

/**
 * @member {Boolean} isLastPage
 */
StringPage.prototype['isLastPage'] = undefined;






export default StringPage;

