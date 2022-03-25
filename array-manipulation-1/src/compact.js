/* exported compact */
function compact(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
}

// create an empty array for variable result
// create a for loop that runs through array.length
// create a conditional using Boolean to omit any falsy values in an array.
// push values in array only if they are truthy.
// return output array
