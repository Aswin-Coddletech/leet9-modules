"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var userGameModel = new Schema({
    name: String,
    genre: [String],
    status: String,
    gameId: String,
    technology: String,
    // gamers:[{type:Mongoose.Schema.Types.ObjectId}]
    gamers: [String],
}, {
    collection: "userGames"
});
var userGames = mongoose_1.default.model("userGame", userGameModel);
exports.default = userGames;
