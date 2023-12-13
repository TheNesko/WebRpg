const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname,"public")));

app.use((req,res) => {
    res.sendFile(path.join(__dirname,"public/index.htm"));
})

app.listen(3000,() => {
    console.log("App listening on port 3000");
})