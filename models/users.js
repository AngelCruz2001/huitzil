import mongoose, { Schema, model, Model } from 'mongoose';
const userSchema = new Schema({
    account: { type: String },
    password: { type: String },
}, {
    timestamps: true
})
if (mongoose.models['users']) {
    delete mongoose.models['users']
}
const users = model('users', userSchema);

export default users;