import { Router } from "express";
import { authValidation } from "../middlewares/authValidation.middleware";

const router = Router();
router.use(authValidation);

router.get("/cart", getCart);
router.post("/cart", insertProduct);
router.delete("/cart", removeProduct);

export default router;
