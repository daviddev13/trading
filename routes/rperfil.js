var express = require('express');
var router = express.Router();

const pool = require('./conexion')
const { query } = require('express');

//Ruta para recibir y guardar datos de Formulario 1 y sus comentarios
router.post('/save', async function(req, res) {

   const receipt=req.body
  
   const perfil= receipt.comindicatorsopen
   const perfil2= receipt.RevMoneyLocator
   
   const Date = receipt.date
   const Stocks=receipt.trendStocks
   const Commodities=receipt.trendComodities
   const Forex=receipt.trendForex
   const Yield=receipt.trendYield

   const alldates={Date,Stocks,Commodities,Forex,Yield}
   
   const Bull_Money=receipt.Bull_Money
   const Bear_Money=receipt.Bear_Money
   const Coment_Bull=receipt.Coment_Bull
   const Coment_Bear=receipt.Coment_Bear

  if((perfil==="true")&&(perfil2==false)){
     await pool.query('INSERT INTO Money_Locator SET ?',[alldates],function(err,result,fields){   
      if (result){
       res.send("Save")
      }
      if (err){
        console.log(err)
      }
     })
   }
   else{
      if ((perfil==="true")&&(perfil2==true)) {
         //console.log("entre a ruta save y me meti al else y luego al if para actualizar")
         await pool.query("UPDATE Money_Locator SET Coment_Bull='".concat(Coment_Bull,"',Coment_Bear='".concat(Coment_Bear,"',Bull_Money='".concat(Bull_Money,"',Bear_Money='",Bear_Money,"' WHERE Date='"),Date,"'")),
         function(err,result,fields){  
            if (result){
               //console.log(result)
              res.send("Update")
            }
            if (err){
              console.log(err)
            }
           })
      }
   }
});

//Ruta para conseguir datos tabla 1 
router.get('/moneylocator', async function(req, res) {
   //console.log("vamos a buscar en BD")
   const dd="Id";
   await pool.query("SELECT * FROM Money_Locator ORDER BY ".concat(dd," DESC LIMIT 20"),function(err,rows,fields)
    {  
       if (rows)
      {
          // fechaJs=Iso 8601 hay que Formatear fecha para solo año, mes y día
          const formattedRows = rows.map(row => {
                        const originalDate = new Date(row.Date);
                        const formattedDate = originalDate.toISOString().slice(0, 10);
                        return { ...row, Date: formattedDate };
                     });
         
         res.send(formattedRows)
      }
      if (err)
      {
         console.log(err)
      }
    }
    )
 });

 // Ruta para eliminar datos tabla 1
router.delete('/moneylocator/:id', async function(req, res) {
  const id = req.params.id;
  //console.log(id)
    // Realiza la eliminación en la base de datos usando el ID proporcionado
    await pool.query('DELETE FROM Money_Locator WHERE ID = ?', [id],function(err,rows,fields)
    {
      if (rows)
      {
         res.send({ message: 'Registro eliminado exitosamente' })
      }
      if (err)
      {
         console.log(err)
      }
    }
    );
  })
    
  


 //Ruta para recibir y guardar datos de Formulario 2 y sus comentarios
router.post('/form2', async function(req, res) {

   //console.log("entramos a ruta formulario 2")
   const receiptOM=req.body
  
   const perfil= receiptOM.comindicatorsopen
   const RevOtherMarkets= receiptOM.RevOtherMarkets
   
   const Date = receiptOM.date
   const BTC=receiptOM.trendBTC
   const Gold=receiptOM.trendGold
   const WTIC=receiptOM.trendWTIC
 
   const alldates2={Date,BTC,Gold,WTIC}

   const Coment_OtherMarkets=receiptOM.Coment_OtherMarkets

  if((perfil==="true")&&(RevOtherMarkets==false)){
     await pool.query('INSERT INTO Other_Markets SET ?',[alldates2],function(err,result,fields){   
      if (result){
       res.send("Save")
      }
      if (err){
        console.log(err)
      }
     })
   }
   else{
      if ((perfil==="true")&&(RevOtherMarkets==true)) {
         //console.log("entre a ruta para actualizar")
         await pool.query("UPDATE Other_Markets SET Coment_OtherMarkets='".concat(Coment_OtherMarkets,"' WHERE Date='",Date,"'"),
         function(err,result,fields){  
            if (result){
               //console.log(result)
              res.send("Update")
            }
            if (err){
              console.log(err)
            }
           })
      }
   }
   
});

//Ruta para conseguir datos tabla 2 
router.get('/table2', async function(req, res) {
   //console.log("Searchig table2")
   const dd="Id";
   await pool.query("SELECT * FROM Other_Markets ORDER BY ".concat(dd," DESC LIMIT 20")
   ,function(err,rows,fields){   
     if (rows){
            // fechaJs=Iso 8601 hay que Formatear fecha para solo año, mes y día
          const formattedRows = rows.map(row => {
                        const originalDate = new Date(row.Date);
                        const formattedDate = originalDate.toISOString().slice(0, 10);
                        return { ...row, Date: formattedDate };
                     });
        
         res.send(formattedRows)
     }
     if (err){
       console.log(err)
     }
   })
});

 // Ruta para eliminar datos tabla 1
router.delete('/table2/:id', async function(req, res) {
  const id = req.params.id;
  //console.log(id)
    // Realiza la eliminación en la base de datos usando el ID proporcionado
    await pool.query('DELETE FROM Other_Markets WHERE ID = ?', [id],function(err,rows,fields)
    {
      if (rows)
      {
         res.send({ message: 'Registro eliminado exitosamente' })
      }
      if (err)
      {
         console.log(err)
      }
    }
    );
  })

//Ruta para recibir y guardar datos de Formulario 3 y sus comentarios
 router.post('/form3', async function(req, res) {

   const receiptDollar=req.body
  
   const perfil= receiptDollar.comindicatorsopen
   const RevDollar= receiptDollar.RevDollar
   
   const Date = receiptDollar.date
   const trendDollarDay=receiptDollar.trendDollarDay
   const trendDollarWe=receiptDollar.trendDollarWe
   const trendColcap=receiptDollar.trendColcap

   const alldates3={Date,trendDollarDay,trendDollarWe,trendColcap}

   const Coment_Dollar=receiptDollar.Coment_Dollar
   const USDCOP_en_pesos=receiptDollar.USDCOP_en_pesos

  if((perfil==="true")&&(RevDollar==false)){
     await pool.query('INSERT INTO Dollar_table SET ?',[alldates3],function(err,result,fields){   
      if (result){
       res.send("Save")
      }
      if (err){
        console.log(err)
      }
     })
   }
   else{
      if ((perfil==="true")&&(RevDollar==true)) {
         //console.log("entre a actualizar Dollar")
         await pool.query("UPDATE Dollar_table SET Coment_Dollar='".concat(Coment_Dollar,"' WHERE Date='",Date,"'"),
         async function(err,result,fields){  
            if (result){
               //console.log(result)
              //res.send("Update")
              await pool.query("UPDATE Dollar_table SET USDCOP_en_pesos='".concat(USDCOP_en_pesos,"' WHERE Date='",Date,"'"),
              function(err,result,fields){  
                 if (result){
                    //console.log(result)
                   res.send("Update")
                 }
                 if (err){
                   console.log(err)
                 }
                })
            }
            if (err){
              console.log(err)
            }
           })
      }
   }
});

//Ruta para conseguir datos tabla 3 
router.get('/table3', async function(req, res) {
   //console.log("Searchig table3")
   const dd="Id";
   
   
   await pool.query("SELECT Dollar_table.*, Other_Markets.WTIC AS WTIC, Money_Locator.Forex AS Forex FROM Dollar_table LEFT JOIN Other_Markets ON Dollar_table.Date = Other_Markets.Date LEFT JOIN Money_Locator ON Dollar_table.Date = Money_Locator.Date ORDER BY " + dd + " DESC LIMIT 20",
    function(err, rows, fields) {
     if (rows){
             // fechaJs=Iso 8601 hay que Formatear fecha para solo año, mes y día
          const formattedRows = rows.map(row => {
                        const originalDate = new Date(row.Date);
                        const formattedDate = originalDate.toISOString().slice(0, 10);
                        return { ...row, Date: formattedDate };
                     });
        // console.log(formattedRows)
         res.send(formattedRows)
     }
     if (err){
       console.log(err)
     }
   })
});

 // Ruta para eliminar datos tabla 1
router.delete('/table3/:id', async function(req, res) {
  const id = req.params.id;
  //console.log(id)
    // Realiza la eliminación en la base de datos usando el ID proporcionado
    await pool.query('DELETE FROM Dollar_table WHERE ID = ?', [id],function(err,rows,fields)
    {
      if (rows)
      {
         res.send({ message: 'Registro eliminado exitosamente' })
      }
      if (err)
      {
         console.log(err)
      }
    }
    );
  })

//Ruta para recibir y guardar datos de Formulario registro operaciones
router.post('/formregisopera', async function(req, res) {

   //console.log("Saving Record")
   const receiptregisopera=req.body
  
   const date= receiptregisopera.date
   const cfd= receiptregisopera.cfd
   const operacion= receiptregisopera.operacion
   const riesgo= receiptregisopera.arriesgado
   const tendencia_Mayor=receiptregisopera.tendenciaMayor
   const entrada=receiptregisopera.entrada
   const salida=receiptregisopera.salida
   const observaciones=receiptregisopera.obs
   const valor= receiptregisopera.valor
   
   const alldatesregisopera={date,cfd,operacion,riesgo,tendencia_Mayor,entrada,salida,valor,observaciones}
     
   await pool.query('INSERT INTO Regis_opera SET ?',[alldatesregisopera],function(err,result,fields){   
      if (result){
       res.send("Save")
      }
      if (err){
        console.log(err)
      }
     })
});

//Ruta para conseguir datos of trade log 
router.get('/tradelog', async function(req, res) {
   //console.log("Searchig tradelog")
   const dd="Date";
   await pool.query("SELECT * FROM Regis_opera WHERE MONTH(".concat(dd,")=MONTH(CURRENT_DATE)"), 
   function(err,rows,fields){ 
     if (rows){
       res.send(rows)
     }
     if (err){
       console.log(err)
     }
   })
});

module.exports = router;
