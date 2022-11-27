import joi from "joi";

export const cartSchema = joi.object({
  userId: joi.string().required(),
  gameId: joi.string().required(),
  price: joi.number().required(),
});