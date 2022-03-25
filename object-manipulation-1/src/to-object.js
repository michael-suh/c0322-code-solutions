/* exported toObject */
function toObject(keyValuePair) {
  var result = {};
  result[keyValuePair[0]] = keyValuePair[1];
  return result;
}

// create an empty object literal with variable result
// make keyvaluepair[0] at result equal to keyvaluepair[1]
// return output object literal
