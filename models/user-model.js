const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  fullName:String,
  email:String,
  password:String,
  cart:{
    type:Array,
    default:[]
  },
  isadmin:Boolean,
  orders:Array,
  contact:Number,
  picture:String

})
module.exports = mongoose.model('user',userSchema)