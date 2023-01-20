const mongoose=require("mongoose");

const productSchema=new mongoose.Schema({
    id:Number,
    name:String,
    roll:Number,
    checkin:Number,
    checkout:Number,
    time : { type : Date, default: Date.now }

});

module.exports=mongoose.model("StuData",productSchema);
