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
    instance = new HippoWeb.AppsApi();
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

  describe('AppsApi', function() {
    describe('apiAppsGet', function() {
      it('should call apiAppsGet successfully', function(done) {
        //uncomment below and update the code to test apiAppsGet
        //instance.apiAppsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiAppsIdDelete', function() {
      it('should call apiAppsIdDelete successfully', function(done) {
        //uncomment below and update the code to test apiAppsIdDelete
        //instance.apiAppsIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiAppsIdGet', function() {
      it('should call apiAppsIdGet successfully', function(done) {
        //uncomment below and update the code to test apiAppsIdGet
        //instance.apiAppsIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiAppsIdPut', function() {
      it('should call apiAppsIdPut successfully', function(done) {
        //uncomment below and update the code to test apiAppsIdPut
        //instance.apiAppsIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiAppsPost', function() {
      it('should call apiAppsPost successfully', function(done) {
        //uncomment below and update the code to test apiAppsPost
        //instance.apiAppsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
