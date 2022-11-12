var mongoClient=require("mongodb").MongoClient;
var express=require("express");
var cors=require("cors");

var app=express();
app.use(cors());

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("<h2>Shopping API</h2>")
});
app.get("/getusers",(req,res)=>{
    mongoClient.connect("mongodb://127.0.0.1:27017",(err,clientobj)=>{
      if(!err){
          var database=clientobj.db("shopdb");
          database.collection("tblusers").find({}).toArray((err,document)=>{
            if(!err){
                res.send(document);
            }else{
                console.log(err);
            }

          }
          )
      }else{
           console.log(err);
      }

    })
});
   app.post("/registeruser",(req,res)=>{
    var user={
        "UserName":req.body.UserName,
        "Password":req.body.Password,
        "Email":req.body.Email,
        "Mobile":req.body.Mobile
    };
    mongoClient.connect("mongodb://127.0.0.1:27017",(err,clientobj)=>{
        if(!err){
              var database=clientobj.db("shopdb")
              database.collection("tblusers").insertOne(user,(err,result)=>{
                if(!err){
                    console.log("record inserted")
                }else{
                    console.log(err);
                }
              })
        }
    
    })
    })

app.listen(4000);
console.log("Server Started http://127.0.0.1:4000")