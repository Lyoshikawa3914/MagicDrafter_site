import { MySqlConnect } from "./MySqlConnect.js";
import { MH3 } from "../HashMap/MH3.js";

export async function FindMissing() {
    let connection;
    let missingCards = {};
    const rating = MH3();

    try {
        connection = await MySqlConnect();
        console.log('Database connection established for FindMissing.');
        const [rows] = await connection.execute('SELECT name FROM card');
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
