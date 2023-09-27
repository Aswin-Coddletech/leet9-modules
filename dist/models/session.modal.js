"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var sessionModel = new Schema({
    gameName: String,
    gameId: Number,
    l9UserId: String,
    totalSession: Number,
    activeSessions: [
        {
            sessionId: String,
            userId: String,
            startTime: String,
            endTime: String,
        },
    ],
});
var Sessions = mongoose_1.default.model("session", sessionModel);
exports.default = Sessions;
