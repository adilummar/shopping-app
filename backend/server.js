const app = require('./app')
const dotenv = require('dotenv');
const connnectDatabse = require("./config/db");
const connectDatabase = require('./config/db');

// config 
dotenv.config({path:"backend/config/.env"});

// connecting database 
connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`server run on port number ${process.env.PORT}`);
})