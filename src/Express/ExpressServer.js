// server.js
import express from 'express';
import cors from 'cors';
import { GetAllCardsRoute } from './GetAllCardsRoute.js';
import { GetAllCardsByRatingRoute } from './GetAllCardsByRatingRoute.js';
import { SetNameSymbolAndCodeRoute } from './SetNameSymbolCodeRoute.js';
import { SetImagesRoute } from './SetImagesRoute.js';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Register the routes
GetAllCardsByRatingRoute(app);
SetNameSymbolAndCodeRoute(app);
GetAllCardsRoute(app);
SetImagesRoute(app);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
