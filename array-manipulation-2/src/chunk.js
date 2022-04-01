/* exported chunk */
function chunk(array, size) {
  var result = [];
  var newArray = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = 0; i < array.length; i++) {
    if (newArray.length === size) {
      result.push(newArray);
      newArray = [];
    }
    newArray.push(array[i]);
  }
  result.push(newArray);
  return result;
}

// declare two empty arrays with two different var
// use if statement to see if array.length = 0 and if it is, return an empty array
// use a for loop to loop through each items in the array
// use if statement to set the newarray.length equal to size
// if it equals to size, push new array
// set new array equal to an empty array
// if not, push array[i] into newarray
// push new array into the result array
// return output
