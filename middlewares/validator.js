const {validationResult}=require('express-validator');
const Adress=require('../models/adresse');

const validator=(request,response,next)=>{

    const error=validationResult(request);
    if(!error.isEmpty()){
        return response.status(400).json(error);
    }

   next();
}

const  existeUsuarioById=async(id)=>{
    const usuarioExiste=await Adress.findById(id)
    if(!usuarioExiste){
        console.log('El usuario no existe con id: '+ `${id}`)
        throw new Error('El usuario no existe con id: '+ `${id}`);
    }

    console.log("El usuario se ha encontrado con el id: "+`${id}`);
   
}

module.exports={
    validator,
existeUsuarioById
}