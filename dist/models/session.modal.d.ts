import Mongoose from "mongoose";
declare const Sessions: Mongoose.Model<{
    activeSessions: {
        sessionId?: string | undefined;
        userId?: string | undefined;
        startTime?: string | undefined;
        endTime?: string | undefined;
    }[];
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    totalSession?: number | undefined;
}, {}, {}, {}, Mongoose.Document<unknown, {}, {
    activeSessions: {
        sessionId?: string | undefined;
        userId?: string | undefined;
        startTime?: string | undefined;
        endTime?: string | undefined;
    }[];
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    totalSession?: number | undefined;
}> & {
    activeSessions: {
        sessionId?: string | undefined;
        userId?: string | undefined;
        startTime?: string | undefined;
        endTime?: string | undefined;
    }[];
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    totalSession?: number | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}, Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, Mongoose.DefaultSchemaOptions, {
    activeSessions: {
        sessionId?: string | undefined;
        userId?: string | undefined;
        startTime?: string | undefined;
        endTime?: string | undefined;
    }[];
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    totalSession?: number | undefined;
}, Mongoose.Document<unknown, {}, {
    activeSessions: {
        sessionId?: string | undefined;
        userId?: string | undefined;
        startTime?: string | undefined;
        endTime?: string | undefined;
    }[];
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    totalSession?: number | undefined;
}> & {
    activeSessions: {
        sessionId?: string | undefined;
        userId?: string | undefined;
        startTime?: string | undefined;
        endTime?: string | undefined;
    }[];
    gameId?: number | undefined;
    gameName?: string | undefined;
    l9UserId?: string | undefined;
    totalSession?: number | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}>>;
export default Sessions;
