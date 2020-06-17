/*
 * /!\ À faire seul !
 *
 * Retourne un boolean qui indique si le tableau cards contient une couleur (5 cartes de même type), exemple :
 * cards = ["As", "10s", "Js", "Qs", "Ah", "2s", "3c"] isFlushed(cards) retournera true
 * cards = ["As", "10d", "Jd", "Qs", "2h", "3c", "5d"] isFlushed(cards) retournera false
 *
 * Attention, une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte : 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte : d => ♦, c => ♣, h => ♥, s => ♠
 */
import { occurencesType } from "./occurences.js";
 
// Check whether or not there's a flush
const isAFlush = cards => {
  let bool = false;

  Object.entries(occurencesType(cards)).forEach(array => {
    let occurence = array[1];
    
    if (occurence >= 5) {
      bool = true;
    }
  });
  return bool;
}

export { isAFlush };