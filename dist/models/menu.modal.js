"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var menuModel = new Schema({
    name: String,
    icon: String,
    color: String,
    position: String
});
var Menu = mongoose_1.default.model("menus", menuModel);
exports.default = Menu;
