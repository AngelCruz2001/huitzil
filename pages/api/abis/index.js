import { abis } from '../../../models';
export default async function (req, res) {
    switch (req.method) {
        case 'POST':
            return postAbis(req, res);
        default:
            break;
    }
}

const postAbis = async (req, res) => {
    const newAbis = await abis.insertMany(req.body);
    return res.json({ data: { abis: newAbis } });
}