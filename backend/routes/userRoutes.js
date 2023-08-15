import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/userController.js";

const router = express.Router();

// Public Routes
router.post("/login", loginController);
router.post("/register", registerController);

export default router;
