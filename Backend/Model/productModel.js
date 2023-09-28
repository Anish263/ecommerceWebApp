const mongoose = require('mongoose');

// Define the Product schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true,"please enter product name"],
    trim:true
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true,"please enter product price"],
    maxLength:[8,'price cannot exceed 8 char']
  },
  rating: {
    type: Number,
    default:0
  },
  images: [{
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
    required:[true,"please enter product category"]

  },
  Stock:{
    type:Number,
    required:[true,"please enter stock"],
    maxLength:[4,"cannot exceed more than 4"]
  },
  numOfReviews:{
    type : Number ,default:0
  },
  reviews:[{
    name:{
        type:String,
        required:true,
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
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
