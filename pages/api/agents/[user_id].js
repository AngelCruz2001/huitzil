import mongoose, { model, Schema } from 'mongoose';
import fs from 'fs'
import { db } from '../../../database'
import path from 'path';
import { generateModel } from '../helpers/generateModel';
export default async function handlerAgents(req, res) {
    switch (req.method) {
        case 'GET':
            return getAgentsFromUser(req, res)
        case 'POST':
            return addAgentToUser(req, res)

        default:
            break;
    }
}

const addAgentToUser = async (req, res) => {
    const { user_id } = req.query;
    const { collection_name, attributes } = req.body;
    await generateModel(attributes, collection_name, user_id)
    const models = await import('../../../models')
    models[`'${collection_name}_${user_id}'`]
    res.json({ msg: 'Agent created successfully' })
}

const getAgentsFromUser = async (req, res) => {
    const { user_id } = req.query
    const client = await db.connect();
    console.log(client.collections);
    let agents = Object.keys(client.collections).filter(collectionName => collectionName.includes(`_${user_id}`));
    agents = agents.map(agent => ({ originalName: agent, displayName: agent.split('_').slice(0, -1)[0] }));
    res.json({ agents })
}