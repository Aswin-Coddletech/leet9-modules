import { Document, Model } from 'mongoose';
import { IBonus } from '../interfaces/bonus.interface';
interface IBonusDocument extends IBonus, Document {
}
declare const BonusModel: Model<IBonusDocument>;
export default BonusModel;
