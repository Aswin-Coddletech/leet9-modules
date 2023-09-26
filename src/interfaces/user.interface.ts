import { Schema } from 'mongoose';
import { FastifyRequest } from 'fastify';

interface CustomHeaders {
  // Define your custom header properties here
  'x-access-token': string;
}

// Extend the existing FastifyRequest interface
export type CustomFastifyRequest = FastifyRequest<{
  Headers: CustomHeaders;
}>;

export interface JwtResponse {
  _id: string,
  iat: number
}
export interface ILoginRequest {
  email: string;
  password: string;
  firebase_token: string;
}

export interface ICreateRequest {
  email: string;
  password: string;
  authType:string;
  discordToken?:string;
  name: string;
  confirmPassword: string;
  wallets: [
    {
      address: string;
      connected: boolean;
    }
  ];
  firebaseToken: string;
}

export interface IUser {
  email: string;
  password: string;
  name: string;
  avatar: string;
  level: number;
  active: boolean;
  score: number;
  firstLogin:number;
  gamesPlayed: number;
  achievements: number;
  achievementsShared: number;
  points: number;
  nextLevelUpAt:number,
  lastVisit: string;
  consecutiveVisits: number;
  achivementList: Schema.Types.ObjectId[];
  recentGames: Schema.Types.ObjectId[];
  recentActivities: Schema.Types.ObjectId[];
  wallets: IWallets[];
  gameIds:IGameIds[];
  uniqueIds: string[];
  authType: string;
  pushNotification: boolean;
  firebaseToken: string;
  socialMedia: ISocialMedia[];
  lastUpdatedOtp: string | null;
  OtpExpires: Date | null;
  created: Date;
}

export interface ISocialMedia {
  name: string;
  connected: boolean;
  rewarded: boolean;
}

export interface IWallets {
    address: string;
    connected: boolean;
    rewarded: boolean;
    created: Date;
}
export interface IVerifyRequest {
    token:string,
    email:string
}

export interface IEmail {
  email: string
  authType: string,
  sent: boolean,
  token: string,
  created: Date,
}

export interface IGameIds{
  name:string,
  id:string
}

export interface IUpdatePassword {
  email: string,
  newPassword: string,
}


