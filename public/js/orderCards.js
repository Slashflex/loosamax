/*
 * /!\ À essayer seul, me mp si trop compliqué !
 * Le but de cette fonction est de réorganiser un tableau de cartes de la meilleur à la moins bonnes :
 * cards = ['Ad', '7h', '8d', 'As', 'Qs'] alors orderCards(cards) retournera ['As', 'Ad', 'Qs', '8d', '7h']
 *
 * Une carte est une chaîne de caractère qui contient deux parties :
 * - La valeur de la carte (ordre croissant): 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A
 * - Le type de la carte (ordre croissant) : d => ♦, c => ♣, h => ♥, s => ♠
 *
 * On considère que la valeur de la carte prime sur le type de la carte
 */

const VALUES_POWER = {
  A: 14,
  K: 13,
  Q: 12,
  J: 11,
  '1': 10,
  '9': 9,
  '8': 8,
  '7': 7,
  '6': 6,
  '5': 5,
  '4': 4,
  '3': 3,
  '2': 2,
};
const TYPES_POWER = {
  s: 4,
  h: 3,
  c: 2,
  d: 1,
};

const orderCards = cards => {
  return cards
    .sort((a, b) => {
      if (valuePower(a) < valuePower(b)) {
        return -1;
      } else if (valuePower(a) > valuePower(b)) {
        return 1;
      } else {
        if (typePower(a) < typePower(b)) {
          return -1;
        } else if (typePower(a) > typePower(b)) {
          return 1;
        }
      }
    })
    .reverse();
}

const valuePower = card => {
  let key = card.charAt(0);
  return VALUES_POWER[key];
}
const typePower = card => {
  let key = card.charAt(card.length - 1);
  return TYPES_POWER[key];
}

export { orderCards, valuePower, typePower };