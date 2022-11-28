import dotenv from "dotenv";
import { MongoClient, ServerApiVersion } from "mongodb";

dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
try {
  await mongoClient.connect();
  console.log("MongoDB conectado com sucesso!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("temdadoemcasa");
export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("sessions");
export const productsCollection = db.collection("products");
export const cartCollection = db.collection("cart");
export const ordersCollection = db.collection("orders");
