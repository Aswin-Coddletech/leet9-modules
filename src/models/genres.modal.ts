import Mongoose from "mongoose";
const { Schema } = Mongoose;

const genreModel = new Schema({
  name: String,
  value: String,
});

const Genre = Mongoose.model("genres", genreModel);

export default Genre;
