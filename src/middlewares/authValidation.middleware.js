import { ObjectId } from "mongodb";
import { sessionsCollection, usersCollection } from "../database/db.js";

export async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const session = await sessionsCollection.findOne({ token });
    if (!session) {
      return res.sendStatus(401);
    }

    const user = await usersCollection.findOne({
      _id: new ObjectId(session?.userId),
    });
    if (!user) {
      return res.sendStatus(401);
    }

    req.user = user;
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }

  next();
}
