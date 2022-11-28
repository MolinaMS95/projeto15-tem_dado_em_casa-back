import { Router } from "express";
import { postOrder } from "../controllers/orders.controller.js";
import { authValidation } from "../middlewares/authValidation.middleware.js";
import { orderSchemaValidation } from "../middlewares/orderSchemaValidation.middleware.js";

const router = Router();
router.use(authValidation);

router.post("/orders", orderSchemaValidation, postOrder);

export default router;
