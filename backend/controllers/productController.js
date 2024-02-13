const Product = require('../models/productsModel');
// create products -- admin 
exports.creteProducts = async (req,res,next)=>{
    const product = await Product.create(req.body)
    res.status(201).json({
        success:true,
        product
    })
}

// get all product
exports.getAllProducts = async (req,res)=>{
    try{
        const product = await Product.find()
        res.status(200).json({success:true,data:product});
    }catch(err){
        res.status(500).json({message:"api is not working",err})
    }
}

// update product --admin 
exports.updateProduct = async (req,res,next)=>{
    let product = await Product.findById(req.params.id);
    if(!product){
        res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindandModify:false
    })

    res.status(200).json({success:true, data:product})
}

