/* exported omit */
function omit(source, keys) {
  var result = {};
  var key = true;
  for (var keyOfSources in source) {
    for (var i = 0; i < keys.length; i++) {
      if (keyOfSources === keys[i]) {
        key = false;
      }
    }
    if (key === true) {
      result[keyOfSources] = source[keyOfSources];
    }
    key = false;
  }
  return result;
}
