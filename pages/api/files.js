import nextConnect from 'next-connect';
import {multerUpload} from './middlewares/multer'

const apiRoute = nextConnect({
    onError(error, req, res) {
        res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
    },
    onNoMatch(req, res) {
        res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    },
});

apiRoute.use(multerUpload.array('testFiles'));

apiRoute.post((req, res) => {
    res.status(200).json({ data: 'success!' });
});

export default apiRoute;

export const config = {
    api: {
        bodyParser: false, // Disallow body parsing, consume as stream
    },
};