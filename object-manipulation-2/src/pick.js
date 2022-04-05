/* exported pick */
function pick(source, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    if (source[keys[i]] !== undefined) {
      result[keys[i]] = source[keys[i]];
    }
  }
  return result;
}

// declare an empty object literal to var result
// use a for loop to loop through keys.length
// use if statement to see if there are any undefined keys in source
// if it does not equal to undefined, set result at keys at i equal to source at keys at i
// return output object literal
