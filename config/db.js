// PARA USAR LA BASE DE DATOS PREVIAMENTE CREADA COMO "mcfly"
const mysql= require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'mcfly'
});
connection.connect(
    function(error){
        if(error){
            throw error;
        }else{
            console.log('conexion correcta a la base de datos mcfly')
        }
    }
);
module.exports = connection;