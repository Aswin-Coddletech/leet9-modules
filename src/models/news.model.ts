import Mongoose from 'mongoose';
import { IAttachments, INews } from '../interfaces/news.interface';
const { Schema } = Mongoose;

const attachmentSubSchema = new Schema<IAttachments>({
  attachmentId: String,
  attachmentName: String,
  proxyURL: String,
  size: Number,
  contentType: String,
  height: Number,
  width: Number,
  attachmentState: Boolean
})

const newsModel = new Schema<INews>({
    newsId: String,
    authorId: String,
    authorUsername: String,
    newsContent: String,
    gameStudioName: String,
    gameContentURL: String,
    gameProxyURL: String,
    source: String,
    attachmentDetails: [attachmentSubSchema],
    createdDateTime: Number,
    channelName: String,
    newsUpdated: Boolean,
    activeState: Boolean
  });
  
  const News = Mongoose.model('news', newsModel);
  
  export default News;