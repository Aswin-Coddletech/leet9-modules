"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var attachmentSubSchema = new Schema({
    attachmentId: String,
    attachmentName: String,
    proxyURL: String,
    size: Number,
    contentType: String,
    height: Number,
    width: Number,
    attachmentState: Boolean
});
var newsModel = new Schema({
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
var News = mongoose_1.default.model('news', newsModel);
exports.default = News;
