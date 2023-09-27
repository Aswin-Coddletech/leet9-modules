"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var bannerSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    buttonText: String,
    externalLink: String,
    type: String,
    image: String,
    status: Boolean,
    createdAt: { type: Date, default: Date.now },
});
var BannerModel = (0, mongoose_1.model)('Banner', bannerSchema);
exports.default = BannerModel;
