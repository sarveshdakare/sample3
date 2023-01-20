const express=require('express');
const cors=require('cors');
const app=express();
const mongoose=require("mongoose");

const Student=require("./db/Student");
const { db } = require('./db/Student');

var today = new Date();

console.log(today)



app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Attendance",(err)=>{
if(!err){
    console.log("connect")
}else{
    console.log(err)
}
})

app.get("/viewdata",async(req,resp)=>{
    let products=await Student.find();
    if(products.length>0){
        resp.send(products)
    }else{
        resp.send({result:"No Product Found"});
    }
})



app.get("/count",function(req,res){

    Student.count( {}, function(err, result){

        if(err){
            res.send(err)
        }
        else{
            res.json(result)
        }

   })


})

app.post("/add",async(req,resp)=>{
    let student=new Student(req.body)
    let result=await student.save();
    resp.send(result)
})

app.listen(8080,()=>{
    console.log("on port 3000")
})

