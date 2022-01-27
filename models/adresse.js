const{ Schema,model }=require('mongoose');
const mongoose=require('mongoose');
const sequencing = require("../config/sequencing");
const autoIncrement = require('mongoose-sequence')(mongoose);

const AdresseSchema = Schema({
    _id:Number,
    street:{
        type:String,
        required:[true,'No se ha especificado la calle y es obligatorio']
    },
    state:{
        type:String,
        required:[true, 'El estado/Provincia es obligatorio']
    },
    city:{
        type:String,
        required:[true,'El nombre de ciudad es obligatorio']
    },
    country:{
        type:String,
        required:[true, 'El pais es obligatorio']
    },
    zip:{
        type:String,
        required:[true,'El codigo postal es obligatorio']
    }

});

AdresseSchema.plugin(autoIncrement, {id: 'adresse_id_counter', inc_field: '_id'});
AdresseSchema.pre("save", function (next) {
    let doc = this;
    sequencing.getSequenceNextValue("adresse_id_counter").
        then(counter => {
            console.log("el modificador del id: ", counter);
            if (!counter) {
                sequencing.insertCounter("adresse_id_counter")
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
});

 module.exports=model('Adresse',AdresseSchema);