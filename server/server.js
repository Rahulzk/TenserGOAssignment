const app  = require('./app')
const { connectDatabase } = require('./config/database')

connectDatabase();


app.listen(4000,()=>{
    console.log(`server is running at ${process.env.PORT}`)
})