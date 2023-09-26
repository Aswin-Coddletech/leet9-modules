import { Document, Model, model, Schema } from 'mongoose';
import { IActivites } from '../interfaces/activities.interface';

interface IActivitesDocument extends IActivites, Document {}
const activitiesSchema = new Schema<IActivitesDocument>({
  image: String,
  name: String,
  description: String,
  completion: Number,
});

const ActivitiesModel: Model<IActivitesDocument> = model<IActivitesDocument>('Activities', activitiesSchema);

export default ActivitiesModel;
