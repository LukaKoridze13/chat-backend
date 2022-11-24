import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import users from "./router/users.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import chat from './router/chat.js'
const app = express();
const PORT = process.env.PORT || 4000;

dotenv.config();
mongoose.connect(process.env.DATABASE, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Database connected");
  }
});
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Server is online");
});


// Routes
app.use("/users", users);
app.use("/chat", chat);
