/* exported drop */
function drop(array, count) {
  var result = [];
  for (var i = count; i < array.length; i++) {
    result.push(array[i]);
  } if (array.length === 0) {
    return [];
  }
  return result;
}

// declare an empty array for var result
// use a for loop and set initialization to count
// use push() to push items into the array
// use if statement to return an empty array if the array length is 0
// return array
