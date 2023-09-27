import Mongoose from "mongoose";
declare const Genre: Mongoose.Model<{
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
}, Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, Mongoose.DefaultSchemaOptions, {
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
export default Genre;
