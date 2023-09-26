import { Document, Model, model, Schema } from 'mongoose';
import { IBanner } from '../interfaces/banner.interface';
import { ILevel } from '../interfaces/level.interface';

interface ILevelDocument extends ILevel, Document {}
const levelSchema = new Schema<ILevelDocument>({
    levelConstant : Number,
    key:String,
    createdAt : { type: Date, default: Date.now },
    modifiedAt : {type: Date, default: Date.now }
});

const LevelModel: Model<ILevelDocument> = model<ILevelDocument>('levels', levelSchema);

export default LevelModel;
