import { Schema } from 'mongoose';

export interface IBonusRequest {
  criteria?: any;
  title?: string;
  point?: number;
  type?: string;
  family?: string;
  description?: string;
  objective?: string;
  iteration?: string;
  image?:string;
  bedgeName?:string;
  heading?:string;
  subHeading?:string;
  looped?: true;
  bedge?:string;
  totalTitles:Number;
  achievementType:string;
  bedgeCollectionPoint?: string;
  oneYearMaxPoints?: number;
  comment?: string;
}

export interface IBonus {
  criteria: Schema.Types.Mixed,
  title: string,
  point: number,
  type: string,
  family: string,
  desription: string,
  image?:string,
  objective: string,
  iteration: string,
  looped: boolean,
  bedge: string,
  bedgeName:string,
  bedgeCollectionPoint: string,
  oneYearMaxPoints: number,
  comment: boolean,

}