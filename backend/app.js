import express from "express";
import productRoute from "./routes/products.js";

export const app = express();
app.use(express.json());  // always write it before the route if you dont't want to get the error

// using middlewares
app.use("/api/v1/product",productRoute);  //using routes by importing from routes/product.js

app.get("/Home",(req,res)=>{
    res.status(201).send("Welcome to the Homepage");
});