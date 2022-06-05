import mongoose, { Schema, model, Model } from 'mongoose';
const pageSchema = new Schema({
    description: { type: String, required: true },
    domain: { type: String, required: true },
   title:{ type:  String, required: true},
   HtmlStruct:[

   ]
}, {
    timestamps: true
})

const Page = mongoose.models.Page || model('Page', pageSchema);

export default Page;