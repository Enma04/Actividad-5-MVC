// Aplicación

/* En el backend existen las peticiones tipo:
    GET, POST, DELETE, PUT. Las más usadas son GET y POST ya que contienen la información
    necesaria para hacer todo tipo de peticiones
    Toda petición debe tener una respuesta por parte del servidor
    Las peticiones tipo GEt son las que se hacen desde la URL
*/

//CONFIGURACIONES NECESARIAS DE PARTE DEL SERVIDOR
var express = require('express');
global.app = express();  //Para que app quede global

app.listen(3000, function(){
    console.log('Servidor fuincionando por el puerto 3000');
    }
)

console.log('Hola mundo desde node con nodemon');

//Configuración adicional para usar body-parse
var bodyParse = require('body-parser');
//const { request } = require('express')
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

//Comando para utilizar el archivo que contiene las rutas de dirección
require(__dirname + "/rutas.js");
