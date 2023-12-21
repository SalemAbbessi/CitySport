const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new mongoose.Schema({
  name_product: {
    type: String,
    trim:true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim:true
  },
  price: {
    type:Number,
    required:true,
    min:0
  },
  stock: {
    type:Number,
    required:true,
    min:0
  },
  image: {
    type:String,
    required:true,
  },
  isactive:{
    type:Boolean,
 default:true 
 },
 createdAT:{
 type: Date,
 default: Date.now   
 },
 updatedAT:{
    type: Date,  
    },

});
module.exports=mongoose.model('Product',productSchema);

