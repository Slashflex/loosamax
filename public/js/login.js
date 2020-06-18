/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/profile');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) { 
      window.setTimeout(() => {
        location.assign('/');
      }, 2000);
    }
    showAlert('success', 'Logged out successfully!');
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};

export const signup = async (name, email, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/signup',
      data: {
        name,
        email,
        password,
        passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Signed in successfully!');
      window.setTimeout(() => {
        location.assign('/profile');
      }, 1500);
    }
    console.log(res);
  } catch (err) {
    showAlert('error', err);
    console.log(err);
  }
};

export const passwordForgot = async email => {
  try {
    const res = await axios({
      method: 'POST',
      url: `/api/v1/users/forgotPassword`,
      data: {
        email: email
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', `Email was sent to ${email}`);
      window.setTimeout(() => {
        location.assign('/');
      }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const passwordReset = async (token, password, passwordConfirm) => {
  try {
    const res = await axios({
      method: 'PATCH',
      url: `/api/v1/users/resetPassword/${token}`,
      data: {
        password: password,
        passwordConfirm: passwordConfirm
      }
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Your password has been reset!');
      location.reload(true);
    }
    location.assign('/');
  } catch (err) {
    console.log(err);
    showAlert('error', err.response.data.message);
  }
};