const express = require('express')
const mongoose = require('mongoose');
const app = express();
var Schema = mongoose.Schema;
// Connecting with the database
// You must provide your own database link
mongoose.connect('mongodb://yusrahbablani:123456abc@ds141611.mlab.com:41611/mernstackdatabase',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Database is connected");
    }
})


// Defining the schema 
var student = Schema({
    name: String,
    rollNo:String
})

var Student = mongoose.model('Student', student);
var stud = new Student();
stud.name = "Saqib";
stud.rollNo = "123245234"


stud.save((stud,err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(stud);
    }
});
app.get('/',(req,res)=>{
    res.json({msg:"server and database worked"})
})

// app.post('/',(req,res)=>{
//     var stud = new Student();
//     stud.name = "Saqib";
//     stud.rollNo = "123245234"


//     stud.save();
// })


app.listen("4000",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Server is running on Port 4000");
    }
})


