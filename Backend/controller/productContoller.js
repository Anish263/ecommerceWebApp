const Product = require('../Model/productModel');

const createProduct = async (req,res,next) => {
   
        const product = await Product.create(req.body);
        res.status(201).json({success:true,product})

    
}

const getAllProducts = async (req, res) => {
    const products =  await Product.find();
    res.status(200).json({success:true,products});
  };
  
  
  



//update product Admin
const updateProduct = async(req,res,next) => {
        let product = await Product.findById(req.param.id);
        if(!product){
                return res.status(500).json({success:false , message : "Product Not Found"})
        }
        product= await Product.findByIdAndUpdate(req.param.id , req.body ,{
                new:true,
                runValidators:true,
                useFindAndModify:false
        })
        res.status(200).json({
                success:true,
                product
        })
}


module.exports = { getAllProducts ,createProduct ,updateProduct};