// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const arr = ["Johan", "Angel", "Damiany", "Salvador", "Vanessa", "Angel"]
export default async function handler(req, res) {

  const models = await import('../../models')
  models['horses_1']

  res.status(200).json({ names: arr })
}
