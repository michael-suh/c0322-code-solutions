/* exported capitalizeWords */
function capitalizeWords(string) {
  var newstr = '';
  var capitalize = true;
  for (var i = 0; i < string.length; i++) {
    if (capitalize) {
      newstr += string[i].toUpperCase();
      capitalize = false;
    } else if (string[i] === ' ') {
      newstr += string[i];
      capitalize = true;
    } else {
      newstr += string[i].toLowerCase();
    }
  }
  return newstr;
}

// declare an empty string to the var newstr
// declare a var with a boolean value
// use a for loop to loop through the each letter of a string
// use a conditional to see if capitalization is needed.
// when capitalization is needed, use toUpperCase to capitalize the letter
// when capitalization is not needed, use toLowerCase to lowercase the letter
// when there is an empty space, set boolean to true since the next character needs to be capitalized.
