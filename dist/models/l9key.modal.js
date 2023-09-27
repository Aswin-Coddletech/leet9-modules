"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var l9keyModel = new Schema({
    percentile: Number,
    multiplyer: [{
            stat: String,
            value: Number
        }],
});
var L9key = mongoose_1.default.model("l9key", l9keyModel);
exports.default = L9key;
