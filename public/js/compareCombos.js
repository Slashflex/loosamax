/*
 * /!\ À faire à la fin, seul ou en groupe !
 * Les tableaux cards1 et cards2 contiennent 5 cartes. L'objectif est de retourner le tableau contenant le 
 * meilleur combos :
 * 
 * Dans notre jeu, il existe 4 combos possible (du plus fort au moins fort):
 * - Le full (3 types identiques et deux types identiques : ["As", "Kd", "Ah", "Ks", "Ac"])
 * - La flush (5 types identiques : ["As", "6s", "3s", "Ks", "Js"])
 * - La pair (2 valeurs identiques : ["As", "6s", "Ad", "Ks", "Js"])
 * - La hauteur (aucun des combos précédents, à ce moment c'est la carte la plus forte qui décide du combos le plus fort)
 * 
 */
import { isAPair } from './isAPair.js';
import { isAFull } from './isAFull.js';
import { isAFlush } from './isAFlush.js';
import { valuePower, typePower } from './orderCards.js';

const compareCombos = (cards1, cards2) => {
  let scoreCards1 = scoreCards(cards1)
  let scoreCards2 = scoreCards(cards2)
  const heroName = document.querySelector('.hero-pic');
  const vilainName = document.querySelector('.vilain-pic');

  // vilainName.style.width = '80%';
  // heroName.style.width = '80%';
  
  if(scoreCards1 < scoreCards2) {
    vilainName.src = 'images/winner.png';
    heroName.src = 'images/64.jpg';
    return cards2
  } else if (scoreCards1 > scoreCards2) {
    vilainName.src = 'images/74.jpg';
    heroName.src = 'images/winner.png';
    return cards1
  } else {
    for (let i = 0; i < cards1.length; i++) {
      if (valuePower(cards1[i]) > valuePower(cards2[i])) {
        vilainName.src = 'images/74.jpg';
        heroName.src = 'images/winner.png';
        return cards1;
      } else if (valuePower(cards1[i]) < valuePower(cards2[i])) {
        heroName.src = 'images/64.jpg';
        vilainName.src = 'images/winner.png';
        return cards2;
      } else if (typePower(cards1[i]) < typePower(cards2[i])) {
        heroName.src = 'images/64.jpg';
        vilainName.src = 'images/winner.png';
        return cards2;
      } else if (typePower(cards1[i]) > typePower(cards2[i])) {
        vilainName.src = 'images/74.jpg';
        heroName.src = 'images/winner.png';
        return cards1;
      } 
    }
  }
}

const scoreCards = cards => {
  if (isAFull(cards)) {
    return 4
  } else if (isAFlush(cards)) {
    return 3
  } else if (isAPair(cards)) {
    return 2
  } else {
    return 1
  }
}

export { compareCombos, scoreCards };