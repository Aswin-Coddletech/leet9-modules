import Mongoose from "mongoose";
const { Schema } = Mongoose;

const menuModel = new Schema({
  name: String,
  icon: String,
  color:String,
  position:String
});

const Menu = Mongoose.model("menus", menuModel);

export default Menu;
