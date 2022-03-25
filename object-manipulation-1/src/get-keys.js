/* exported getKeys */
function getKeys(object) {
  var result = [];
  for (var key in object) {
    result.push(key);
  }
  return result;
}

// create an empty array for variable result
// create a for in loop with var key in object
// push key into the result array
// return output array
