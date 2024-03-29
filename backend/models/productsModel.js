const mongoose = require('mongoose');

const productShema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter your product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true, "please enter your product description"]
    },
    price:{
        type:Number,
        required:[true, "please enter your product price"],
        maxLength:[8,"price cannot exceed 8 charecters"]
    },
    rating:{
        type:Number,
        default:0
    },
    image:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        }
    }],
    category:{
        type:String,
        required:[true,"please Enter product category"]
    },
    Stock:{
        type:Number,
        required:[true,"please Enter Product Stock"],
        maxLength:[4,"this property cannot exceed 4 characters"],
        default:1
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    review:[{
        name:{
            type:String,
            required:true
        },
        rating:{
            type:Number,
            required:true
        },
        comment:{
            type:String,
            required:true
        }
    }],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("product",productShema);