import fs from 'fs'
import mongoose from 'mongoose';
import path from 'path';
export const generateModel = async (attributes, collection_name, user_id) => {
    let attributesString = ''
    attributes.forEach(({ name, ...rest }) => attributesString = `${attributesString}${`${name} : ${JSON.stringify(rest)
        }`} ,`)
    const fileContent = `
import mongoose, { Schema, model, Model } from 'mongoose';
const ${collection_name}Schema = new Schema({${attributesString}})
if(mongoose.models['${collection_name}_${user_id}']){
    delete mongoose.models['${collection_name}_${user_id}']
}
const ${`${collection_name}_${user_id}`} = model(${`'${collection_name}_${user_id}'`},${collection_name}Schema)
export default ${`${collection_name}_${user_id}`}
`
    const dirPath = path.join(process.cwd(), 'models',)
    const filePath = path.join(dirPath, `${collection_name}_${user_id}.js`)
    fs.writeFileSync(filePath, fileContent);
    if (mongoose.models[`${collection_name}_${user_id}`]) return
    fs.appendFileSync(path.join(dirPath, 'index.js'), `\n export { default as ${collection_name}_${user_id} } from './${collection_name}_${user_id}.js'`)
}
