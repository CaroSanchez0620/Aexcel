const express = require('express');
const app = express();
const morgan = require('morgan');
//configuracion
app.set('port',process.env.PORT || 4000);
app.set('json spaces', 2)
require('../configuraciones/basededatos');
//middleware mediador entre frontend y backend
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//llamada de ruta archivo
app.use('/api/datos',require('./routes/index'));
app.use('/api/guardar',require('./routes/index'));
app.use('/api/usuario',require('./routes/usuarios'));
//inicio de sevidor
app.listen(app.get('port'),()=>{
   //obtencion de backstick alt+96
   console.log(`el servidor esta en el puerto ${4000}`)
});