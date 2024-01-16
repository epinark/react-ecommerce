import express from "express";

const router = express.Router();

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/find/:id", getUser);
router.get("/", getAllUsers);



export default router;