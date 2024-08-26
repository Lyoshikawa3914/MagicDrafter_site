import { GetAllCardsRoute } from '../Express/GetAllCardsRoute.js';
import { AwsMySqlConnect } from './AwsMySqlConnect.js';

export async function GetAllCards(setCode) {
    let connection;

    try {
        connection = await AwsMySqlConnect();
        const [allCards] = await connection.query(
            'SELECT * FROM mtg_draft_db.card WHERE set_code = ?',
            [setCode]
        );

        return allCards;
    } catch (err) {
        console.error(err);
    } finally {
        if (connection) {
            connection.end();
        }
    }
}
