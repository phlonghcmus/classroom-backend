const { MongoClient } = require("mongodb");
let database;
// Create a new MongoClient
const client = new MongoClient("mongodb+srv://admin:18120452@classroommanager.jgw7a.mongodb.net/test",{ useUnifiedTopology: true });
async function run() {
        // Connect the client to the server
        await client.connect();
        // Establish and verify connection
       database= await client.db("ClassroomManager");
        console.log("Connected successfully to server");
}

run();

db=()=> database;

module.exports.db=db;