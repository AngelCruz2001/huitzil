import { db } from '../../database'
import Page from "../../models/Page";

export default async function handler(req, res){
  await db.connect()
  switch (req.method) {
      case 'POST':
      return addPage(req,res)
      default:
        break;
    }
    await db.disconnect()



}

const addPage = async(req,res) => {
  await Page.insertMany(req.body);
  return res.status(200).json({
    'success':true
  })
}