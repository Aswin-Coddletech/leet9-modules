import { Document, Model } from 'mongoose';
import { ILevel } from '../interfaces/level.interface';
interface ILevelDocument extends ILevel, Document {
}
declare const LevelModel: Model<ILevelDocument>;
export default LevelModel;
