const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const uri = process.env.MONGO_URL;

// mongoose.set("strictQuery", true);
mongoose.connect(uri)
    .then(() => {
        console.log("MongoDB connected successfully...");
    }).catch((err) => {
        console.log("MongoDB connection error : ", err);
    })