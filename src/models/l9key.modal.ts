import Mongoose from "mongoose";
const { Schema } = Mongoose;

const l9keyModel = new Schema({
  percentile: Number,
  multiplyer: [{
    stat:String,
    value:Number
  }],
});

const L9key = Mongoose.model("l9key", l9keyModel);

export default L9key;
