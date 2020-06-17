var express = require('express');
var router = express.Router();

/* GET home page. */
var express = require('express');
var router = express.Router();
var request= require('request');

router.get('/', function(req, res, next) {
    res.render('index')
  });
router.post('/web/interfaz/buscar',(req,res,next)=>{
    request('http://localhost:3000/apiPerfume',(err,resp,body)=>{
        
        //res.render('perfil',{'datos':JSON.parse(body)});
    });
  });
/*
router.post('/buscar',(req,res,next)=>{
    request('http://localhost:3000/apiPerfume',)
    Perfume.findOne({'nombre':req.body.buscar},(err,datos)=>{
      if(err){
        res.render('error',{title:'error'});
      } 
      else  {
        console.log(datos);
        if (datos==null){
          res.status(200).json(datos);
        }else{
          res.render('buscar',{title:'buscar',datos:datos});
        }
      }
    });
  });*/
/*router.patch('/actualizar/:perfumeId', (req,res,next)=>{
    console.log(req.body);
    console.log(req.params.perfumeId);
    Perfume.findOneAndUpdate( {'_id':req.params.perfumeId },{$set:req.body}, (err,datos)=>{
      if(err) res.status(400).json({mensaje:"Error de Api"})
      else res.status(200).json(datos)
    });
  });
  
router.get('/', function(req, res, next) {
    Perfume.find( {} , (err,datos)=>{
        console.log(err);
        
      if(err) res.render('error',{title:'Error', error:err})
      else res.render('index',{datos: datos, title: "Perfumes"})
    });  
});
router.post('/agregar',(req,res,next)=>{
    var perfume=Perfume({
      nombre: req.body.nombre,
      marca: req.body.marca,
      aroma: req.body.aroma,
      cantidad: req.body.cantidad,
      precio: req.body.precio,
      tipo: req.body.tipo,
    });
    console.log(req.body);
    
    perfume.save((err,datos)=>{
      if(err) res.render('error',{message: err});
      else res.status(201).json(datos);
    });
  
  });
*/
module.exports = router;



