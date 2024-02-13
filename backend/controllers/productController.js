const Product = require('../models/productsModel');

exports.creteProducts = async (req,res)=>{
    const product = await Product.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
}

exports.getAllProducts = async (req,res)=>{
    try{
        const product = await Product.find()
        res.status(200).json({success:true,data:product});
    }catch(err){
        res.status(500).json({message:"api is not working",err})
    }
}