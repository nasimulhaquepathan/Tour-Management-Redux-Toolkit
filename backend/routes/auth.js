import express from "express";
import {
  allUser,
  current,
  login,
  logout,
  register,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/current", current);
router.post("/alluser", allUser);

export default router;
