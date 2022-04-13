console.log('Lodash is loaded:', typeof _ !== 'undefined');

// create collection

var players = [
  { name: 'playerOne', hand: [], score: 0 },
  { name: 'playerTwo', hand: [], score: 0 },
  { name: 'playerThree', hand: [], score: 0 },
  { name: 'playerFour', hand: [], score: 0 }
];

// create collection of 52 objects

var deck = [];
var suit = ['hearts', 'diamonds', 'clubs', 'spades'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

function createDeck(value) {
  var card = {};
  for (var i = 0; i < suit.length; i++) {
    for (var z = 0; z < rank.length; z++) {
      card.suit = suit[i];
      card.rank = rank[z];
      deck.push(card);
      card = {};
    }
  }
}
createDeck();

// shuffle deck

var shuffled = _.shuffle(deck);

function dealCards(player) {
  for (var i = 0; i < 2; i++) {
    player.hand.push(shuffled[i]);
    shuffled.splice(0, 1);
  }
}

function dealPlayers(deal) {
  for (var i = 0; i < players.length; i++) {
    dealCards(players[i]);
  }
  return players;
}

function playerScores(event) {
  dealPlayers(players);
  var totalScore = 0;
  for (var s = 0; s < players.length; s++) {
    for (var p = 0; p < players[s].hand.length; p++) {
      if (players[s].hand[p].rank === 'Ace') {
        totalScore += 11;
      } else if (players[s].hand[p].rank === 'King' || players[s].hand[p].rank === 'Queen' || players[s].hand[p].rank === 'Jack') {
        totalScore += 10;
      } else {
        totalScore += players[s].hand[p].rank;
      }
    }
    players[s].score = totalScore;
  }
  return players;
}

function findWinner(event) {
  playerScores(event);
  var winner = {};
  winner.name = event[0].name;
  winner.score = event[0].score;
  for (var i = 1; i < players.length; i++) {
    if (event[i].score > winner.score) {
      winner.name = event[i].name;
      winner.score = event[i].score;
    }
  }
  console.log(players);
  console.log('The winner is ' + winner.name + ' with a total score of ' + winner.score + '! Congratulations ' + winner.name + '!');
}
findWinner(players);
