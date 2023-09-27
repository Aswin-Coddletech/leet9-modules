"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var tagsModel = new Schema({
    name: String,
    value: String,
    key: String,
});
var Tags = mongoose_1.default.model("Tags", tagsModel);
exports.default = Tags;
