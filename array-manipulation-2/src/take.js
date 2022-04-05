/* exported take */
function take(array, count) {
  var result = [];
  for (var i = 0; i < count; i++) {
    result.push(array[i]);
  }
  if (array.length === 0) {
    return [];
  }
  return result;
}

// declare an empty array for var result
// use a for loop to loop through the array and run it until i is less than count
// push array[i] into the result variable
// use if statement to return an empty array if array length is 0
// return output
