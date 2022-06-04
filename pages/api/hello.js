// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const arr = ["Johan","Angel","Damiany","Salvador","Vanessa","Angel"]
export default function handler(req, res) {


  
  res.status(200).json({names:arr})
}
