import {
  DECK_52,
  VALUES_NAME,
  TYPES_NAME,
  imagesClass,
  shuffle
} from './utils.js';
import { bestCombo } from './bestCombo.js';
import { compareCombos } from './compareCombos.js';

// Get the file name of a card: 'Ac' => return 'ace_of_clubs.png'
const getCardName = card => {
  let value = card.slice(0, card.length - 1);
  let type = card.charAt(card.length - 1);
  return `images/cards/${[VALUES_NAME[value], TYPES_NAME[type]].join(
    '_of_'
  )}.png`;
}

// Draws 9 card to the game, 2 for each players + 5 for the flop
const dealer = () => {
  const deck = shuffle(DECK_52);
  let tableCards = deck.slice(0, 9);
  const imgSrc = tableCards.map((card) => getCardName(card));

  // Build images file names 
  for (let i = 0; i < imagesClass.length; i++) {
    imagesClass[i].src = imgSrc[i];
  }

  const heroCards = [tableCards[0], tableCards[1], tableCards.slice(4, 9)].flat();
  const vilainCards = [tableCards[2], tableCards[3], tableCards.slice(4, 9)].flat();

  const bestHero = bestCombo(heroCards, 'Hero');
  const bestVilain = bestCombo(vilainCards, 'Vilain');

  console.log(compareCombos(bestHero, bestVilain))
};

export { dealer };