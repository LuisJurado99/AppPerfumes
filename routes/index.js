var express = require('express');
var router = express.Router();
var request = require('request');
const { log } = require('debug');

router.get('/', function (req, res, next) {
  request('https://apiperfumetecjol.herokuapp.com/apiPerfume', (err, response, body) => {
    console.log(body);

    res.render('index', { data: JSON.parse(body) , title: 'Inicio'});
  });
});

router.get('/compras/:id', (req, res, next) => {
  request('https://apiperfumetecjol.herokuapp.com/apiPerfume/'+req.params.id, (err, response, body) => {
    console.log(body);
    console.log(JSON.parse(body));
    
    res.render('compras', { nombre:JSON.parse(body)['nombre'], marca:JSON.parse(body)['marca'], 
    foto:JSON.parse(body)['foto'], title: 'Compra'});
  });
});
router.get('/exito/:id', (req, res, next) => {
  request('https://apiperfumetecjol.herokuapp.com/apiPerfume/'+req.params.id, (err, response, body) => {
    res.render('exito', { nombre:JSON.parse(body)['nombre'], title: 'Exito'});
  });
});



module.exports = router;



