import { cartCollection } from "../database/db.js";

export async function gameExistsValidation(req, res, next) {
  const userId = req.user._id;
  const { gameId } = req.body;

  try {
    const userCart = await cartCollection.findOne({ userId, gameId });
    if (!userCart) {
      return res.sendStatus(401);
    }
    req.product = userCart;
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  next();
}
