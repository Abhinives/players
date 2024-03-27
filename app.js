const cors = require('cors');

const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");


const PlayerRoute = require("./routes/Player");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors());


const PORT = 3000;

app.use('/api', PlayerRoute);
const connectToDb = async()=>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/player')
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