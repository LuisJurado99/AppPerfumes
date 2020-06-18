var express = require('express');
var router = express.Router();
var request = require('request');
const { log } = require('debug');

router.get('/', function (req, res, next) {
  request('https://apiperfumetecjol.herokuapp.com/apiPerfume', (err, response, body) => {
    console.log(body);

    res.render('index', { data: JSON.parse(body) });
  });
});

router.get('/compras/:id', (req, res, next) => {
  request('https://apiperfumetecjol.herokuapp.com/apiPerfume/'+req.params.id, (err, response, body) => {
    console.log(body);
    console.log(JSON.parse(body));
    
    res.render('compras', { data: JSON.parse('['+body+']') });
  });
});




module.exports = router;



