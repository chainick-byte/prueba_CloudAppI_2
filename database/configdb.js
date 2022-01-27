const mongoose = require('mongoose');


// debido a que es una funciona asyncronica puedo utilizar la palabra await que significa que espere 
const conexion = async()=>{

    try {
       await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        });

        console.log("Se ha conectado a la base de datos")
    } catch (error) {
        console.log(error);
        throw new Error('no se ha conectado a la base de datos' );
    }
}




module.exports={
    conexion
}