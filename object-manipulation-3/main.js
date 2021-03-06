console.log('Lodash is loaded:', typeof _ !== 'undefined');

/*
  Create total of 4 functions: creating the deck, dealing players, summing player scores, and finding the winner
  createdeck = parameter of suit and rank. Use two for loop for suit and rank and push card into the deck. Use lodash _.shuffle to shuffle cards
  dealplayers = parameter of cards. Use two for loops and push deck[z] into players hand. Use splice method on deck to replace 1 element at index i. Return players
  playerscores = use two for loops. Set var total score to 0. if rank = ace, 11 points. if king, queen, or ace, 10 points.
  otherwise, rank. set players[i].score = totalscore.
  findwinner = declare var highest and set it to 0. if players[i] score is greater than highest, set highest to players[i].score.
  if highest is equal to players[i].score, push players[i] into winners
  display winner with some string text
*/

var players = [
  { name: 'playerOne', hand: [], score: 0 },
  { name: 'playerTwo', hand: [], score: 0 },
  { name: 'playerThree', hand: [], score: 0 },
  { name: 'playerFour', hand: [], score: 0 }
];

var deck = [];
var suit = ['hearts', 'diamonds', 'clubs', 'spades'];
var rank = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

var highest = 0;
var winner = '';
var winners = [];

function createDeck(suit, rank) {
  for (var i = 0; i < suit.length; i++) {
    for (var z = 0; z < rank.length; z++) {
      var card = {
        suit: suit[i],
        rank: rank[z]
      };
      deck.push(card);
    }
  }
  deck = _.shuffle(deck);
  return deck;
}

function dealPlayers(cards) {
  var deck = createDeck(suit, rank);
  for (var i = 0; i < suit.length; i++) {
    for (var z = 0; z < cards; z++) {
      players[i].hand.push(deck[z]);
      deck.splice(i, 1);
    }
  }
  return players;
}

function playerScores(players) {
  players = dealPlayers(2);
  for (var i = 0; i < players.length; i++) {
    var totalScore = 0;
    for (var z = 0; z < players[i].hand.length; z++) {
      if (players[i].hand[z].rank === 'Ace') {
        totalScore += 11;
      } else if (players[i].hand[z].rank === 'King') {
        totalScore += 10;
      } else if (players[i].hand[z].rank === 'Queen') {
        totalScore += 10;
      } else if (players[i].hand[z].rank === 'Jack') {
        totalScore += 10;
      } else {
        totalScore += players[i].hand[z].rank;
      }
    }
    players[i].score = totalScore;
  }
  return players;
}

function findWinner(players) {

  players = playerScores(players);

  for (var i = 0; i < players.length; i++) {
    if (highest < players[i].score) {
      highest = players[i].score;
      winner = players[i];
    } else if (highest === players[i].score) {
      winners.push(players[i]);
      i++;
    }
  }
  console.log(players);
  console.log('The winner is ' + winner.name + ' with a total score of ' + winner.score + '!');
}
findWinner(players);
