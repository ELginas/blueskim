"use server";
import { MongoClient, ServerApiVersion } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI!, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const db = client.db(process.env.MONGODB_DB!);

export async function ping() {
  // Send a ping to confirm a successful connection
  await db.command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
}

export async function getItems(username: string) {
  const entry = await db.collection("users").findOne({
    username,
  });
  return entry!.servers;
}
