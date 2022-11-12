var mongoClient=require("mongodb").MongoClient;
var express=require("express");
var cors=require("cors");

var app=express();

app.get("/",(req,res)=>{
    res.send("<h2>Shopping API</h2>")
})
app.listen(4000);
console.log("Server Started http://127.0.0.1:4000")