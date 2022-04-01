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
