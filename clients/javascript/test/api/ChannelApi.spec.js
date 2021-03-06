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
    instance = new HippoWeb.ChannelApi();
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

  describe('ChannelApi', function() {
    describe('apiChannelGet', function() {
      it('should call apiChannelGet successfully', function(done) {
        //uncomment below and update the code to test apiChannelGet
        //instance.apiChannelGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiChannelIdDelete', function() {
      it('should call apiChannelIdDelete successfully', function(done) {
        //uncomment below and update the code to test apiChannelIdDelete
        //instance.apiChannelIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiChannelIdGet', function() {
      it('should call apiChannelIdGet successfully', function(done) {
        //uncomment below and update the code to test apiChannelIdGet
        //instance.apiChannelIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiChannelPost', function() {
      it('should call apiChannelPost successfully', function(done) {
        //uncomment below and update the code to test apiChannelPost
        //instance.apiChannelPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
