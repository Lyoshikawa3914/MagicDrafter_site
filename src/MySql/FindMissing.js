import {AwsMySqlConnect} from "./AwsMySqlConnect.js";
import { MH3 } from "../HashMap/MH3.js";
import { DSK } from "../HashMap/DSK.js";

export async function FindMissing() {
    let connection;
    let missingCards = {};
    const rating = DSK();
    const setCode = 'DSK';

    try {
        connection = await AwsMySqlConnect();
        console.log('Database connection established for FindMissing.');
        const [rows] = await connection.execute(`SELECT name FROM mtg_draft_db.card WHERE set_code = ?`,
            [setCode]
        );
        const cardNames = rows.map(row => row.name);
        console.log('Existing card names fetched from the database:', cardNames);

        for (let name of Object.keys(rating)) {
            if (!cardNames.includes(name)) {
                missingCards[name] = rating[name];
                console.log(name)
            }
        }
        console.log('Missing cards identified:', missingCards);

        //console.log(missingCards);
        //return missingCards;
    } catch (error) {
        console.log('Error in FindMissing:', error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Database connection closed for FindMissing.');
        }
    }
}
FindMissing();
