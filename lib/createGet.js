function createGet(store, prop) {
  return function get() {
    return store[prop];
  };
}
module.exports = createGet;
