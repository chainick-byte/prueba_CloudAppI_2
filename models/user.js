const{ Schema,model }=require('mongoose');
const mongoose=require('mongoose');
const sequencing = require("../config/sequencing");
const autoIncrement = require('mongoose-sequence')(mongoose);

const UserSchema = Schema({

    _id:Number,
    name:{
        type:String,
        required:[true,'El nombre de usuario es obligatorio']
    },
    email:{
        type:String,
        required:[true,'El email del usuario es obligatorio']
    },
    birthDate:{
        type:String,
        required:[true,'Debe indicar la fecha de nacimiento de usuario']

    },
    adress:{
        type:Schema.Types.ObjectId,
        ref:'Adresse'

    }

});

UserSchema.plugin(autoIncrement, {id: 'user_id_counter', inc_field: '_id'});
/*UserSchema.pre("save", function (next) {
    let doc = this;
    sequencing.getSequenceNextValue("user_id").
        then(counter => {
            console.log("el modificador del id: ", counter);
            if (!counter) {
                sequencing.insertCounter("user_id")
                    .then(counter => {
                        doc._id = counter;
                        console.log(doc)
                        next();
                    })
                    .catch(error => next(error))
            } else {
                doc._id = counter;
                next();
            }
        })
     .catch(error => next(error))
});*/

module.exports=model('User',UserSchema);