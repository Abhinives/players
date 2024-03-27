const cors = require('cors');

const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");


const PlayerRoute = require("../routes/Player");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());


const PORT = 3000;

app.use('/api', PlayerRoute);
const connectToDb = async()=>{
    try{
        await mongoose.connect('mongodb+srv://Abhi:Q8DkOMTH8bx1NRAC@cluster0.unnuqmn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("Connected to DB");
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
connectToDb();
app.listen(PORT, ()=>{
    console.log("Server started");
})