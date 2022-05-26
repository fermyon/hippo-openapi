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
import Certificate from './Certificate';
import ChannelRevisionSelectionStrategy from './ChannelRevisionSelectionStrategy';
import EnvironmentVariableDto from './EnvironmentVariableDto';
import RevisionDetailsDto from './RevisionDetailsDto';

/**
 * The ChannelDetailsDto model module.
 * @module model/ChannelDetailsDto
 * @version 1.0
 */
class ChannelDetailsDto {
    /**
     * Constructs a new <code>ChannelDetailsDto</code>.
     * @alias module:model/ChannelDetailsDto
     * @param id {String} 
     * @param name {String} 
     * @param domain {String} 
     * @param revisionSelectionStrategy {module:model/ChannelRevisionSelectionStrategy} 
     * @param environmentVariables {Array.<module:model/EnvironmentVariableDto>} 
     */
    constructor(id, name, domain, revisionSelectionStrategy, environmentVariables) { 
        
        ChannelDetailsDto.initialize(this, id, name, domain, revisionSelectionStrategy, environmentVariables);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, domain, revisionSelectionStrategy, environmentVariables) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['domain'] = domain;
        obj['revisionSelectionStrategy'] = revisionSelectionStrategy;
        obj['environmentVariables'] = environmentVariables;
    }

    /**
     * Constructs a <code>ChannelDetailsDto</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChannelDetailsDto} obj Optional instance to populate.
     * @return {module:model/ChannelDetailsDto} The populated <code>ChannelDetailsDto</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChannelDetailsDto();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('revisionSelectionStrategy')) {
                obj['revisionSelectionStrategy'] = ChannelRevisionSelectionStrategy.constructFromObject(data['revisionSelectionStrategy']);
            }
            if (data.hasOwnProperty('activeRevision')) {
                obj['activeRevision'] = RevisionDetailsDto.constructFromObject(data['activeRevision']);
            }
            if (data.hasOwnProperty('rangeRule')) {
                obj['rangeRule'] = ApiClient.convertToType(data['rangeRule'], 'String');
            }
            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = Certificate.constructFromObject(data['certificate']);
            }
            if (data.hasOwnProperty('environmentVariables')) {
                obj['environmentVariables'] = ApiClient.convertToType(data['environmentVariables'], [EnvironmentVariableDto]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ChannelDetailsDto.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ChannelDetailsDto.prototype['name'] = undefined;

/**
 * @member {String} domain
 */
ChannelDetailsDto.prototype['domain'] = undefined;

/**
 * @member {module:model/ChannelRevisionSelectionStrategy} revisionSelectionStrategy
 */
ChannelDetailsDto.prototype['revisionSelectionStrategy'] = undefined;

/**
 * @member {module:model/RevisionDetailsDto} activeRevision
 */
ChannelDetailsDto.prototype['activeRevision'] = undefined;

/**
 * @member {String} rangeRule
 */
ChannelDetailsDto.prototype['rangeRule'] = undefined;

/**
 * @member {module:model/Certificate} certificate
 */
ChannelDetailsDto.prototype['certificate'] = undefined;

/**
 * @member {Array.<module:model/EnvironmentVariableDto>} environmentVariables
 */
ChannelDetailsDto.prototype['environmentVariables'] = undefined;






export default ChannelDetailsDto;
