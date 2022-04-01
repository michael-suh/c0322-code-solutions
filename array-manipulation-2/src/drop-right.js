/* exported dropRight */
function dropRight(array, count) {
  var result = [];
  for (var i = 0; i < array.length - count; i++) {
    result.push(array[i]);
  } if (array.length < count) {
    result = array;
  }
  return result;
}

// declare empty array for var result
// use a for loop and set condition to i is less than array.length - count
// push array[i]
// use if statement to see if count is greater than the array length.
// if yes, result = array
// return output
