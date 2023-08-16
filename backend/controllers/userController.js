import asyncHandler from "express-async-handler";
import userModel from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const loginController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Please enter all fields" });
  }

  const user = await userModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
});

const registerController = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await userModel.findOne({ email });

  if (userExists) {
    res.status(400).json({
      message: "user already exists",
    });
  }
  const user = await userModel.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(404).json({ message: "Invalid user data" });
  }
});

const logoutController = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.status(200).json({ message: "user logout successfully" });
});
export { loginController, registerController, logoutController };
