"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var acheivementSchema = new mongoose_1.Schema({
    image: String,
    title: String,
    maxScore: Number,
});
var AchivementModel = (0, mongoose_1.model)('Achivement', acheivementSchema);
exports.default = AchivementModel;
