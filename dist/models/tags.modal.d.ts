import Mongoose from "mongoose";
declare const Tags: Mongoose.Model<{
    name?: string | undefined;
    value?: string | undefined;
    key?: string | undefined;
}, {}, {}, {}, Mongoose.Document<unknown, {}, {
    name?: string | undefined;
    value?: string | undefined;
    key?: string | undefined;
}> & {
    name?: string | undefined;
    value?: string | undefined;
    key?: string | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}, Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, Mongoose.DefaultSchemaOptions, {
    name?: string | undefined;
    value?: string | undefined;
    key?: string | undefined;
}, Mongoose.Document<unknown, {}, {
    name?: string | undefined;
    value?: string | undefined;
    key?: string | undefined;
}> & {
    name?: string | undefined;
    value?: string | undefined;
    key?: string | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}>>;
export default Tags;
