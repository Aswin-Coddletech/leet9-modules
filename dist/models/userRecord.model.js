"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var notificationType = {};
var Records = new Schema({
    name: String,
    email: String,
    userId: String,
    nftsCount: Number,
    gameHours: Number,
    notifications: [
        {
            event: String,
            title: String,
            token: String,
            read: Boolean,
            createdAt: { type: Date, default: Date.now }
        }
    ],
    games: [
        {
            id: String,
            name: String,
            qualitativeGame: Number,
            identifier: String,
            kpi1: {
                type: {
                    name: String,
                    value: {
                        type: Number,
                        default: 0
                    },
                },
                default: 0,
            },
            kpi2: {
                type: {
                    name: String,
                    value: {
                        type: Number,
                        default: 0
                    },
                },
                default: 0,
            },
            kpi3: {
                type: {
                    name: String,
                    value: {
                        type: Number,
                        default: 0
                    },
                },
                default: 0,
            },
            kpi4: {
                type: {
                    name: String,
                    value: {
                        type: Number,
                        default: 0
                    },
                },
                default: 0,
            },
            kpi5: {
                type: {
                    name: String,
                    value: {
                        type: Number,
                        default: 0
                    },
                },
                default: 0,
            },
            duration: {
                type: Number,
                default: 0
            },
        },
    ],
    achievements: [
        {
            image: String,
            name: String,
            baseValue: Number,
            currentValue: Number,
            looped: Boolean,
            totalTitles: Number,
            achievementType: String,
            criteria: String,
            badgeName: String,
            titlesCount: Number
        },
    ],
    activities: [
        {
            name: String,
            description: String,
            value: Number,
            completion: Number,
        },
    ],
    // recentGames: [{ type: Mongoose.Schema.Types.ObjectId }],
    recentGames: [String],
    created: { type: Date, default: Date.now },
}, {
    collection: "userRecords",
});
var UserRecords = mongoose_1.default.model("userRecord", Records);
exports.default = UserRecords;
