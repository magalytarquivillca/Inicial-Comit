var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = req.query;
  console.log(data);
  //res.render('index', { title: 'Express' });
  res.status(200).json ({
    msn:"HOLA MUNDO"
   });
  });

  router.post('/test', function(req, res, next) {
    req.body["msn"]="Por el servidor";
    var data = req.body
    res.status(200).json(data);
    
});
//DESAFIO # 2 INTERESES
router.post('/interes', function(req, res, next) {
  var data = req.body;
  let montoSoli = parseFloat(data.montoSoli )
  let tipoIntereses = data.tipoInteres
  let tiempo = parseFloat(data.tiempoPago)
  let interes;
  if (parseFloat(tipoIntereses)>=0) {
      if (parseFloat(tipoInteress)<1) {
          interes=parseFloat(tipoIntereses);
      } 
      else {
          interes=parseFloat(tipoIntereses)/100;
      }
  } 
  else {
      switch (tipoIntereses) {
          case "alto":
              interes=0.12;
              break;
          case "bajo":
              interes=0.10
              break;
          default:
              interes= 0.25
              break;
      }
  }
  var total = ((montoSoli + (montoSoli * interes))/tiempo);
  res.status(200).json({
      msn: "CANCELA UN TOTAL DE " + total + " POR MES"
  });
});


module.exports = router;

