var Obstruct = require('obstruct');
var minivents = require('minivents');
var createGetter = require('./lib/createGet');
var createSetter = require('./lib/createSet');
var merge = require('./lib/merge');
var noop = function () {};

var Model = Obstruct.extend({
  constructor: function (data) {
    minivents(this);
    data = merge({}, this.defaults, data || {});
    var _attr = {};
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        _attr[prop] = data[prop];
        Object.defineProperty(this, prop, {
          get: createGetter(_attr, prop),
          set: createSetter(_attr, prop, this)
        });
      }
    }
    this.init(data);
  },
  init: noop,
  defaults: {}
});

module.exports = Model;
