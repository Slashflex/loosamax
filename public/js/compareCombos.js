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
import { VALUES_NAME, TYPES_NAME } from './utils.js';
import { getCardName } from './dealer.js';
import { isAPair } from './isAPair.js';
import { isAFull } from './isAFull.js';
import { isAFlush } from './isAFlush.js';
import { valuePower, typePower } from './orderCards.js';

const victory = (isHeroWin, cards) => {
  const heroImg = document.querySelector('.user-photo');
  const heroWin = document.querySelector('.winner');
  const vilainWinningHand = document.getElementById('vilainHand');
  const heroWinningHand = document.getElementById('heroHand');
  const rewardForm = document.querySelector('.reward-form');
  const playButton = document.querySelector('.buttonPlay');

  if (isHeroWin) {
    heroImg.style.display = 'none';
    heroWin.style.display = 'block';
    heroWinningHand.innerHTML = cards;
    vilainWinningHand.innerHTML = '';
    playButton.style.display = 'none';
    rewardForm.style.display = 'block';
  } else {
    heroImg.style.display = 'block';
    heroWin.style.display = 'none';
    heroWinningHand.innerHTML = '';
    vilainWinningHand.innerHTML = cards;
    rewardForm.style.display = 'none';
  }
}

const compareCombos = (cards1, cards2) => {

  let scoreCards1 = scoreCards(cards1);
  let scoreCards2 = scoreCards(cards2);
  const vilainName = document.querySelector('.vilain-pic');

  if (scoreCards1 < scoreCards2) {
    vilainName.src = 'images/winner.png';
    victory(false, cards2);
    return cards2;
  } else if (scoreCards1 > scoreCards2) {
    vilainName.src = 'images/74.jpg';
    victory(true, cards1);
    return cards1;
  } else {
    for (let i = 0; i < cards1.length; i++) {
      if (valuePower(cards1[i]) > valuePower(cards2[i])) {
        vilainName.src = 'images/74.jpg';
        victory(true, cards1);
        return cards1;
      } else if (valuePower(cards1[i]) < valuePower(cards2[i])) {
        victory(false, cards2);
        vilainName.src = 'images/winner.png';
        return cards2;
      } else if (typePower(cards1[i]) < typePower(cards2[i])) {
        victory(false, cards2);
        vilainName.src = 'images/winner.png';
        return cards2;
      } else if (typePower(cards1[i]) > typePower(cards2[i])) {
        vilainName.src = 'images/74.jpg';
        victory(true, cards1);
        return cards1;
      }
    }
  }
};

const scoreCards = (cards) => {
  if (isAFull(cards)) {
    return 4;
  } else if (isAFlush(cards)) {
    return 3;
  } else if (isAPair(cards)) {
    return 2;
  } else {
    return 1;
  }
};

export { compareCombos, scoreCards };
