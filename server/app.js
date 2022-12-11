const express = require('express')
const app = express();

const cors = require('cors')


if(process.env.NODE_ENV !== "production"){
    require('dotenv').config({path:"backend/config/config.env"})
}

const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

/// importing routes
const user = require('./routes/user')

//
app.use('/api',user)


module.exports = app;