"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    email: { type: String },
    password: String,
    name: String,
    avatar: String,
    level: Number,
    active: Boolean,
    score: { type: Number, default: 0 },
    gamesPlayed: Number,
    achievements: Number,
    nextLevelUpAt: Number,
    firstLogin: { type: Number, default: 0 },
    achievementsShared: Number,
    points: { type: Number, default: 0 },
    lastVisit: String,
    gameIds: [
        {
            name: String,
            id: String,
        },
    ],
    uniqueIds: {
        type: [String],
        default: []
    },
    consecutiveVisits: Number,
    wallets: [
        {
            address: String,
            connected: Boolean,
            description: String,
            icon: String,
            name: String,
            rewarded: { type: Boolean, default: false },
            created: { type: Date, default: Date.now },
        },
    ],
    authType: String,
    pushNotification: Boolean,
    firebaseToken: String,
    socialMedia: [
        {
            name: String,
            connected: Boolean,
            rewarded: { type: Boolean, default: false },
            email: String,
            token: String,
        },
    ],
    lastUpdatedOtp: String,
    OtpExpires: Date,
    created: { type: Date, default: Date.now },
});
var UserModel = (0, mongoose_1.model)("User", userSchema);
exports.default = UserModel;
