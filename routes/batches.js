var express = require('express');
var router = express.Router();
var fetch = require('fetch');

/* GET users listing. */
router.post('/', function(req, res, next) {
  res.send('Batch endpoint is live');
});

module.exports = router;
