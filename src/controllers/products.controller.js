import { productsCollection } from "../database/db.js";

export async function getProducts() {
  try {
    const products = await productsCollection.find({}).toArray();
    res.send(products);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}
