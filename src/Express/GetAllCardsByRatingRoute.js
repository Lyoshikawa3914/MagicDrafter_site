import { GetCardByRating } from "../MySql/GetCardByRating.js";

export const GetAllCardsByRatingRoute = (app) => {
    app.get('/api/GetAllCardsByRating/:mtgCode/:rating', async (req, res) => {
        try {
            const { mtgCode, rating } = req.params;
            console.log(`Received request for setCode: ${mtgCode} and rating: ${rating}`);

            // Fetch the cards
            const result = await GetCardByRating(mtgCode, rating);

            // If result is valid, send it back
            if (result && result.length > 0) {
                return res.json(result);  // Return the result as JSON
            } else {
                // Send a JSON response even for 404 errors
                return res.status(404).json({ message: 'No cards found for the given rating and set code.' });
            }
        } catch (err) {
            console.error('Error fetching card data:', err);

            // Ensure the error response is sent only once and is JSON
            if (!res.headersSent) {
                return res.status(500).json({ error: 'Server error' });
            }
        }
    });
};
