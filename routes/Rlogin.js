var express = require('express');
var router = express.Router();

/*Ruta para recibir datos de session 
y compararlos con los de la BD

*/
router.post('/login', function(req, res) {
  const recibo=req.body
  //console.log(recibo.password)
  //console.log(recibo.username)
   const password="567895nkpmÑ"
   const username="Ownerandedit"
   const BD= {password, username}
  // console.log(BD.password)
   if (recibo.username===BD.username)
   {
      if(recibo.password===BD.password)
      {
         res.send("Welcome Session")
         //res.redirect('http://localhost:3000/')
      }
      else
      {
         res.send("incorrect password")
      }
   }
   else{
     res.send("Registrar usuario")
   }
});

router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
