const Adresse = require('../models/adresse');


const getAdress = async(request, response) => {
    console.log("::::usuarioController::::getUsers::::localhost:3000/getusers");
    //de esta forma me aseguro que se ejecuten las dos busquedas a la vez
    const result = await Promise.all([
        Adresse.countDocuments(),
        Adresse.find()

    ]);
    
    response.json({
        msg:"Api getUsers",
        result
    });
    total=result[0];
    console.log('Se ha obtenido el numero total de adresses: '+`${total}`);

}

const getusersById = async (request, response) => {
    const id=request.params.id;
    const adress= await Adresse.findById(id);
    response.json({
        msg: "Api desde controlador",
        adress
    });
    console.log("usuarioController::::getusersById::::localhost:3000/getusersById/"+`${id}`);

}
const updateUsersById = async (request, response) => {
    const id = request.params.id;
    //excluyo _id para poder modificar
    const {_id,...rest}=request.body

    const adress=await Adresse.findByIdAndUpdate(id,rest);
    response.json({
        msg: "actualiza api desde el controlador",
        adress
    });
    console.log("usuarioController::::updateUsersById::::localhost:3000/updateUsersById/"+`${id}`);
}
const creteAdress = (request, response) => {
    console.log("usuarioController::::creteUsers::::localhost:3000/createUsers");

   
    
    const {street,state,city,country,zip} = request.body;
    const adress= new Adresse({street,state,city,country,zip});
    try {
        console-log('guardo')
        adress.save();
    } catch (error) {
        new Error('error'+error)
        console.log(error);
        
    }
    
    response.json({
        msg: "create api desde el contrlador",
        adress
    });
   
    
}
const deleteUsersById =async (request, response) => {
   
    const id  = request.params.id;
    console.log("usuarioController::::deleteUsersById::::localhost:3000/deleteUsersById/" + `${id}`);
    const result= await Adresse.findOneAndDelete(id);
    response.json({
        msg: "delete api desde controlador",
        result
    });
    
}

module.exports = {
    getAdress,
    getusersById,
    updateUsersById,
    creteAdress,
    deleteUsersById
}

