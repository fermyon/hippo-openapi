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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.HippoWeb);
  }
}(this, function(expect, HippoWeb) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new HippoWeb.ChannelsApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ChannelsApi', function() {
    describe('apiChannelsChannelIdDesiredStatusPut', function() {
      it('should call apiChannelsChannelIdDesiredStatusPut successfully', function(done) {
        //uncomment below and update the code to test apiChannelsChannelIdDesiredStatusPut
        //instance.apiChannelsChannelIdDesiredStatusPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiChannelsGet', function() {
      it('should call apiChannelsGet successfully', function(done) {
        //uncomment below and update the code to test apiChannelsGet
        //instance.apiChannelsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiChannelsIdDelete', function() {
      it('should call apiChannelsIdDelete successfully', function(done) {
        //uncomment below and update the code to test apiChannelsIdDelete
        //instance.apiChannelsIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiChannelsIdGet', function() {
      it('should call apiChannelsIdGet successfully', function(done) {
        //uncomment below and update the code to test apiChannelsIdGet
        //instance.apiChannelsIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiChannelsIdLogsGet', function() {
      it('should call apiChannelsIdLogsGet successfully', function(done) {
        //uncomment below and update the code to test apiChannelsIdLogsGet
        //instance.apiChannelsIdLogsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiChannelsIdPatch', function() {
      it('should call apiChannelsIdPatch successfully', function(done) {
        //uncomment below and update the code to test apiChannelsIdPatch
        //instance.apiChannelsIdPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiChannelsIdPut', function() {
      it('should call apiChannelsIdPut successfully', function(done) {
        //uncomment below and update the code to test apiChannelsIdPut
        //instance.apiChannelsIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiChannelsPost', function() {
      it('should call apiChannelsPost successfully', function(done) {
        //uncomment below and update the code to test apiChannelsPost
        //instance.apiChannelsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));