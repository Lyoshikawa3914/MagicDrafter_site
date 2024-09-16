import { AwsMySqlConnect } from "./AwsMySqlConnect.js";
                      
export async function GetCardByRating(setCode, rating) {
    let connection;
    let allCards = [];
    let ratings = [rating, rating.concat('+'), rating.concat('-')]

    try {
        connection = await AwsMySqlConnect();

        for(let ratingElement of ratings) {
            let [arrayRatings] = await connection.query(
                `SELECT * FROM mtg_draft_db.card WHERE set_code = ? AND rating LIKE ?`,
                [setCode,
                ratingElement]
            )
            
            allCards = allCards.concat(arrayRatings);
        }
        
        return allCards;
    } catch (err) {
        console.error(err);
        return null;
    } finally {
        if (connection) {
            await connection.end();
        }
    }
}

