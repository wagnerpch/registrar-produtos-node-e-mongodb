const { MongoClient } = require("mongodb");

const uri =
  "mongodb://root:example@127.0.0.1:27017/testemongodb?authSource=admin";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Conectado");
  } catch (error) {
    console.log(error);
  }
}

run();

module.exports = client;
