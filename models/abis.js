import mongoose, { Schema, model, Model } from 'mongoose';
const contractSchema = new Schema({
    struct: { type: String },
})
if (mongoose.models['abis']) {
    delete mongoose.models['abis']
}
const abis = model('abis', contractSchema)
export default abis