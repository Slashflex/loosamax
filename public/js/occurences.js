/*
 * /!\ À essayer seul, me mp si trop compliqué !
 *
 * Le but de cette fonction est de déterminer le nombre de cartes ayant la même valeur dans un tableau :
 * cards = ['Ad', '7h', '8d', 'As', 'Qs'] alors occurences(cards)
 * retournera { as: 2, seven: 1, height: 1, queen: 1 }
 *
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 */
import { CARDS, CARDS_TYPE } from "./utils.js";


// Check for value occurence
const occurencesValue = cards => {
  let occ = {};

  cards
    .map(card =>
      card
        .split("")
        .slice(0, card.length - 1)
        .join()
    )
    .forEach(val => {
      Object.entries(CARDS).forEach(card => {
        let key = card[0];
        let value = card[1];

        if (value == val) {
          if (occ[key]) {
            occ[key] += 1;
          } else {
            occ[key] = 1;
          }
        }
      });
    });

  return occ;
};

const occurencesType = cards => {
  let occ = {};

  cards
    .map(card =>
      card.charAt(card.length -1)
    )
    .forEach(typ => {
      Object.entries(CARDS_TYPE).forEach(card => {
        let key = card[0];
        let type = card[1];

        if (type == typ) {
          if (occ[key]) {
            occ[key] += 1;
          } else {
            occ[key] = 1;
          }
        }
      });
    });
  return occ;
};

const occurences = cards => {
	let cardsValue = cards.map(card => card.slice(0, card.length - 1))
	let count = new Object()
	let nbOcc = 0
	for (let [key, value] of Object.entries(CARDS)) {
		nbOcc = nbOccurences(cardsValue, value)
		if (nbOcc > 0) count[key] = nbOcc
	}
	return count
}

const allIndexOf = (arr, value) => {
	if (arr.indexOf(value) >= 0) {
		let res = []
		for( let i = arr.indexOf(value); i >= 0; i = arr.indexOf(value,i+1) ) {
			res.push(i)
		}
		return res
	}
	else return false
}

// Get the number of occurences
const nbOccurences = (arr, value) => {
	let indexes = allIndexOf(arr, value)
	if (indexes != false) return indexes.length
	else return false
}

export { occurencesValue, occurencesType, occurences };