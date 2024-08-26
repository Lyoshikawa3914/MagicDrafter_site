import { GetCount } from '../MySql/GetCount.js';

export const countRoute = (app) => {
    app.get('/api/count', async (req, res) => {
        try {
            const result = await GetCount();
            
            res.json(result);
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    });
};

