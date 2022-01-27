
const User = require('../models/user');
const Adresse = require('../models/adresse');


const getusers = async(request, response) => {
    console.log("::::usuarioController::::getUsers::::localhost:3000/getusers");
    //de esta forma me aseguro que se ejecuten las dos busquedas a la vez
    const result = await Promise.all([
        User.countDocuments(),
        User.find()

    ]);
    
    response.json({
        msg:"Api getUsers",
        result
    });
    total=result[0];
    console.log('Se ha obtenido el numero total de users: '+`${total}`);

}

const getusersById = async (request, response) => {
    const id=request.params.id;
    const user= await User.findById(id);
    response.json({
        msg: "Api desde controlador",
        user
    });
    console.log("usuarioController::::getusersById::::localhost:3000/getusersById/"+`${id}`);

}
const updateUsersById = async (request, response) => {
    const id = request.params.id;
    //excluyo _id para poder modificar
    const {_id,...rest}=request.body

    const user=await User.findByIdAndUpdate(id,rest);
    response.json({
        msg: "actualiza api desde el controlador",
         user
    });
    console.log("usuarioController::::updateUsersById::::localhost:3000/updateUsersById/"+`${id}`);
}
const creteUsers = async (request, response) => {
    console.log("usuarioController::::creteUsers::::localhost:3000/createUsers");

    const adress_extraido= await Adresse.find().sort({$natural:-1});
    const _adress=adress_extraido[0]._id;
    console.log("====>"+_adress);

    const {name,email,birthDate,adress} = request.body;
    const user= new User({name,email,birthDate,adress:_adress});
    
    user.save();
    response.json({
        msg: "create api desde el contrlador",
        user
       
    });
   
    
}
const deleteUsersById =async (request, response) => {
   
    const id  = request.params.id;
    console.log("usuarioController::::deleteUsersById::::localhost:3000/deleteUsersById/" + `${id}`);
    const result= await User.findOneAndDelete(id);
    response.json({
        msg: "delete api desde controlador",
        result
    });
    
}

module.exports = {
    getusers,
    getusersById,
    updateUsersById,
    creteUsers,
    deleteUsersById
}

