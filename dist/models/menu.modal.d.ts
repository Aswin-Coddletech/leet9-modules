import Mongoose from "mongoose";
declare const Menu: Mongoose.Model<{
    name?: string | undefined;
    icon?: string | undefined;
    color?: string | undefined;
    position?: string | undefined;
}, {}, {}, {}, Mongoose.Document<unknown, {}, {
    name?: string | undefined;
    icon?: string | undefined;
    color?: string | undefined;
    position?: string | undefined;
}> & {
    name?: string | undefined;
    icon?: string | undefined;
    color?: string | undefined;
    position?: string | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}, Mongoose.Schema<any, Mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, Mongoose.DefaultSchemaOptions, {
    name?: string | undefined;
    icon?: string | undefined;
    color?: string | undefined;
    position?: string | undefined;
}, Mongoose.Document<unknown, {}, {
    name?: string | undefined;
    icon?: string | undefined;
    color?: string | undefined;
    position?: string | undefined;
}> & {
    name?: string | undefined;
    icon?: string | undefined;
    color?: string | undefined;
    position?: string | undefined;
} & {
    _id: Mongoose.Types.ObjectId;
}>>;
export default Menu;
