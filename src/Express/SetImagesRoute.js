import { GetSetImages } from "../MySql/GetSetImages.js";

export const SetImagesRoute = (app) => {
    app.get('/api/SetImages/:set_code', async (req, res) => {
        try {
            const set_code = req.params.set_code;
            console.log("Recieved set code: ", set_code);

            const result = await GetSetImages(set_code);
            if(!result.length) {
                return res.status(404).json({error: `No cards found for set code: ${set_code}`})
            }
            res.json(result);
        }
        catch (error) {
            res.status(500).json({error: error.message})
        }
    })
}