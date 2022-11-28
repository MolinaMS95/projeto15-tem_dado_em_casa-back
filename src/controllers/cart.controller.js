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

export async function insertProduct(req, res) {
  const userCart = req.userCart;

  try {
    await cartCollection.insertOne(userCart);
    return res.sendStatus(201);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}

export async function removeProduct(req, res) {
  const userCart = req.product;

  try {
    await cartCollection.deleteOne(userCart);
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function clearCart(req, res) {
  const user = req.user;

  try {
    await cartCollection.deleteMany({ userId: new ObjectId(user._id) });
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
