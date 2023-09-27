"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var levelSchema = new mongoose_1.Schema({
    levelConstant: Number,
    key: String,
    createdAt: { type: Date, default: Date.now },
    modifiedAt: { type: Date, default: Date.now }
});
var LevelModel = (0, mongoose_1.model)('levels', levelSchema);
exports.default = LevelModel;
