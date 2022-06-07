
import mongoose, { Schema, model, Model } from 'mongoose';
const trucksSchema = new Schema({is4X4 : {"type":"Bool"} ,model : {"type":"String"} ,})
if(mongoose.models['trucks_629e858dcf43caa765775349']){
    delete mongoose.models['trucks_629e858dcf43caa765775349']
}
const trucks_629e858dcf43caa765775349 = model('trucks_629e858dcf43caa765775349',trucksSchema)
export default trucks_629e858dcf43caa765775349
