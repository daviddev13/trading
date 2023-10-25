//Se requieren modulos necesarios (mysql y util)
const mysql=require('mysql');
const mysqlConfig = require('./dataconexion.js');
const {promisify}=require('util'); 

//Se define la conecion a la BD de Mysql 
//Se usa funcion del modulo para crear conexion Pool    

         const pool  = mysql.createPool(mysqlConfig);

        pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
          if (error) throw error;
          console.log('The solution is: ', results[0].solution);
        });

//Se usa funcion del modulo para conseguir conecion 
        pool.getConnection(function (err, connection){  
                if (err) {
 if (err.code === 'PROTOCOL_CONNECTION_LOST') {
   console.error('dB CONEXION CERRADA');}
 if (err.code === 'ER_CON_COUNT_ERROR') {
   console.error('dB TIENE MUCHAS CONEXIONES');}
 if (err.code === 'ECONNREFUSED') {
   console.error('dB CONEXION RECHAZADA');}}
              if (connection) connection.release();
console.log('DB conectada');
return;
              });

//Se usa util para volver conexión asincrona
promisify(pool.query);   

//Se exporta el modulo para usarlo en toda la APP
module.exports=pool;