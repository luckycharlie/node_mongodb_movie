var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('views/movie/index');
});
router.get('/a',function(req, res, next){
  res.json({ title: '111111111' });
})
module.exports = router;
