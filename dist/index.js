"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserStats = exports.UserRecords = exports.userGames = exports.UserModel = exports.Tags = exports.Sessions = exports.News = exports.Menu = exports.LevelModel = exports.L9key = exports.Genre = exports.GameType = exports.EmailModel = exports.BonusModel = exports.BannerModel = exports.ActivitiesModel = exports.AchivementModel = exports.GameModel = void 0;
// importing models
var game_model_1 = __importDefault(require("./models/game.model"));
exports.GameModel = game_model_1.default;
var acheivement_model_1 = __importDefault(require("./models/acheivement.model"));
exports.AchivementModel = acheivement_model_1.default;
var activities_model_1 = __importDefault(require("./models/activities.model"));
exports.ActivitiesModel = activities_model_1.default;
var banner_model_1 = __importDefault(require("./models/banner.model"));
exports.BannerModel = banner_model_1.default;
var bonus_model_1 = __importDefault(require("./models/bonus.model"));
exports.BonusModel = bonus_model_1.default;
var email_model_1 = __importDefault(require("./models/email.model"));
exports.EmailModel = email_model_1.default;
var gameTypes_modal_1 = __importDefault(require("./models/gameTypes.modal"));
exports.GameType = gameTypes_modal_1.default;
var genres_modal_1 = __importDefault(require("./models/genres.modal"));
exports.Genre = genres_modal_1.default;
var l9key_modal_1 = __importDefault(require("./models/l9key.modal"));
exports.L9key = l9key_modal_1.default;
var level_model_1 = __importDefault(require("./models/level.model"));
exports.LevelModel = level_model_1.default;
var menu_modal_1 = __importDefault(require("./models/menu.modal"));
exports.Menu = menu_modal_1.default;
var news_model_1 = __importDefault(require("./models/news.model"));
exports.News = news_model_1.default;
var session_modal_1 = __importDefault(require("./models/session.modal"));
exports.Sessions = session_modal_1.default;
var tags_modal_1 = __importDefault(require("./models/tags.modal"));
exports.Tags = tags_modal_1.default;
var user_model_1 = __importDefault(require("./models/user.model"));
exports.UserModel = user_model_1.default;
var userGame_modal_1 = __importDefault(require("./models/userGame.modal"));
exports.userGames = userGame_modal_1.default;
var userRecord_model_1 = __importDefault(require("./models/userRecord.model"));
exports.UserRecords = userRecord_model_1.default;
var userStats_modal_1 = __importDefault(require("./models/userStats.modal"));
exports.UserStats = userStats_modal_1.default;
