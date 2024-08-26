// GetAllCardsRoute.js
import { GetAllCards } from '../MySql/GetAllCards.js';

export const GetAllCardsRoute = (app) => {
    app.get('/api/GetAllCards/:set_code', async (req, res) => {
        try {
            console.log('hello')
            const set_code = req.params.set_code;
            console.log("Received set_code:", set_code);  // Debug log


            const result = await GetAllCards(set_code);
            console.log("Query result:", result);  // Debug log

            if (!result.length) {
                return res.status(404).json({ error: `No cards found for set code: ${set_code}` });
            }
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    });
};
