import mongoose from "mongoose";
import { users } from '../../../models';
import { db } from "../../../database"

export default async function handlerUserAgents(req, res) {
    switch (req.method) {
        case 'POST':
            return createOrGetUser(req, res);
            break;

        default:
            break;
    }
}

const createOrGetUser = async (req, res) => {
    const { account } = req.body
    let user;
    await db.connect();
    user = await users.find({ account })
    console.log(user.length);
    if (user.length == 0) user = await users.insertMany(req.body)
    const { __v, ...restUser } = user
    res.json({ data: restUser })
}