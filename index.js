const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = `mongodb+srv://user123:${process.env.MONGODB_PASSWORD}@mongoyoutube.t71dy.mongodb.net/?retryWrites=true&w=majority&appName=MongoYoutube`;

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

    // Select the database and collection
    const database = client.db("test"); // Replace 'test' with your database name
    const collection = database.collection("inventory"); // Replace 'testCollection' with your collection name

    // Insert a single document
    const doc1 = {
      name: "John Doe",
      age: 30,
      occupation: "Engineer"
    };
    const result1 = await collection.insertOne(doc1);
    console.log(`Inserted document with _id: ${result1.insertedId}`);

    // Insert multiple documents
    const docs = [
      { name: "Jane Smith", age: 28, occupation: "Designer" },
      { name: "Peter Parker", age: 22, occupation: "Photographer" },
      { name: "Bruce Wayne", age: 35, occupation: "Businessman" }
    ];
    const result2 = await collection.insertMany(docs);
    console.log(`Inserted ${result2.insertedCount} documents`);

  } catch (e) {
    console.error("Error:", e);
  } finally {
    // Ensure the client will close when you finish/error
    await client.close();
    console.log("Connection closed.");
  }
}

run().catch(console.dir);
