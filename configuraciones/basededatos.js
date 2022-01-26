const mongoose = require('mongoose');
const cadena = 'mongodb+srv://Carolina:Caro0620@clustermongo.hfqna.mongodb.net/usuario';
mongoose.connect(cadena,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(db=>console.log('base de datos conectada'))
    .catch(e=>console.log(e));