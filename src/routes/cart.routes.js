import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { cartSchemaValidation } from "../middlewares/cartSchemaValidation.middleware.js";
import { getCart, insertProduct } from "../controllers/cart.controller.js";

const router = Router();
router.use(authValidation);

router.get("/cart", getCart);
router.post("/cart", cartSchemaValidation, insertProduct);
router.delete("/cart", removeProduct);

export default router;
