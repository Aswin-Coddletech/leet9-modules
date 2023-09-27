"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var statsModel = new Schema({
    gameName: String,
    gameId: Number,
    l9UserId: String,
    gamePoints: Number,
    stat1Percentile: Number,
    stat2Percentile: Number,
    stat3Percentile: Number,
    stat4Percentile: Number,
});
var UserStats = mongoose_1.default.model("userStats", statsModel);
exports.default = UserStats;
