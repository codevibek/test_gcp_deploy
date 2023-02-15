var express = require("express")

var app = express()

app.get("/",(req,res)=>{
    res.send("Hello Azure Conatainer Registry Lover")
})

app.listen(8080,()=>{
    console.log("Hello world");
})