const path = require('path');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.alerts = (req, res, next) => {
  const { alert } = req.query;
  if (alert === 'booking')
    res.locals.alert =
      'Your booking was successful! Booked tour will show up here shortly!';
  next();
};

// get login form
exports.getLoginForm = (req, res) => {
  res.status(200).render('login', {
    title: 'Log into your account'
  });
};

// get sign up form
exports.getSignupForm = catchAsync(async (req, res, next) => {
  res.status(200).render('signup', {
    title: 'Sign up for an account'
  });
});

// // get profile page
exports.getAccount = (req, res) => {
  res.status(200).render('profile', {
    title: 'Your account'
  });
};

exports.updateUserData = catchAsync(async (req, res, next) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.user.id,
    {
      name: req.body.name,
      email: req.body.email
    },
    {
      new: true,
      runValidators: true
    }
  );

  res.status(200).render('account', {
    title: 'Your account',
    user: updatedUser
  });
});

exports.getIndex = catchAsync(async (req, res, next) => {
  res.status(200).render('index', {
    title: 'Loosamax'
  });
});

// exports.getApiDoc = catchAsync(async (req, res, next) => {
//   res.status(200).sendFile(path.join(__dirname, './../public/api-doc.html'), {
//     title: 'Api documentation'
//   });
// });

// get forgot password form
exports.getPasswordForgot = (req, res) => {
  res.status(200).render('passwordForgotForm', {
    title: 'Renew password'
  });
};

// get reset password form
exports.getPasswordReset = (req, res) => {
  res.status(200).render('passwordResetForm', {
    title: 'Reset password'
  });
};