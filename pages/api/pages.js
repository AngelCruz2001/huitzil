import { db } from '../../database'
import Page from "../../models/Page";
// import Component  from "../../models/Component ";

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
  const { htmlStruct } = req.body;
  const components = await Component.insertMany(htmlStruct)
  // const page  = await Page.insertMany(req.body);
  return res.status(200).json({
    'success':true
  })
}