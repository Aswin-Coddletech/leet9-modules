import { Document, Model } from "mongoose";
import { IUser } from "../interfaces/user.interface";
interface IUserDocument extends IUser, Document {
}
declare const UserModel: Model<IUserDocument>;
export default UserModel;
