/* exported getValues */
function getValues(object) {
  var result = [];
  for (var key in object) {
    result.push(object[key]);
  }
  return result;
}

// create an empty array for variable result
// create a for in loop with var key in object
// push object[key] into results array
// return output array
