import express from "express";
import {
    createCart
} from "../controllers/cart.controller.js";

const router = express.Router();

router.post("/", createCart);
// router.put("/:id", updateCart);
// router.delete("/:id", deleteCart);
// router.get("/find/:userId", getCart);
// router.get("/", getAllCarts);

export default router;