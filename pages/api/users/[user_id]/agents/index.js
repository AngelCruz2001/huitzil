import mongoose from 'mongoose';
import { db } from '../../../../../database';
import { generateModel } from '../../../helpers/generateModel';
export default async function handlerUserAgents(req, res) {
    switch (req.method) {
        case 'POST':
            return addAgentToUser(req, res)
        case 'GET':
            return getAgentsFromUser(req, res)
        default:
            break;
    }
}

const addAgentToUser = async (req, res) => {
    const { user_id } = req.query;
    const { collection_name, attributes } = req.body;
    await generateModel(attributes, collection_name, user_id)
    const models = await import('../../../../../models')
    models[`'${collection_name}_${user_id}'`]
    res.json({ msg: 'koko' })
}

const getAgentsFromUser = async (req, res) => {
    const { user_id } = req.query
    const client = await db.connect();
    let agents = Object.keys(client.collections).filter(collectionName => collectionName.includes(`_${user_id}`));
    agents = agents.map(agent => ({
        original_name: agent,
        collection_name: agent.split('_').slice(0, -1)[0],
        attributes: mongoose.models[agent].schema.obj

    }));
    res.json({ data: { agents } })
}

