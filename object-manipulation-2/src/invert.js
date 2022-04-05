/* exported invert */
function invert(source) {
  var result = {};
  for (var keys in source) {
    result[source[keys]] = keys;
  }
  return result;
}

// declare var result to an empty object literal
// use for in loop to find keys in source
// assign values at source keys into result
// return output
