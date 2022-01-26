const user = require('../models/usuarios');
exports.insertarusuario = async (req,res)=> {
    console.log('inserta usuario',req.body);
    const {Fecha_Ingreso,Id_Empleado,Cedula,Correo_Electronico,N_SeguroSocial,Empresa,Puesto,Id_Datos_Generales} = req.body;
    const newuser = new user({Fecha_Ingreso,Id_Empleado,Cedula,Correo_Electronico,N_SeguroSocial,Empresa,Puesto,Id_Datos_Generales});
    await newuser.save();
    res.json(newuser);
}
exports.consultausuario = async (req,res)=>{
    try {
        const consultarusuario = await user.find();
        res.json(consultarusuario);
    }
    catch (e){res.status(500).json('error de consulta',e);}
}
exports.consultausuarioid = async (req,res)=>{
    try {
        const {Fecha_Ingreso,Id_Empleado,Cedula,Correo_Electronico,N_SeguroSocial,Empresa, Puesto,Id_Datos_Generales} = req.body;
        console.log('id',req.params.id);
        let usuarioid = await user.findById(req.params.id);
        console.log('Los datos del usuario son:', usuarioid);
        res.json(usuarioid);
    }
    catch (e){console.log(e);
        res.status(500).json({msg:'error de consulta de id'});}
}
exports.actualizaruser = async (req,res)=>{
    try {
        const {Fecha_Ingreso,Id_Empleado,Cedula,Correo_Electronico,N_SeguroSocial,Empresa,Puesto,Id_Datos_Generales} = req.body;
        console.log('id',req.params._id);
        let usuarioid = await user.findById(req.params.id);
        console.log('Los datos del usuario son:', usuarioid);
        res.json(usuarioid);
        if(!usuarioid)
        {
            res.status(404).json(usuarioid);
        }
        else
        {
            usuarioid.Fecha_Ingreso = Fecha_Ingreso;
            usuarioid.Id_Empleado = Id_Empleado;
            usuarioid.Cedula = Cedula;
            usuarioid.Correso_Electronico = Correo_Electronico ;
            usuarioid.N_SeguroSocial = N_SeguroSocial;
            usuarioid.Empresa = Empresa;
            usuarioid.Puesto = Puesto;
            usuarioid.Id_Datos_Generales = Id_Datos_Generales;
            usuarioid =await user.findOneAndUpdate({
               _id:req.params.id
            },
            usuarioid,{new:true}
            );
            res.json(usuarioid);
        }
    }
    catch (e){res.status(500).send('error de consulta de id');}
}
exports.eliminarusuario = async (req,res)=>{
    try {
        //const {Fecha_Ingreso,Id_Empleado,Cedula,Correo_Electronico,N_SeguroSocial,Empresa,Puesto,Id_Datos_Generales} = req.body;
        //console.log(req.params.id);
        let usuarioid = await user.findById(req.params.id);
        //console.log('Los datos del usuario son:', usuarioid);
        res.json(usuarioid);
        if(!usuarioid)
        {
            res.status(500).json('no existe usuario');
        }
        else
        {
            await user.findOneAndDelete({_id:req.params.id});
            res.json('usuario eliminado');
        }
    }
    catch (e){
        console.log(e);
        res.status(500).send('error de consulta de id');
    }
}