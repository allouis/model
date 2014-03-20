var Obstruct = require('obstruct');
var minivents = require('minivents');
var createGetter = require('./lib/createGet');
var createSetter = require('./lib/createSet');
var noop = function () {};

var Model = Obstruct.extend({
  constructor: function (data) {
    minivents(this);
    var _attr = Object.create({}, this.defaults);
    delete this.defaults;
    for (var prop in data) {
      _attr[prop] = data[prop];
      Object.defineProperty(this, prop, {
        get: createGetter(_attr, prop),
        set: createSetter(_attr, prop, this)
      });
    }
    this.init(data);
  },
  init: noop,
  defaults: {}
});

module.exports = Model;
