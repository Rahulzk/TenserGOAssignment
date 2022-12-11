const mongoose = require('mongoose')

exports.connectDatabase = () =>{
    mongoose.connect('mongodb://localhost:27017/TenserGO')
    .then((con)=> console.log(`Databse connected : ${con.connection.host} ` ))
    .catch((err)=>console.log(err))
}