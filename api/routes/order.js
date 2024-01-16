import express from "express";
import {
    createOrder
} from "../controllers/order.controller.js";

const router = express.Router();

router.post("/", createOrder);
// router.put("/:id", updateOrder);
// router.delete("/:id", deleteOrder);
// router.get("/find/:userId", getOrder);
// router.get("/", getAllOrders);

export default router;