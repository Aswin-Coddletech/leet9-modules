import Mongoose from "mongoose";
const { Schema } = Mongoose;

const gameTypesModel = new Schema(
  {
    name: String,
    value: String,
  },
  {
    collection: "gameTypes",
  }
);

const GameType = Mongoose.model("gameType", gameTypesModel);

export default GameType;
