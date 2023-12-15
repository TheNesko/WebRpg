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

class Database{
    constructor(){
      this.MongoClient = require('mongodb');
      this.uri = "mongodb+srv://CursedIndel:PenFQghfjTbT3HS@webrpg.odveqn7.mongodb.net/?retryWrites=true&w=majority";
      this.client = new MongoClient(this.uri);
    }
    async get(query) {
      var result;
      try {
        await this.client.connect();
        // Send a ping to confirm a successful connection
        await this.client.db("admin").command({ ping: 1 });
        const data = this.client.db("User");
        const coll = data.collection("User");
    
        result = await coll.find(query).toArray();
    
      } finally {
        await this.client.close();
        return result;
      }
    }
  }
  const db = new Database();