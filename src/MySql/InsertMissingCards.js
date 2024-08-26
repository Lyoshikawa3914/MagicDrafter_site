import { MySqlConnect } from './MySqlConnect.js';
import { FindMissing } from './FindMissing.js';
import { CallSingleCardName } from '../ScryfallApi/CallSingleCardName.js';

/**
 * This function will access a list of missing cards from 'FindMissing.js'
 */
async function InsertMissingCards() {
    let connection;

    // Make sure to change this
    const set_code = 'MH3';

    try {
        const missingCards = await FindMissing();
        console.log('Missing cards found:', missingCards);

        connection = await MySqlConnect();
        console.log('Database connection established.');

        for (let card of Object.keys(missingCards)) {
            console.log(`Processing card: ${card}`);
            try {
                const cardData = await CallSingleCardName(card);
                console.log(`Card data fetched for ${card}:`, cardData);

                await connection.execute(
                    `INSERT INTO mtg_draft_db.card (name, mana_value, type, color, rarity, text, rating, set_code)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        cardData.name,
                        cardData.cmc,
                        cardData.type_line,
                        cardData.colors ? cardData.colors.join(', ') : '', // Handle case where colors might be undefined
                        cardData.rarity,
                        cardData.oracle_text,
                        'na',
                        set_code
                    ]
                );
                console.log(`Inserted card ${card} into the database.`);
            } catch (error) {
                console.log(`Error processing card ${card}:`, error);
            }
        }
    } catch (error) {
        console.log('Error:', error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Database connection closed.');
        }
    }
}

InsertMissingCards();
