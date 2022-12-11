const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    id:{
        type:Number
    },
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    status:{
        type:String,
    },
    gender:{
        type:String
    },
  
});



module.exports = mongoose.model('User',userSchema);