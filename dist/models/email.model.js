"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var emailSchema = new mongoose_1.Schema({
    email: { type: String, unique: true },
    authType: String,
    sent: Boolean,
    token: String,
    created: { type: Date, default: Date.now },
});
var EmailModel = (0, mongoose_1.model)('Email', emailSchema);
exports.default = EmailModel;
