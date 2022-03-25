/* exported capitalize */
function capitalize(word) {
  var capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  return capitalized;
}
// create a variable to concatenate first character of a string and the rest
// make first character of a string a capital letter by using charAt(0) and .toUpperCase
// lowercase & concatenate with the rest of the word using slice(1) .toLowerCase()
// return variable
