/* Student Name: Mingyue Guo; Student Number: 301245440; Date: 2020/09/27*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home'});
});

/* GET About Me. */
router.get('/about', function(req, res, next ) {
  res.render('index', { title: 'About Me', page: 'about'});
  //res.sendFile(path.join(__dirname+'/about_me.ejs'));
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: 'services'});
});

/* GET Contact Me. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me', page: 'contact'});
});
module.exports = router;
