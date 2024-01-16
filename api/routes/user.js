import express from "express";
import {
    verifyTokenAndAdmin,
    verifyTokenAndAuthorization
} from "../middleware/jwt.js"
import {
    deleteUser,
    getAllUsers,
    getUser,
    updateUser
} from "../controllers/user.controller.js";

const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/find/:id", verifyTokenAndAdmin, getUser);
router.get("/", getAllUsers);



export default router;