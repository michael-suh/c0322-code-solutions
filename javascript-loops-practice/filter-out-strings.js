/* exported filterOutStrings */
function filterOutStrings(values) {
  var filteredOut = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filteredOut.push(values[i]);
    }
  }
  return filteredOut;
}
