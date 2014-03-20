function createSet(store, prop, obj) {
  var old;
  return function set(val) {
    old = store[prop];
    store[prop] = val;
    if (old !== val) {
      obj.emit('change:'+prop, val);
      obj.emit('change');
    }
  };
}
module.exports = createSet;
