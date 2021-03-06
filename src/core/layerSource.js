//////////////////////////////////////////////////////////////////////////////
/**
 * @module ogs.geo
 */

/*jslint devel: true, forin: true, newcap: true, plusplus: true*/
/*jslint white: true, indent: 2*/

/*global geoModule, ogs, inherit, $, HTMLCanvasElement, Image*/
/*global vglModule, document*/
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
/**
 * layerSource provides data to a layer
 */
//////////////////////////////////////////////////////////////////////////////
geoModule.layerSource = function() {
  'use strict';

   /** @private */
  var m_requestDataMTime = vglModule.timestamp();

  this.requestDataMTime = function() {
      return m_requestDataMTime;
  };

  this.requestDataMTimeModified = function() {
      // TODO Check for caller here
      m_requestDataMTime.modified();
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
  ////////////////////////////////////////////////////////////////////////////
  this.init = function() {
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
  ////////////////////////////////////////////////////////////////////////////
  this.destroy = function() {
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
  ////////////////////////////////////////////////////////////////////////////
  this.getData = function(time) {
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
  ////////////////////////////////////////////////////////////////////////////
  this.getMetaData = function() {
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
  ////////////////////////////////////////////////////////////////////////////
  this.getTimeRange = function(varname) {
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
  ////////////////////////////////////////////////////////////////////////////
  this.getSpatialRange = function(varname) {
  };

  ////////////////////////////////////////////////////////////////////////////
  /**
   * Should be implemented by a concrete class
   */
    ////////////////////////////////////////////////////////////////////////////
  this.getScalarRange = function(varname) {
  };
};

inherit(geoModule.layerSource, vglModule.object);
