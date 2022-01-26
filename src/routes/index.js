const {Router} = require('express');
const router = Router();
const d = require('../routes/datos.json');
const _ = require('underscore');
/*console.log(d);*/
//definicion de rutas
router.get('/',(req,res)=>{
    /*const datos ={
        "Fecha_Ingreso":'10/12/2016',
        "Id_Empleado":'1',
        "Cedula":'12456',
        "Correo_Electronico":'gohgonzalo@gmail.com',
        "N_SeguroSocial":'123456',
        "Puesto":'tester',
        "Id_Datos_Generales":'2'};*/
    res.json(d);
});
router.post('/',(req,res)=>{
    try {

    console.log('datos',req.body);
    const {Fecha_Ingreso,Id_Empleado,Cedula,Correo_Electronico,N_SeguroSocial,Puesto,Id_Datos_Generales} = req.body;
   //  if(Fecha_Ingreso && Id_Empleado && Cedula && Correo_Electronico && N_SeguroSocial && Puesto && Id_Datos_Generales)
    // {
        const nuevoregistro = {Fecha_Ingreso,Id_Empleado,Cedula,Correo_Electronico,N_SeguroSocial,Puesto,Id_Datos_Generales};
        d.push(nuevoregistro);
        res.json(d);
    }
    catch (e){
        console.log(e);
    }
    // else
    {
      //  res.send('Error al hacer la peticion');
    }
});

router.delete('/',(req,res)=>{
    console.log(req.params);
    const{ID} = req.params;
    _.each(d,(registros,i)=>{
       if(registros.ID == Id_Empleado)
       {
           d.splice(i,1);
           res.json(d);
       }
    });
    res.send('Eliminado');
});
router.put('/',(req,res)=>{
    const{ID} = req.params;
    const {Fecha_Ingreso,Id_Empleado,Cedula,Correo_Electronico,N_SeguroSocial,Puesto,Id_Datos_Generales} = req.body;
    if(Fecha_Ingreso && Id_Empleado && Cedula && Correo_Electronico && N_SeguroSocial && Puesto && Id_Datos_Generales)
    {
        _.each(d,(registro,i)=>{
            if(registro.ID == ID)
            {
                registro.Fecha_Ingreso = Fecha_Ingreso;
                registro.Id_Empleado = Id_Empleado;
                registro.Cedula = Cedula;
                registro.Correo_Electronico = Correo_Electronico;
                registro.N_SeguroSocial = N_SeguroSocial;
                registro.Puesto =Puesto;
                registro.Id_Datos_Generales = Id_Datos_Generales;
                res.json(d);
            }
        });
    }
});
module.exports = router;