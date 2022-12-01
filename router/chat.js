import express from "express";
import chatModel from "../schemas/chat.js";
const router = express.Router();

router.post("/", (req, res) => {
  const newChat = new chatModel(req.body);
  newChat.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send("message sent");
    }
  });
});
router.get("/", (req, res) => {
  chatModel.find(req.body, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

export default router;
