const {Router}=require('express');
const { check, validationResult } = require('express-validator');
//const { getAdress, creteAdress, updateAdressByIdUser, deleteAdressByIdUser } = require('../controllers/adressController');
const { creteAdress } = require('../controllers/adressController');

const { validator,existeUsuarioById }=require('../middlewares/validator');
const router=Router();


router.get('/',(request,response)=>{
    response.json({
        msg:"api rula"
    })

});
//router.get('/getusers',getAdress);
//router.get('/getusersById/:id',[
//    check('id').custom(existeUsuarioById),
//    validator
//],getAdressByIdUser);
/*router.put('/updateUsersById/:id',[
    check('street','La calle del usuario es obligatorio').not().isEmpty(),
    check('state','La provinvia del usuario es obligatoria').not().isEmpty(),
    check('city','La ciudad del usuario es obligataria').not().isEmpty(),
    check('country','El pais del usuario es obligatorio').not().isEmpty(),
    check('zip','El codigo postal del usuario es obligatorio').not().isEmpty(),
    check('id').custom(existeUsuarioById),
    validator
],updateAdressByIdUser);*/
router.post('/createUsers',[
    check('street','La calle del usuario es obligatorio').not().isEmpty(),
    check('state','La provinvia del usuario es obligatoria').not().isEmpty(),
    check('city','La ciudad del usuario es obligataria').not().isEmpty(),
    check('country','El pais del usuario es obligatorio').not().isEmpty(),
    check('zip','El codigo postal del usuario es obligatorio').not().isEmpty(),
    validator
],creteAdress);
//router.delete('/deleteUsersById/:id',deleteAdressByIdUser);


//const resultUltimo = await Adresse.find().sort({$natural:-1});


module.exports=router;