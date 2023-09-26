import { Document, Model, model, Schema } from 'mongoose';
import { IBonus } from '../interfaces/bonus.interface';

interface IBonusDocument extends IBonus, Document {}
const bonusSchema = new Schema<IBonusDocument>({
  criteria: Schema.Types.Mixed,
  title: String,
  point: Number,
  type: String,
  family: String,
  desription: String,
  objective: String,
  iteration: String,
  looped: Boolean,
  bedge: String,
  image:String,
  bedgeName:String,
  bedgeCollectionPoint: String,
  oneYearMaxPoints: Number,
  comment: String,
});

const BonusModel: Model<IBonusDocument> = model<IBonusDocument>('Bonus', bonusSchema);

export default BonusModel;
