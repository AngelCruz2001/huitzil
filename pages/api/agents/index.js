export default async function handlerAgents(req, res) {
    switch (req.method) {
        case 'GET':
            return addAgentToUser(req, res)
            break;

        default:
            break;
    }
}

const addAgentToUser = (req, res) => {
    return res.json({ "agents": true });
}