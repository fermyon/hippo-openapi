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


import ApiClient from "../ApiClient";
import ChannelJobStatus from '../model/ChannelJobStatus';

/**
* JobStatus service.
* @module api/JobStatusApi
* @version 1.0
*/
export default class JobStatusApi {

    /**
    * Constructs a new JobStatusApi. 
    * @alias module:api/JobStatusApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiJobstatusGet operation.
     * @callback module:api/JobStatusApi~apiJobstatusGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ChannelJobStatus>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/JobStatusApi~apiJobstatusGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ChannelJobStatus>}
     */
    apiJobstatusGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Bearer'];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = [ChannelJobStatus];
      return this.apiClient.callApi(
        '/api/jobstatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}