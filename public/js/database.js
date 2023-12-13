class Database{
  constructor(){
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://CursedIndel:PenFQghfjTbT3HS@webrpg.odveqn7.mongodb.net/?retryWrites=true&w=majority";

    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
      serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
      }
    });
  }
  async get(query) {
    var result;
    try {
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      const db = client.db("User");
      const coll = db.collection("User");
  
      result = await coll.find(query).toArray();
  
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
      return result;
    }
  }
}
const db = new Database();