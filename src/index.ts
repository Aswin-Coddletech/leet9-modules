// importing models
import GameModel from './models/game.model';
import AchivementModel from './models/acheivement.model';
import ActivitiesModel from './models/activities.model';
import BannerModel from './models/banner.model';
import BonusModel from './models/bonus.model';
import EmailModel from './models/email.model';
import GameType from './models/gameTypes.modal';
import Genre from './models/genres.modal';
import L9key from './models/l9key.modal';
import LevelModel from './models/level.model';
import Menu from './models/menu.modal';
import News from './models/news.model';
import Sessions from './models/session.modal';
import Tags from './models/tags.modal';
import UserModel from './models/user.model';
import userGames from './models/userGame.modal';
import UserRecords from './models/userRecord.model';
import UserStats from './models/userStats.modal';

//importing interfaces
import {IAchivement} from './interfaces/acheivement.interface';
import {IActivites} from './interfaces/activities.interface';
import {IBanner, IBannerRequest} from './interfaces/banner.interface';
import {IBonus, IBonusRequest} from './interfaces/bonus.interface';
import {IGame, IGameRequest} from './interfaces/game.interface';
import {ILevel} from './interfaces/level.interface';
import {IAttachments, INews} from './interfaces/news.interface';
import {ICreateRequest, IEmail, IGameIds, ILoginRequest, ISocialMedia, IUpdatePassword, IUser, IVerifyRequest, IWallets} from './interfaces/user.interface';

export {
    GameModel,
    AchivementModel,
    ActivitiesModel,
    BannerModel,
    BonusModel,
    EmailModel,
    GameType,
    Genre,
    L9key,
    LevelModel,
    Menu,
    News,
    Sessions,
    Tags,
    UserModel,
    userGames,
    UserRecords,
    UserStats,
    IAchivement,
    IActivites,
    IBanner,
    IBannerRequest,
    IBonus,
    IBonusRequest,
    IGame,
    IGameRequest,
    ILevel,
    IAttachments,
    INews,
    ICreateRequest,
    IEmail,
    IGameIds,
    ILoginRequest,
    ISocialMedia,
    IUpdatePassword,
    IUser,
    IVerifyRequest,
    IWallets
}