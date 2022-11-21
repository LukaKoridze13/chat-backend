import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";
const user = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});
user.plugin(mongooseUniqueValidator);
const userModel = mongoose.model("users", user);
export default userModel;
