const router = require('express').Router();
const home = require('../public/index')
// const exercise = require('../public/exercise')
// const Parks = require('../models/parks');

router.get('/', (req, res, next) => {
    res.render(home)
  });

module.exports = router;