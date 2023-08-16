import express from "express";
import {
  loginController,
  logoutController,
  registerController,
} from "../controllers/userController.js";

const router = express.Router();

// Public Routes
router.post("/login", loginController);
router.post("/register", registerController);
router.delete("/logout", logoutController);

export default router;
