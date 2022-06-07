
import mongoose, { Schema, model, Model } from 'mongoose';
const carsSchema = new Schema({brand : {"type":"String"} ,model : {"type":"String"} ,num_doors : {"type":"Number"} ,})
if(mongoose.models['cars_1']){
    delete mongoose.models['cars_1']
}
const cars_1 = model('cars_1',carsSchema)
export default cars_1
