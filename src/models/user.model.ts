import { Document, Model, model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

/* 
In this updated code, a new interface IUserDocument is introduced, which extends both IUser and Document. 
The IUserDocument interface represents the
shape of the user document and ensures compatibility with the Mongoose model.
The UserModel is now defined as Model<IUserDocument>, which correctly specifies the document type.
By using IUserDocument as the document interface,
you should be able to resolve the type error and have proper typing for your Mongoose model and documents.
*/

interface IUserDocument extends IUser, Document {}

const userSchema = new Schema<IUserDocument>({
  email: { type: String},
  password: String,
  name: String,
  avatar: String,
  level: Number,
  active: Boolean,
  score: {type:Number,default:0},
  gamesPlayed: Number,
  achievements: Number,
  nextLevelUpAt:Number,
  firstLogin: { type: Number, default: 0 },
  achievementsShared: Number,
  points: { type: Number, default: 0 },
  lastVisit: String,
  gameIds: [
    {
      name: String,
      id: String,
    },
  ],
  uniqueIds: {
    type: [String],
    default: []
  },
  consecutiveVisits: Number,
  wallets: [
    {
      address: String,
      connected: Boolean,
      description:String,
      icon: String,
      name: String,
      rewarded: { type: Boolean, default: false },
      created: { type: Date, default: Date.now },
    },
  ],
  authType: String,
  pushNotification: Boolean,
  firebaseToken: String,
  socialMedia: [
    {
      name: String,
      connected: Boolean,
      rewarded: { type: Boolean, default: false },
      email:String,
      token:String,
    },
  ],
  lastUpdatedOtp: String,
  OtpExpires: Date,
  created: { type: Date, default: Date.now },
});

const UserModel: Model<IUserDocument> = model<IUserDocument>(
  "User",
  userSchema
);

export default UserModel;
