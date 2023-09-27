import Mongoose from 'mongoose';
import { INews } from '../interfaces/news.interface';
declare const News: Mongoose.Model<INews, {}, {}, {}, Mongoose.Document<unknown, {}, INews> & INews & {
    _id: Mongoose.Types.ObjectId;
}, Mongoose.Schema<INews, Mongoose.Model<INews, any, any, any, Mongoose.Document<unknown, any, INews> & INews & {
    _id: Mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, Mongoose.DefaultSchemaOptions, INews, Mongoose.Document<unknown, {}, INews> & INews & {
    _id: Mongoose.Types.ObjectId;
}>>;
export default News;
