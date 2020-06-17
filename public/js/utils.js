const CARD_VALUE = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'].reverse()
const CARD_TYPE = ['d', 'c', 'h', 's'].reverse()
const VALUES_NAME = {
	'2': '2', '3': '3', '4': '4', '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', '10': '10',
	'J': 'jack', 'Q': 'queen', 'K': 'king', 'A': 'ace'
}
const TYPES_NAME = {'d': 'diamonds', 'c': 'clubs', 'h': 'hearts', 's': 'spades'}
const CARDS = {
	as: 'A', king: 'K', queen: 'Q', jack: 'J',
	ten: '10', nine: '9', height: '8',
	seven: '7', six: '6', five: '5',
	four: '4', three: '3', two: '2'
}
const CARDS_TYPE = {
	'd': 'd', 'c': 'c', 'h': 'h', 's': 's'
}
// Build the full card game from CARD_VALUE & CARD_TYPE (size => 52)
const DECK_52 = CARD_VALUE.map(value => CARD_TYPE.map(type => value + type)).flat()

// Retrieve class and ids from the DOM
const imagesClass = [
  document.querySelector('.player1-card-1'),
  document.querySelector('.player1-card-2'),
  document.querySelector('.player2-card-1'),
  document.querySelector('.player2-card-2'),
  document.getElementById('card0'),
  document.getElementById('card1'),
  document.getElementById('card2'),
  document.getElementById('card3'),
  document.getElementById('card4')
];

// Shuffle array
const shuffle = (test) => {
  let deck = test.slice(0, test.length)
  let shufDeck = []
  let index = 0
  let size = deck.length
  for (var j = 0; j < size; j++) {
	index = Math.floor(Math.random() * deck.length)
	shufDeck.push(deck[index])
	deck.splice(index, 1);
  }
  return shufDeck
}

export { VALUES_NAME, TYPES_NAME, CARDS, CARDS_TYPE, DECK_52, imagesClass, shuffle };