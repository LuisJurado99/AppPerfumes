var express = require('express');
var router = express.Router();

/* GET home page. */
var express = require('express');
var router = express.Router();
var request= require('request');

router.get('/', function(req, res, next) {
  request('https://apiperfumetecjol.herokuapp.com/apiPerfume',(err,response,body)=>{
    console.log(body);
    
    res.render('index',{data:JSON.parse(body) });
  });
});
router.post('/web/interfaz/buscar',(req,res,next)=>{
    request('http://localhost:3000/apiPerfume',(err,resp,body)=>{
        
        //res.render('perfil',{'datos':JSON.parse(body)});
    });
  });

  router.get('/comprar',(req,res,next)=>{
    console.log(req.body);
    console.log(res.body);
    
    res.render('compras',{title: "Compras"})
  });
      
  
  

module.exports = router;



