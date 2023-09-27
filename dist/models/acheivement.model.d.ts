import { Document, Model } from 'mongoose';
import { IAchivement } from '../interfaces/acheivement.interface';
interface IAchivementDocument extends IAchivement, Document {
}
declare const AchivementModel: Model<IAchivementDocument>;
export default AchivementModel;
