import { GetSetNameSymbolAndCode } from "../MySql/GetSetNameSymbolAndCode.js";

export const SetNameSymbolAndCodeRoute = (app) => {
    app.get('/api/NameSymbolCode', async (req, res) => {
        try {
            const result = await GetSetNameSymbolAndCode();
            res.json(result)
        } catch (error) {
            res.status(500).json({error: error.message});
        }
    });
};