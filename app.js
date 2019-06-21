// setup express
const express = require("express")
const app = express()

// connect DataBase
const mongoose = require("mongoose")
mongoose.connect("mongodb://Alkwifi:Alkwifi1976@ds135049.mlab.com:35049/amz_company_db",{ useNewUrlParser: true }).then(()=>console.log("DataBase Connected")
)

// Require Schema
const Product = require("./models/Product")

 // sending api to client
app.get("/api/products",(req, res)=>{
    Product
    .find()
    .then(result => res.send({express:result}))
 })

 // sending one product from DB
app.get("/product/:id",(req, res)=>{
    let productId = req.params.id
        Product
        .findById({_id: productId})
        .then(result =>{ 
            res.send({express:result})
            }) 
     })
// listening 
app.listen(5000,console.log("app running 5000")
)