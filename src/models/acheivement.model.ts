import { Document, Model, model, Schema } from 'mongoose';
import { IAchivement } from '../interfaces/acheivement.interface';

interface IAchivementDocument extends IAchivement, Document {}
const acheivementSchema = new Schema<IAchivementDocument>({
  image: String,
  title: String,
  maxScore: Number,
});

const AchivementModel: Model<IAchivementDocument> = model<IAchivementDocument>('Achivement', acheivementSchema);

export default AchivementModel;
