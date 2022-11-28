import joi from "joi";

export const orderSchema = joi.object({
  userId: joi.object().required(),
  address: joi.string().required(),
  phone: joi.string().required(),
  items: joi.array().required(),
  total: joi.number().required(),
  payment: joi.string().required(),
});
