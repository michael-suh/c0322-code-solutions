/* exported tail */
function tail(array) {
  var result = [];
  for (var i = 1; i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

// create an empty array for variable result
// use a for loop and set the initialization to i = 1, since first element in the array has to be excluded.
// push array[i] to variabe result
// return output array
