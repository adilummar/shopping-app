const mongoose = require("mongoose");

const connectDatabase = ()=>{

    mongoose.connect(process.env.DB,{ useNewUrlParser: true, useUnifiedTopology: true }).then((data)=>{
        console.log(`database is running in port : ${data.connection.host}`);
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports = connectDatabase;
