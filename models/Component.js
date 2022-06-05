import mongoose, { Schema, model, Model } from 'mongoose';
const componentSchema = new Schema({
    width: { type : String},
    title: { type : String},
    background: { type : String},
    color: { type : String},
    fontSize: { type : String},
    height: { type : String},
    borderRadius: { type : String},
    fontWeight: { type : String},
    fontFamily: { type : String}
}, {
    timestamps: true
})

const Component = mongoose.models.Component || model('Component', componentSchema);

export default Component;