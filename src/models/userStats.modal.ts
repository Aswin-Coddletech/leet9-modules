import Mongoose from "mongoose";
const { Schema } = Mongoose;

const statsModel = new Schema({
  gameName: String,
  gameId: Number,
  l9UserId:String,
  gamePoints:Number,
  stat1Percentile:Number,
  stat2Percentile:Number,
  stat3Percentile:Number,
  stat4Percentile:Number,
});

const UserStats = Mongoose.model("userStats", statsModel);

export default UserStats;
