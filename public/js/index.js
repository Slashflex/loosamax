/* eslint-disable */
// import '@babel/polyfill';
import { dealer } from './dealer.js';
import { login, logout, signup, passwordForgot, passwordReset, sendReward } from './login.js';
import { updateSettings } from './updateSettings.js';
import { showAlert } from './alerts.js';

// DOM ELEMENTS
const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const signupForm = document.getElementById('signup-form');
const passwordForgotForm = document.querySelector('#passwordForgotForm');
const passwordResetForm = document.querySelector('#passwordResetForm');
const rewardForm = document.querySelector('.form--reward');

// On page Load
window.addEventListener('load', () => {
  const play = document.querySelector('.buttonPlay');
  const playerImg = document.querySelectorAll('.test');
  const openNav = document.querySelector('.first-button');
  const addOpen = document.querySelector('.animated-icon1');

  openNav.addEventListener('click', (e) => {
    addOpen.classList.toggle('open');
  });

  if (window.location.pathname == '/') {
    playerImg.forEach((e) => {
      e.src = 'images/back.png';
    });
    // On click on play
    play.addEventListener('click', (e) => {
      e.preventDefault();
      const wrappers = document.querySelectorAll('.card-container');

      wrappers.forEach((e) => e.classList.add('flip')); // Adds flip card for each card container

      dealer();
    });
  }
});

if (rewardForm)
  document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    sendReward(email);
  });

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (signupForm) {
  document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('passwordConfirm').value;
    signup(name, email, password, passwordConfirm);
  });
}

if (logOutBtn)
  logOutBtn.addEventListener('click', () => {
    logout();
  });

if (userDataForm)
  userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    updateSettings(form, 'Your informations have been');
  });

if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await updateSettings({ passwordCurrent, password, passwordConfirm }, 'Password');

    document.querySelector('.btn--save-password').textContent = 'Save password';
    document.getElementById('password-current').value = '';
    document.getElementById('password').value = '';
    document.getElementById('password-confirm').value = '';
  });

const alertMessage = document.querySelector('body').dataset.alert;
if (alertMessage) showAlert('success', alertMessage, 15);

if (passwordForgotForm) {
  passwordForgotForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#passwordForgotEmail').value;

    passwordForgot(email);
  });
}

if (passwordResetForm) {
  passwordResetForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const token = document.querySelector('#passwordResetToken').value;
    const password = document.querySelector('#newPassword').value;
    const passwordConfirm = document.querySelector('#newPasswordConfirm').value;

    passwordReset(token, password, passwordConfirm);
  });
}
