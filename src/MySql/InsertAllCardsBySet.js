import { CallGetAllCardsFromSet } from '../ScryfallApi/CallGetAllCardsFromSet.js';
import {AwsMySqlConnect} from './AwsMySqlConnect.js';
import { MySqlConnect } from './MySqlConnect.js';

/**
 * This function will connect to the db, access the FetchCardData function, and will insert card 
 * data into the db
 */
export async function InsertAllCardsBySet() {
    const set_code = 'BLB';
    let connection;

    try {
        // connection = await MySqlConnect();
        connection = await AwsMySqlConnect();

        const allCards = await CallGetAllCardsFromSet(set_code);
        console.log(`Fetched ${allCards.length} cards.`);
        
        for (const element of allCards) {
            try {
                // Check if the card already exists
                const [rows] = await connection.execute(
                    `SELECT COUNT(*) as count FROM mtg_draft_db.card WHERE name = ? AND set_code = ?`,
                    [element.name, set_code]
                );
                
                if (rows[0].count > 0) {
                    console.log(`Card ${element.name} already exists. Skipping.`);
                    continue;
                }

                // Insert the card if it does not exist
                await connection.execute(
                    `INSERT INTO mtg_draft_db.card (name, mana_value, type, color, rarity, text, rating, set_code) 
                     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
                    [
                        element.name,
                        element.cmc,
                        element.type_line,
                        element.color_identity, // Assuming colors is an array
                        element.rarity,
                        element.oracle_text,
                        'na',
                        set_code
                    ]
                );
                console.log(`Inserted card: ${element.name}`);
            } catch (error) {
                console.error(`Error inserting data for card: ${element.name}`, error);
            }
        }
    } catch (error) {
        console.error('Error connecting to the database:', error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Disconnected from the database.');
        }
    }
}

// Call the AddCard function
InsertAllCardsBySet();
