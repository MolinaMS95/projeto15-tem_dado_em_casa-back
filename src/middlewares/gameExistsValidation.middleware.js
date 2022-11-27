import { ObjectId } from "mongodb";
import { cartCollection } from "../database/db.js";

export async function gameExistsValidation(req, res, next) {
  const userId = req.user._id;
  const gameId = req.params.id;

  try {
    const userCart = await cartCollection.findOne({ userId, gameId });
    console.log(userCart);
    if (!userCart) {
      return res.sendStatus(404);
    }
    req.product = userCart;
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  next();
}
