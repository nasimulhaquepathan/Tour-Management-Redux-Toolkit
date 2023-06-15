import express from "express";
import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from "../controllers/goalController.js";
const router = express.Router();

import { protect } from "../middlewere/authMiddleware.js";

router.route("/").get(protect, getGoals).post(protect, setGoal);
router.route("/:id").delete(protect, deleteGoal).put(protect, updateGoal);

export default router;
