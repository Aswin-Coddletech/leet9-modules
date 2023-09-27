"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var activitiesSchema = new mongoose_1.Schema({
    image: String,
    name: String,
    description: String,
    completion: Number,
});
var ActivitiesModel = (0, mongoose_1.model)('Activities', activitiesSchema);
exports.default = ActivitiesModel;
