export interface IGame {
    name: string;
    device: [string];
    provider: string;
    status: string;
    hotGame: boolean;
    gameId: string;
    description: string;
    tags: [string];
    kpi1: string;
    kpi2: string;
    kpi3: string;
    kpi4: string;
    genres: [string];
    contactName: string;
    contactEmail: string;
    telegramUserName: string;
    discordUserName: string;
    websiteUrl: string;
    youtubeUrl: string;
    steamUrl: string;
    kickUrl: string;
    twitterHande: string;
    twitchChannel: string;
    discordServer: string;
    telegramChannel: string;
    gameBio: string;
    articleGame: string;
    bannerImgUrl: string;
    coverImgProtraitUrl: string;
    gameLogoVertical: string;
    studioLogoVertical: string;
    additionalInfo: string;
    ingameStats: string;
    web3: string;
    coverImgLandscapeUrl: string;
    isIdentifierRequired: boolean;
    isSteamIdRequired: boolean;
    createdAt: Date;
}
export interface IGameRequest {
    token: string;
    email: string;
    gameTitle: string;
}
