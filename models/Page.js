import mongoose, { Schema, model, Model } from 'mongoose';
import Component  from "./Component";
const pageSchema = new Schema({
    description: { type: String, required: true },
    domain: { type: String, required: true },
    title:{ type:  String, required: true},
    htmlStruct:[{type: Schema.Types.ObjectId,ref:'components'}]
}, {
    timestamps: true
})

const Page = mongoose.models.Page || model('Page', pageSchema);

export default Page;