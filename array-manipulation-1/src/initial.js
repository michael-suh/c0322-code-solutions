/* exported initial */
function initial(array) {
  var result = [];
  for (var i = 0; i < array.length - 1; i++) {
    result.push(array[i]);
  }
  return result;
}

// create an empty array for variable result
// create a for loop with condition array.length - 1 to exclude last element in an array
// push array[i] into variable result
// return output array;
