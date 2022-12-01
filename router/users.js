import express from "express";
import userModel from "../schemas/users.js";

const router = express.Router();

router.post("/", (req, res) => {
  const newUser = new userModel(req.body);
  newUser.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send(
        req.body.name + " " + req.body.surname + " account saved successfully"
      );
    }
  });
});
router.get("/", (req, res) => {
  userModel.find(req.body, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
router.get("/:name", (req, res) => {
  userModel.find({ name: req.params.name }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});
export default router;
