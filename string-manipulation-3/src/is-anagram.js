/* exported isAnagram */
function isAnagram(firstString, secondString) {
  firstString = firstString.split(' ').join('');
  secondString = secondString.split(' ').join('');
  if (firstString === secondString) {
    return true;
  } else if (firstString.length !== secondString.length) {
    return false;
  }
  return firstString.split('').sort().join('') === secondString.split('').sort().join('');
}

// use split and join method to both parameters to account for spaces
// use if statement to return true if they equal to each other
// if not, return false
// split string by each character, sort them, then rejoin them if they equal to each other
