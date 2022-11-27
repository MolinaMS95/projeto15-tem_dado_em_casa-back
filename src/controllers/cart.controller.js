import { ObjectId } from "mongodb";
import { cartCollection } from "../database/db.js";

export async function getCart(req, res) {
  const user = req.user;

  try {
    const userCart = await cartCollection
      .find({ userId: new ObjectId(user._id) })
      .toArray();
    res.send(userCart);
  } catch (err) {
    res.sendStatus(500);
  }
}
