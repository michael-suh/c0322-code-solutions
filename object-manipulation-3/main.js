console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  { name: 'playerOne', hand: [], score: 0 },
  { name: 'playerTwo', hand: [], score: 0 },
  { name: 'playerThree', hand: [], score: 0 },
  { name: 'playerFour', hand: [], score: 0 }
];

var deck = [];
var suit = ['hearts', 'diamonds', 'clubs', 'spades'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 'Jack', 'Queen', 'King'];

function createDeck(value) {
  var card = {};
  for (var i = 0; i < suit.length; i++) {
    for (var z = 0; z < rank.length; i++) {
      card.suit = suit[i];
      card.rank = rank[z];
      deck.push(card);
      card = {};
    }
  }
}
createDeck();
