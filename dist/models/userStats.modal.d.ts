import Mongoose from "mongoose";
declare const UserStats: Mongoose.Model<{
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    gamePoints?: number | undefined;
    stat1Percentile?: number | undefined;
    stat2Percentile?: number | undefined;
    stat3Percentile?: number | undefined;
    stat4Percentile?: number | undefined;
}, {}, {}, {}, Mongoose.Document<unknown, {}, {
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    gamePoints?: number | undefined;
    stat1Percentile?: number | undefined;
    stat2Percentile?: number | undefined;
    stat3Percentile?: number | undefined;
    stat4Percentile?: number | undefined;
}> & {
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    gamePoints?: number | undefined;
    stat1Percentile?: number | undefined;
    stat2Percentile?: number | undefined;
    stat3Percentile?: number | undefined;
    stat4Percentile?: number | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}, Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, Mongoose.DefaultSchemaOptions, {
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    gamePoints?: number | undefined;
    stat1Percentile?: number | undefined;
    stat2Percentile?: number | undefined;
    stat3Percentile?: number | undefined;
    stat4Percentile?: number | undefined;
}, Mongoose.Document<unknown, {}, {
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    gamePoints?: number | undefined;
    stat1Percentile?: number | undefined;
    stat2Percentile?: number | undefined;
    stat3Percentile?: number | undefined;
    stat4Percentile?: number | undefined;
}> & {
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    gamePoints?: number | undefined;
    stat1Percentile?: number | undefined;
    stat2Percentile?: number | undefined;
    stat3Percentile?: number | undefined;
    stat4Percentile?: number | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}>>;
export default UserStats;
