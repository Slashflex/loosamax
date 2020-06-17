/* eslint-disable */
import '@babel/polyfill';
import './bestCombo.js';
import './compareCombos.js';
import './isAFlush.js';
import './isAFull.js';
import './isAPair.js'
import './occurences.js'
import './orderCards.js'
import './utils.js'
import { dealer } from './dealer.js';

const heroName = document.querySelector('.hero-name');
const vilainName = document.querySelector('.vilain-name');

// On page Load
window.addEventListener('load', () => {
  const play = document.querySelector('.button');
  const playerImg = document.querySelectorAll('.test');
  playerImg.forEach(e => {
    e.src = 'images/back.png';
  });
  // heroName.src = 'images/64.jpg';
  // vilainName.src = 'images/74.jpg';
  // On click on play
  play.addEventListener('click', (e) => {
    e.preventDefault();
    const wrappers = document.querySelectorAll('.card-container');
    const playerCards = document.querySelector('.player-2-cards');
    // playerImg.forEach(e => {
    //   e.style.transform = 'rotateX(360deg)';
    //   // e.style.transition = 'all 1.5s';
    // });
    wrappers.forEach((e) => e.classList.add('flip')); // Adds flip card for each card container
    
    dealer();
  });
});
