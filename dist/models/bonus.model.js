"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bonusSchema = new mongoose_1.Schema({
    criteria: mongoose_1.Schema.Types.Mixed,
    title: String,
    point: Number,
    type: String,
    family: String,
    desription: String,
    objective: String,
    iteration: String,
    looped: Boolean,
    bedge: String,
    image: String,
    bedgeName: String,
    bedgeCollectionPoint: String,
    oneYearMaxPoints: Number,
    comment: String,
});
var BonusModel = (0, mongoose_1.model)('Bonus', bonusSchema);
exports.default = BonusModel;
