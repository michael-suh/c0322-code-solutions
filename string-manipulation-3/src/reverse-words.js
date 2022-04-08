/* exported reverseWords */
function reverseWords(string) {
  return string.split('').reverse().join('').split(' ').reverse().join(' ');
}
// split each word from string
// reverse every word
// join them together
// repeat the first three steps except make a space for split and join
