/* exported numVowels */
function numVowels(string) {
  var numberOfVowels = 0;
  for (var i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() === 'A' || string[i].toUpperCase() === 'E' || string[i].toUpperCase() === 'I' || string[i].toUpperCase() === 'O' || string[i].toUpperCase() === 'U') {
      numberOfVowels += 1;
    }
  }
  return numberOfVowels;
}

// Assign value 0 to var numberOfVowels
// use a for loop to loop through each characters in a string
// use .toUpperCase() to check if each character is equal to vowels
// add 1 to var numberOfVowels each time there is a vowel present
// return numberOfVowels
