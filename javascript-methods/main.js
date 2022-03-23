var num1 = 3;
var num2 = 4;
var num3 = 5;
var maximumValue = Math.max(num1, num2, num3);
console.log('value of maxiumValue:', maximumValue);

var heroes = ['superman', 'batman', 'spiderman', 'ironman'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);

var randomHero = (heroes[randomIndex]);
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'Animal Farm',
    author: 'George Orwell'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
  }
];

var lastBook = library.pop(library);
console.log('value of lastBook:', lastBook);
var firstBook = library.shift(library);
console.log('value of firstBook:', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr.Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library array:', library);

var fullName = 'Michael Suh';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
