var express = require('express');
var router = express.Router();

const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Server' });
});

/*GEt .html to verify propiedad e indexar a google*/
router.get('/google8818ae4435b70e10.html', function(req, res, next) {
  console.log('entre en index veri')
  res.sendFile(path.join(__dirname+'/google8818ae4435b70e10.html'));
});

module.exports = router;
