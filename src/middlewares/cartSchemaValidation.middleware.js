import { ObjectId } from "mongodb";
import { productsCollection } from "../database/db.js";
import { cartSchema } from "../models/cart.model.js";

export async function cartSchemaValidation(req, res, next) {
  const user = req.user;
  const gameId = req.body.game;

  try {
    const game = await productsCollection.findOne({
      _id: new ObjectId(gameId),
    });
    if (!game) {
      return res.sendStatus(404);
    }

    const userCart = {
      userId: user._id,
      gameId: gameId,
      price: game.price,
      gameName: game.name,
    };
    
    const { error } = cartSchema.validate(userCart, { abortEarly: false });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
    req.userCart = userCart;

    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
