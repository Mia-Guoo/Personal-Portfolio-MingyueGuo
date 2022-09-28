/* Student Name: Mingyue Guo; Student Number: 301245440; Date: 2020/09/27*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
