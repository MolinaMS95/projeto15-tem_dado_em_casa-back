import { orderSchema } from "../models/orders.model.js";

export async function orderSchemaValidation(req, res, next) {
  const user = req.user;
  const cart = req.body.items;
  const total = req.body.total;
  const payment = req.body.payment;
  const address = req.body.address;
  const phone = req.body.phone;
  const items = [];
  items.forEach((e) => {
    items.push(e.gameId);
  });
  try {
    const userOrder = {
      userId: user._id,
      address: address,
      phone: phone,
      items: items,
      total: total,
      payment: payment,
    };

    const { error } = orderSchema.validate(userOrder, { abortEarly: false });

    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).send(errors);
    }
    req.userOrder = userOrder;

    next();
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
}
