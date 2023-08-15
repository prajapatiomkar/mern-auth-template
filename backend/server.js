import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./configs/db.js";

const app = express();

connectDB();
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get("/", (req, res) => {
  res.send("API IS WORKING...!");
});

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server Started Working...`);
});
