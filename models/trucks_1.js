
import mongoose, { Schema, model, Model } from 'mongoose';
const trucksSchema = new Schema({is4X4 : {"type":"Bool"} ,model : {"type":"String"} ,})
if(mongoose.models['trucks_1']){
    delete mongoose.models['trucks_1']
}
const trucks_1 = model('trucks_1',trucksSchema)
export default trucks_1
