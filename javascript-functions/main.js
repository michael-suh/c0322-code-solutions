function covertMinutestoSeconds(minutes) {
  var sum = minutes * 60;
  return sum;
}
var covertMinutestoSecondsResult = covertMinutestoSeconds(5);
console.log(covertMinutestoSecondsResult);

function greet(name) {
  var sum = 'Hey, ' + name;
  return sum;
}
var greetResult = greet('Beavis');
console.log(greetResult);

function getArea(width, height) {
  var sum = width * height;
  return sum;
}
var getAreaResult = getArea(17, 42);
console.log(getAreaResult);

function getFirstName(person) {
  var sum = person.firstName;
  return sum;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log(getFirstNameResult);

function getLastElement(array) {
  var sum = array[array.length - 1];
  return sum;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log(getLastElementResult);
