/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une pair, exemple :
 * cards = ["As", "Ad", "Ac", "Qs", "Qh", "2h", "3c"] isAFull(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isAFull(cards) retournera false
 *
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : s => ♠, h => ♥, c => ♣, d => ♦
 */

import { occurencesValue } from './occurences.js';

const isAFull = (cards) => {

  const occ = occurencesValue(cards);
  let two = false;
  let three = false;

  for (const [key, value] of Object.entries(occ)) {
    
		if (value == 2) {
      two = true;
    }
    
    if (value == 3) {
      three = true;
		}
  }
  return two && three;
};

export { isAFull };