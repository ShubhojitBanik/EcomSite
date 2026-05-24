// backend/server.js

const multer = require("multer");
const path = require("path");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const app = express();

// MIDDLEWARE

app.use(cors());

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use((req,res,next)=>{

    console.log(req.method, req.url);

    next();

});

// MONGODB CONNECTION

mongoose.connect(process.env.MONGO_URI)

.then(()=>{

    console.log("MongoDB connected");

})

.catch((err)=>{

    console.log(err);

});

// MULTER STORAGE

const storage = multer.diskStorage({

    destination:(req,file,cb)=>{

        cb(null,"uploads/");

    },

    filename:(req,file,cb)=>{

        cb(

            null,

            Date.now() +

            path.extname(file.originalname)

        );

    }

});

const upload = multer({ storage });

// PRODUCT SCHEMA

const productSchema = new mongoose.Schema({

    name:String,

    price:Number,

    description:String,

    image:String

});

const Product = mongoose.model(
    "Product",
    productSchema
);

// ORDER SCHEMA

const orderSchema = new mongoose.Schema({

    product:String,

    name:String,

    mobile:String,

    quantity:Number,

    createdAt:{
        type:Date,
        default:Date.now
    }

});

const Order = mongoose.model(
    "Order",
    orderSchema
);

// JWT VERIFY MIDDLEWARE

const verifyAdmin = (req,res,next)=>{

    const token = req.headers.authorization;

    if(!token){

        return res.status(401).json({
            message:"No Token"
        });

    }

    try {

        const verified = jwt.verify(

            token,

            process.env.JWT_SECRET

        );

        req.user = verified;

        next();

    } catch(err) {

        return res.status(401).json({
            message:"Invalid Token"
        });

    }

};

// ROUTES

// ADMIN LOGIN

app.post("/api/admin/login",(req,res)=>{

    const { username,password } = req.body;

    // CHANGE LATER

    const adminUser = "admin";

    const adminPass = "123456";

    if(

        username !== adminUser ||

        password !== adminPass

    ) {

        return res.status(401).json({

            message:"Invalid Credentials"

        });

    }

    const token = jwt.sign(

        {

            username

        },

        process.env.JWT_SECRET,

        {

            expiresIn:"7d"

        }

    );

    res.json({

        token

    });

});

// GET PRODUCTS

app.get("/api/products", async (req,res)=>{

    try {

        const products = await Product.find();

        res.json(products);

    } catch(err) {

        console.log(err);

        res.status(500).json(err);

    }

});

// ADD PRODUCT

app.post(

    "/api/products",

    verifyAdmin,

    upload.single("image"),

    async (req,res)=>{

        try {

            const product = new Product({

                name:req.body.name,

                price:Number(req.body.price),

                description:req.body.description,

                image:
                `https://ujtrading-backend.onrender.com/uploads/${req.file.filename}`

            });

            await product.save();

            res.json(product);

        } catch(err) {

            console.log(err);

            res.status(500).json(err);

        }

    }

);

// DELETE PRODUCT

app.delete(

    "/api/products/:id",

    verifyAdmin,

    async (req,res)=>{

        try {

            await Product.findByIdAndDelete(
                req.params.id
            );

            res.json({
                message:"Deleted"
            });

        } catch(err) {

            console.log(err);

            res.status(500).json(err);

        }

    }

);

// PLACE ORDER

app.post("/api/orders", async (req,res)=>{

    try {

        const order = new Order(req.body);

        await order.save();

        res.json(order);

    } catch(err) {

        console.log(err);

        res.status(500).json(err);

    }

});

// GET ORDERS

app.get(

    "/api/orders",

    verifyAdmin,

    async (req,res)=>{

        try {

            const orders = await Order.find();

            res.json(orders);

        } catch(err) {

            console.log(err);

            res.status(500).json(err);

        }

    }

);

// START SERVER

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{

    console.log(
        `Server running on port ${PORT}`
    );

});