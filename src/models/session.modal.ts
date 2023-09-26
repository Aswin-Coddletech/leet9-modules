import Mongoose from "mongoose";
const { Schema } = Mongoose;

const sessionModel = new Schema({
  gameName: String,
  gameId: Number,
  l9UserId:String,
  totalSession: Number,
  activeSessions: [
    {
      sessionId: String,
      userId: String,
      startTime: String,
      endTime: String,
    },
  ],
});

const Sessions = Mongoose.model("session", sessionModel);

export default Sessions;
