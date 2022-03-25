/* exported reverse */
function reverse(array) {
  var reverse = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}

// create an empty array for variable reverse
// create a for loop and reverse initialization and condition to start from end and end with start.
// push array[i] into variable reverse
// return output array
