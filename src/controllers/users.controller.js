import bcrypt from "bcrypt";
import { usersCollection, sessionsCollection } from "../database/db.js";
import { v4 as uuidV4 } from "uuid";
import { ObjectId } from "mongodb";

export async function signUp(req, res) {
  const user = req.body;

  try {
    const hashPassword = bcrypt.hashSync(user.password, 10);
    await usersCollection.insertOne({ ...user, password: hashPassword });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const user = req.userSignin;
  const token = uuidV4();

  try {
    const sessionExists = await sessionsCollection.findOne({ userId: new ObjectId(user._id) });
    if (sessionExists) {
      await sessionsCollection.deleteOne({ userId: new ObjectId(user._id) });
    }

    await sessionsCollection.insertOne({
      token,
      userId: user._id,
    });

    const responseObj = {
      token: token,
      user: user.name,
    };

    res.send(responseObj);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
