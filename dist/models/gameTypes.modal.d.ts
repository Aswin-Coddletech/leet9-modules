import Mongoose from "mongoose";
declare const GameType: Mongoose.Model<{
    name?: string | undefined;
    value?: string | undefined;
}, {}, {}, {}, Mongoose.Document<unknown, {}, {
    name?: string | undefined;
    value?: string | undefined;
}> & {
    name?: string | undefined;
    value?: string | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}, Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    collection: string;
}, {
    name?: string | undefined;
    value?: string | undefined;
}, Mongoose.Document<unknown, {}, {
    name?: string | undefined;
    value?: string | undefined;
}> & {
    name?: string | undefined;
    value?: string | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}>>;
export default GameType;
