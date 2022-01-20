const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/sample",{useNewUrlParser:true,useUnifiedTopology:true,}).then(()=>{
    console.log("Connected to MongoDB successfully")
}).catch((err)=>{
    console.log(err);
})

const student =new mongoose.Schema({
    name:String,
    workout:Boolean,
    height:Number
})

const Student =new mongoose.model("Student",student);

const adder = async()=>{
    const ss= await Student.create({
        name:"Mandeep kumar",
        workout:true,
        height:6
    });
    
    
}

adder();