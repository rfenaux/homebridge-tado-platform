/**
 * v6
 *
 * @url https://github.com/rfenaux/homebridge-tado-platform
 *
 **/

'use strict';

module.exports = function (homebridge) {
  let TadoPlatform = require('./src/platform.js')(homebridge);
  homebridge.registerPlatform('homebridge-tado-platform-rf', 'TadoPlatform', TadoPlatform, true);
};
