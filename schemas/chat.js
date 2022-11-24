import mongoose from "mongoose";
const chat = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
});
const chatModel = mongoose.model("chat", chat);
export default chatModel;
