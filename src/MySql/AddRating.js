import { MH3 } from '../HashMap/MH3.js';
import { MySqlConnect } from './MySqlConnect.js';

async function AddRating() {
    let connection
    
    try {
        connection = await MySqlConnect();

        //change the function to whatever set that has a hashmap
        const hashRating = MH3();
        // console.log(hashRating);

        for (let name in hashRating) {
            try {
                await connection.execute(
                    `UPDATE mtg_draft_db.card SET rating = ? WHERE name = ?`,
                    [
                    hashRating[name],
                    name
                ]
                );
                
            }
            catch (error) {
                console.log(error);
            }
           
        }
    }
    catch (error) {
        console.log(error);
    }
    finally {
        if (connection) {
            await connection.end();
            console.log('Disconnected from the database.');
        }
    }
    
}
AddRating();