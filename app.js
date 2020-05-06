// Requires
var express = require('express');


//Establecer conexión
var mongoose = require('mongoose');

// Iniciar variables 
var app = express();


// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB2', ( err, res)=>{

// está ejecución de tiene todo el proceso
 if(err) throw err;

 console.log('Base de datos: \x1b[32m%s\x1b[0m'  ,'online');
});


// Rutas
app.get('/', (req, res, next) => {

    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente'
    })

})


// Escuchar peticiones
// Puerto
app.listen(3000, ()=> {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m'  ,'online');
});

// Nodemon para que el servidor se vuelva automatico -> npm start