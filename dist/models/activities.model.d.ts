import { Document, Model } from 'mongoose';
import { IActivites } from '../interfaces/activities.interface';
interface IActivitesDocument extends IActivites, Document {
}
declare const ActivitiesModel: Model<IActivitesDocument>;
export default ActivitiesModel;
