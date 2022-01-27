const {Router}=require('express');
const { check, validationResult } = require('express-validator');
const { getusers, getusersById, updateUsersById, creteUsers, deleteUsersById } = require('../controllers/usuarioController');
const { validator,existeUsuarioById }=require('../middlewares/validator');
const router=Router();

router.get('/',(request,response)=>{
    response.json({
        msg:"api rula"
    })

});
router.get('/getusers',getusers);
router.get('/getusersById/:id',getusersById);
router.put('/updateUsersById/:id',updateUsersById);
router.post('/createUsers',creteUsers);
router.delete('/deleteUsersById/:id',deleteUsersById);

module.exports=router;