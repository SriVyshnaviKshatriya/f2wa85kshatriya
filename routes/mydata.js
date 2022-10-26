var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('my data', { title: 'Sri Vyshnavi Kshatriya' });
});

module.exports = router;