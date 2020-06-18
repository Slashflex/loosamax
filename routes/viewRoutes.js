const express = require('express');
const {
  alerts,
  getIndex,
  getLoginForm,
  getAccount,
  getSignupForm,
  updateUserData,
  getApiDoc,
  getPasswordReset,
  getPasswordForgot
} = require('../controllers/viewsController');
const { isLoggedIn, protect } = require('../controllers/authController');

const router = express.Router();

router.use(alerts);

router.get('/', isLoggedIn, getIndex);

router.get('/login', isLoggedIn, getLoginForm);
router.get('/profile', protect, getAccount);
router.get('/signup', isLoggedIn, getSignupForm);

router.post('/submit-user-data', protect, updateUserData);

// router.get('/api-doc', getApiDoc);

// password forgot
router.get('/forgot', getPasswordForgot);

// password reset route
router.get('/reset', getPasswordReset);

module.exports = router;