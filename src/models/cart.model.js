import joi from "joi";

export const cartSchema = joi.object({
  userId: joi.object().required(),
  gameId: joi.string().required(),
  price: joi.number().required(),
});