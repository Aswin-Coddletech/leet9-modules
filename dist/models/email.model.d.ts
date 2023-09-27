import { Document, Model } from 'mongoose';
import { IEmail } from '../interfaces/user.interface';
interface IEmailDocument extends IEmail, Document {
}
declare const EmailModel: Model<IEmailDocument>;
export default EmailModel;
