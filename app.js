const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const user = require("./model/user");

mongoose.connect('mongodb://localhost:27017/public/login');
const app = express();

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.json());

app.use((req,res) => {
    res.sendFile(path.join(__dirname,"public/index.htm"));
})

app.post("public/login",async (req, res) =>{
    console.log(req.body);
    res.json({status: "ok"});
})

app.listen(3000,() => {
    console.log("App listening on port 3000");
})

