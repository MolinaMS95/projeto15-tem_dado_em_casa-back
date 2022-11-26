import { Router } from "express";

const router = Router();

router.get("/cart", getCart);
router.post("/cart", insertProduct);
router.delete("/cart", removeProduct)

export default router;