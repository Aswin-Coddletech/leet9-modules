"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var gameTypesModel = new Schema({
    name: String,
    value: String,
}, {
    collection: "gameTypes",
});
var GameType = mongoose_1.default.model("gameType", gameTypesModel);
exports.default = GameType;
