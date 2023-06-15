import express from "express";
import { registerUser, loginUser, getMe } from "../controllers/userControllers.js";
import { protect } from "../middlewere/authMiddleware.js";
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

export default router;
