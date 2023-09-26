import Mongoose from "mongoose";
const { Schema } = Mongoose;

const userGameModel = new Schema({ 
  name: String,
  genre:[String],
  status:String,
  gameId:String,
  technology:String,
  // gamers:[{type:Mongoose.Schema.Types.ObjectId}]
  gamers: [String],
},{
  collection:"userGames"
}
);

const userGames = Mongoose.model("userGame", userGameModel);

export default userGames;
