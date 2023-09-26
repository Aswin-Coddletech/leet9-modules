import { Document, Model, model, Schema } from 'mongoose';

export interface IGame {
    name: string,
    device: [string],
    provider: string,
    status: string,
    hotGame: boolean,
    gameId:string,
    description:string,
    tags:[string],
    kpi1:string,
    kpi2:string,
    kpi3:string,
    kpi4:string,
    genres:[string],
    contactName: string,
    contactEmail: string,
    telegramUserName: string,
    discordUserName: string,
    websiteUrl: string,
    youtubeUrl: string,
    steamUrl: string,
    kickUrl: string,
    twitterHande: string,
    twitchChannel: string,
    discordServer: string,
    telegramChannel: string,
    gameBio: string,
    articleGame: string,
    bannerImgUrl: string,
    coverImgProtraitUrl: string,
    gameLogoVertical: string,
    studioLogoVertical: string,
    additionalInfo: string,
    ingameStats: string,
    web3: string,
    coverImgLandscapeUrl: string,
    isIdentifierRequired: boolean,
    isSteamIdRequired: boolean,
    createdAt: Date
  }
  
export interface IGameRequest {
token: string;
email: string;
gameTitle: string;
}

interface IGameDocument extends IGame, Document {}

const gameSchema = new Schema<IGameDocument>({
    name: String,
    device: [String],
    provider: String,
    status: String,
    hotGame: Boolean,
    gameId:String,
    description:String,
    tags:[String],
    kpi1:String,
    kpi2:String,
    kpi3:String,
    kpi4:String,
    genres:[String],
    contactName: String,
    contactEmail: String,
    telegramUserName: String,
    discordUserName: String,
    websiteUrl: String,
    youtubeUrl: String,
    steamUrl: String,
    kickUrl: String,
    twitterHande: String,
    twitchChannel: String,
    discordServer: String,
    telegramChannel: String,
    gameBio: String,
    articleGame: String,
    bannerImgUrl: String,
    coverImgProtraitUrl: String,
    gameLogoVertical: String,
    studioLogoVertical: String,
    additionalInfo: String,
    ingameStats: String,
    web3: String,
    coverImgLandscapeUrl: String,
    isIdentifierRequired: Boolean,
    isSteamIdRequired: Boolean,
    createdAt: { type: Date, default: Date.now },
});

const GameModel: Model<IGameDocument> = model<IGameDocument>('Game', gameSchema);

export default GameModel;
