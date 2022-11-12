 var mongoClient=require("mongodb").MongoClient;
 var express=require("express");
 var cors=require("cors");

 var connectionString="mongodb://127.0.0.1:27017";
 
 var app=express();

 app.use(cors());
 app.use(express.urlencoded({
    extended:true
 }));
 app.use(express.json());

 app.get("/products",(req,res)=>{
    mongoClient.connect(connectionString,(err,clientobj)=>{
        if(!err){
            var database=clientobj.db("shopdb");
            database.collection("tblproducts").find({}).toArray((err,document)=>{
                if(!err){
                    res.send(document)
                }
            })
        }
    })
 });
  app.get("/details/:id",(req,res)=>{
    var id=parseInt(req.params.id);
    mongoClient.connect(connectionString,(err,clientobj)=>{
       if(!err){
         var database=clientobj.db("shopdb");
         database.collection("tblproducts").find({ProductId:id}).toArray((err,document)=>{
            if(!err){
                res.send(document);
            }
         })
       } 
    })
  })

 app.post("/addproduct",(req,res)=>{
    var product={
        "ProductId":parseInt(req.body.ProductId),
        "Name":req.body.Name,
        "Price":parseFloat(req.body.Price),
        "Stock":(req.body.Stock=="true")?true:false
    };

    mongoClient.connect(connectionString,(err,clientobj)=>{
        var database=clientobj.db("shopdb");
        database.collection("tblproducts").insertOne(product,(err,result)=>{
            if(!err){
                console.log("Record Inserted");
            }
        })
    })

 });

 app.delete("/delete/:id",(req,res)=>{
    var id=parseInt(req.params.id);
    mongoClient.connect(connectionString,(err,clientobj)=>{
        if(!err){
            var database= clientobj.db("shopdb");
            database.collection("tblproducts").deleteOne({ProductId:id},(err,result)=>{
               if(!err){
                console.log("Record deleted");
                res.redirect("/product");
               } 
            })
        }
        
    })
});

app.put("/updateproduct:id",(req,res)=>{
    var id=parseInt(req.body.id);
    mongoClient.connect(connectionString,(err,clientobj)=>{
        if(!err){
            var database=clientobj.db("shopdb");
            var findQuery={ProductId:id};
            var product={
                "Name":req.body.Name,
                "Price":parseFloat(req.body.Price),
                "Stock":(req.body.Stock=="true")?true:false
            };
            var upadateQuery={$set:product};
            database.collection("tblproducts").updateOne(findQuery,upadateQuery,(err,result)=>{
                if(!err){

                    console.log("Record update");
                }
            })
        }
    })
});


 app.listen(4000);
 console.log("Server Started:http://localhost:4000");