import { Document, Model, model, Schema } from 'mongoose';
import { IEmail } from '../interfaces/user.interface';


interface IEmailDocument extends IEmail, Document {}
const emailSchema = new Schema<IEmailDocument>({
  email: { type: String, unique: true },
  authType: String,
  sent: Boolean,
  token:String,
  created: { type: Date, default: Date.now },
});

const EmailModel: Model<IEmailDocument> = model<IEmailDocument>('Email', emailSchema);

export default EmailModel;


