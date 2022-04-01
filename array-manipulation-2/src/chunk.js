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
