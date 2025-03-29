const { MongoClient, ServerApiVersion } = require("mongodb");
const { loadEnvConfig } = require("@next/env");

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const client = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

(async () => {
  console.log(client);
  const collection = client.db("data").collection("data");
  console.log(collection);

  const entries = await collection.countDocuments();
  console.log("docs", entries);

  const entry = await collection.findOne({
    username: "testing",
  });
  console.log("entry", entry);
})();
