import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("API IS WORKING...!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server Started Working...`);
});
