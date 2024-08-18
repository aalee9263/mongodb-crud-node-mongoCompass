const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user123:${process.env.MONGODB_PASSWORD}@mongoyoutube.t71dy.mongodb.net/?retryWrites=true&w=majority&appName=MongoYoutube";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");
/*
    Select the database and collection and method function
    Here is perform your all operations
 */
// insert one document
    
    await client.db('test').collection('inventory').insertOne({
      item: 'canvas',
      qty: 100,
      tags: ['cotton'],
      size: { h: 28, w: 35.5, uom: 'cm' }
    });
// insert many document
    
    await client.db('test').collection('inventory').insertMany({
      item: 'canvas',
      qty: 100,
      tags: ['cotton'],
      size: { h: 28, w: 35.5, uom: 'cm' }
    });
// update one document
    
    await client.db('test').collection('inventory').updateOne({
      item: 'canvas',
      qty: 100,
      tags: ['cotton'],
      size: { h: 28, w: 35.5, uom: 'cm' }
    });
// update many document
// await client.db('test').collection('inventory').updateOne(
    await client.db('test').collection('inventory').updateMany({
      item: 'canvas',
      qty: 100,
      tags: ['cotton'],
      size: { h: 28, w: 35.5, uom: 'cm' }
    });
// update remove one document
//await db.collection('inventory').deleteMany({ status: 'A' }); delete specific
//await db.collection('inventory').deleteMany(); delete all documents
// await db.collection('inventory').deleteOne({ status: 'D' }); delete one specific

    
    await client.db('test').collection('inventory').updateMany({
      item: 'canvas',
      qty: 100,
      tags: ['cotton'],
      size: { h: 28, w: 35.5, uom: 'cm' }
    });







    
  } catch (e) {
    console.error("Error:", e);
  } finally {
    // Ensure the client will close when you finish/error
    await client.close();
    console.log("Connection closed.");
  }
}

run().catch(console.dir);
