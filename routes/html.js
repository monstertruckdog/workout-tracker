const router = require('express').Router();
const homePage = require('../public/index')
const path = require('path');
// const exercisePage = require('../public/exercise.html')
// const Parks = require('../models/parks');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  })

router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
})

router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
})

module.exports = router;