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
import ChannelRevisionSelectionStrategyField from './ChannelRevisionSelectionStrategyField';
import GuidNullableField from './GuidNullableField';
import StringField from './StringField';
import UpdateEnvironmentVariableDtoListField from './UpdateEnvironmentVariableDtoListField';

/**
 * The PatchChannelCommand model module.
 * @module model/PatchChannelCommand
 * @version 1.0
 */
class PatchChannelCommand {
    /**
     * Constructs a new <code>PatchChannelCommand</code>.
     * @alias module:model/PatchChannelCommand
     */
    constructor() { 
        
        PatchChannelCommand.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PatchChannelCommand</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchChannelCommand} obj Optional instance to populate.
     * @return {module:model/PatchChannelCommand} The populated <code>PatchChannelCommand</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PatchChannelCommand();

            if (data.hasOwnProperty('channelId')) {
                obj['channelId'] = ApiClient.convertToType(data['channelId'], 'String');
            }
            if (data.hasOwnProperty('environmentVariables')) {
                obj['environmentVariables'] = UpdateEnvironmentVariableDtoListField.constructFromObject(data['environmentVariables']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = StringField.constructFromObject(data['name']);
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = StringField.constructFromObject(data['domain']);
            }
            if (data.hasOwnProperty('revisionSelectionStrategy')) {
                obj['revisionSelectionStrategy'] = ChannelRevisionSelectionStrategyField.constructFromObject(data['revisionSelectionStrategy']);
            }
            if (data.hasOwnProperty('rangeRule')) {
                obj['rangeRule'] = StringField.constructFromObject(data['rangeRule']);
            }
            if (data.hasOwnProperty('activeRevisionId')) {
                obj['activeRevisionId'] = GuidNullableField.constructFromObject(data['activeRevisionId']);
            }
            if (data.hasOwnProperty('certificateId')) {
                obj['certificateId'] = GuidNullableField.constructFromObject(data['certificateId']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} channelId
 */
PatchChannelCommand.prototype['channelId'] = undefined;

/**
 * @member {module:model/UpdateEnvironmentVariableDtoListField} environmentVariables
 */
PatchChannelCommand.prototype['environmentVariables'] = undefined;

/**
 * @member {module:model/StringField} name
 */
PatchChannelCommand.prototype['name'] = undefined;

/**
 * @member {module:model/StringField} domain
 */
PatchChannelCommand.prototype['domain'] = undefined;

/**
 * @member {module:model/ChannelRevisionSelectionStrategyField} revisionSelectionStrategy
 */
PatchChannelCommand.prototype['revisionSelectionStrategy'] = undefined;

/**
 * @member {module:model/StringField} rangeRule
 */
PatchChannelCommand.prototype['rangeRule'] = undefined;

/**
 * @member {module:model/GuidNullableField} activeRevisionId
 */
PatchChannelCommand.prototype['activeRevisionId'] = undefined;

/**
 * @member {module:model/GuidNullableField} certificateId
 */
PatchChannelCommand.prototype['certificateId'] = undefined;






export default PatchChannelCommand;
