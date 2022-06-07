import mongoose from "mongoose";
import { db } from '../../../../../../database';

export default async function handlerUserAgents(req, res) {
    const { user_id, agent_name } = req.query
    const client = await db.connect();
    let agents = Object.keys(client.collections).filter(collectionName => collectionName.includes(`_${user_id}`));
    agents = agents.map(agent => ({ originalName: agent, displayName: agent.split('_').slice(0, -1)[0] }));
    const postableAgent = agents.find(agent => agent.displayName === agent_name)
    // Search an unknown agent
    if (!postableAgent) return res.status(404).json({ error: 'Agent not found' })
    req.agentModel = mongoose.models[postableAgent.originalName]
    switch (req.method) {
        case 'POST':
            return postDataToUserAgent(req, res)
        case 'GET':
            return getDataFromUserAgent(req, res);
        default:
            break;
    }


}

const postDataToUserAgent = async (req, res) => {
    await req.agentModel.insertMany(req.body)
    return res.json({ msg: 'Data saved successfully' })
}

const getDataFromUserAgent = async (req, res) => {
    const userAgentData = await req.agentModel.find();
    return res.json({ data: userAgentData })
}