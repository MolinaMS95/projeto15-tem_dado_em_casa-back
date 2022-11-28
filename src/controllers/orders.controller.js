import { ObjectId } from "mongodb";
import { ordersCollection } from "../database/db.js";

export async function postOrder(req, res) {
  const userOrder = req.userOrder;

  try {
    await ordersCollection.insertOne(userOrder);
    return res.sendStatus(201);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
