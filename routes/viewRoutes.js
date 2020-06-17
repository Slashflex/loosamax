const express = require('express');
const {
  alerts,
  getIndex,
  // getApiDoc
} = require('../controllers/viewsController');

const router = express.Router();

router.use(alerts);

router.get('/', getIndex);

module.exports = router;