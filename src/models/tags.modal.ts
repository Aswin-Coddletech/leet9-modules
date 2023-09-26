import Mongoose from "mongoose";
const { Schema } = Mongoose;

const tagsModel = new Schema({
  name: String,
  value: String,
  key:String,
});

const Tags = Mongoose.model("Tags", tagsModel);

export default Tags;
