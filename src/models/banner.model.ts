import { Document, Model, model, Schema } from 'mongoose';
import { IBanner } from '../interfaces/banner.interface';

interface IBannerDocument extends IBanner, Document {}
const bannerSchema = new Schema<IBannerDocument>({
    title : String,
    description : String,
    buttonText : String,
    externalLink : String,
    type : String,
    image : String,
    status : Boolean,
    createdAt : { type: Date, default: Date.now },
});

const BannerModel: Model<IBannerDocument> = model<IBannerDocument>('Banner', bannerSchema);

export default BannerModel;
