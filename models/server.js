const express=require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const { conexion }=require('../database/configdb.js');


class Server{
    
    constructor(){
        this.app=express();
        this.port=process.env.PORT;
        //Conexion a la base de datos
        this.conexion();

        //middleware
        this.middleWares();
        //swagger
        this.swagger()
        //rutas de mi aplicacion
        this.routes();
    }
async conexion(){
    await conexion();
}
routes(){

    //guardo usuario
   // this.app.use('/',require('../routes/adress'));
   // this.app.use('/getusersById/{userId}',require('../routes/adress'));
   // this.app.use('/updateUsersById/{userId}',require('../routes/adress'));
   this.app.use('/createUsers',require('../routes/adress'));
   // this.app.use('/deleteUsersById/{userId}',require('../routes/adress'));

    //guardo usuario
    this.app.use('/',require('../routes/usuario'));
    this.app.use('/getusersById/{userId}',require('../routes/usuario'));
    this.app.use('/updateUsersById/{userId}',require('../routes/usuario'));
    this.app.use('/createUsers',require('../routes/usuario'));
    this.app.use('/deleteUsersById/{userId}',require('../routes/usuario'));
   


}
swagger(){
    var options = {
        swaggerOptions: {
          url: 'https://s3-eu-west-1.amazonaws.com/mmi-codechallenge/swagger-users-v1.json'
        }
       
        
      }
      this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));
}

listen(){
    this.app.listen(this.port,()=>{
        console.clear();
        console.log('****************************************************')
        console.log('La aplicacion se arranco en la url localhost:', process.env.PORT)
        console.log('****************************************************')    
    })
}

middleWares(){
    // proteccion de nuestra api 
    this.app.use(cors());
    //me aseguro que la informacion que voy a recibir sera en json
    this.app.use(express.json());
    //aqui le digo que utilice recurso statico de la carpeta public
    this.app.use(express.static('public'));
}


}

module.exports=Server;