import { Document, Model } from 'mongoose';
import { IBanner } from '../interfaces/banner.interface';
interface IBannerDocument extends IBanner, Document {
}
declare const BannerModel: Model<IBannerDocument>;
export default BannerModel;
