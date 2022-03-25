/* exported isVowel */
function isVowel(char) {
  if (char.toUpperCase() === 'A' || char.toUpperCase() === 'E' || char.toUpperCase() === 'I' ||
  char.toUpperCase() === 'O' || char.toUpperCase() === 'U') {
    return true;
  } else {
    return false;
  }
}

// create a conditional to see if char === A,E,I,O or U.
// make every char to uppercase using toUpperCase and return true if they match A,E,I,O, or U.
// Otherwise, return false
