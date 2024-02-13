const express = require('express')
const app = require('./app')
const dotenv = require('dotenv');
const connectDatabase = require('./config/db');
const Product = require('./routes/productRoouter')

// config 
dotenv.config({path:"backend/config/.env"});


// connecting database 
connectDatabase();

app.use(express.json())
app.use(express.urlencoded({ extended:false}));
app.use('/api/v1',Product)


app.listen(process.env.PORT,()=>{
    console.log(`server run on port number ${process.env.PORT}`);
})  