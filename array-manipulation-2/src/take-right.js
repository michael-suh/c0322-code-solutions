/* exported takeRight */
function takeRight(array, count) {
  var result = [];
  for (var i = array.length - count; i < array.length; i++) {
    result.push(array[i]);
  } if (array.length < count) {
    result = array;
  }
  return result;
}

// declare empty array for var result
// use a for loop and set initialization to array.length - count
// push array[i]
// use if statement to see if count is greater than the array length.
// if yes, result = array
// return output
