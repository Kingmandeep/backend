const express = require("express");
const path=require("path");
const bodyParser = require("body-parser");
const router = require("./UserRoutes");

const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json())
app.use(router)
// app.get("/api/vi/userdata",(req,res)=>{
//     res.json({
//         name:"Mandeep",
//         email:"devmandeep1@gmail.com",
//         password:"common",
//     });
// });
app.get("/",(req,res)=>{
        res.sendFile(path.join(__dirname+"/index.html"));
    })

app.post("");

//
// app.get("/about",(req,res)=>{
//     res.send("<h1>About Page</h1>")
// })
// app.get("/contact",(req,res)=>{
//     res.send("<h1>Contact Page</h1>")
// })

// app.post("/api/vi/login",(req,res)=>{
//     res.send(`<h1>Done</h1> you Name is : ${req.body.name} `)
//    console.log("name")
//    console.log(req.body)
// })

app.listen(port,()=>{
    console.log(`Server is running on port : ${port}`)
})