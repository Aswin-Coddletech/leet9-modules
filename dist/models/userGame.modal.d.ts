import Mongoose from "mongoose";
declare const userGames: Mongoose.Model<{
    genre: string[];
    gamers: string[];
    name?: string | undefined;
    status?: string | undefined;
    gameId?: string | undefined;
    technology?: string | undefined;
}, {}, {}, {}, Mongoose.Document<unknown, {}, {
    genre: string[];
    gamers: string[];
    name?: string | undefined;
    status?: string | undefined;
    gameId?: string | undefined;
    technology?: string | undefined;
}> & {
    genre: string[];
    gamers: string[];
    name?: string | undefined;
    status?: string | undefined;
    gameId?: string | undefined;
    technology?: string | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}, Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    collection: string;
}, {
    genre: string[];
    gamers: string[];
    name?: string | undefined;
    status?: string | undefined;
    gameId?: string | undefined;
    technology?: string | undefined;
}, Mongoose.Document<unknown, {}, {
    genre: string[];
    gamers: string[];
    name?: string | undefined;
    status?: string | undefined;
    gameId?: string | undefined;
    technology?: string | undefined;
}> & {
    genre: string[];
    gamers: string[];
    name?: string | undefined;
    status?: string | undefined;
    gameId?: string | undefined;
    technology?: string | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}>>;
export default userGames;
