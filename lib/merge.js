function merge(target /* ...objects*/) {
  var objects = Array.prototype.slice.call(arguments, 1);
  objects.forEach(function (obj) {
    for (var prop in obj) {
      target[prop] = obj[prop];
    }
  });
  return target;
}
