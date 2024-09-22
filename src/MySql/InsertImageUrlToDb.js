import { CallSingleCardName } from "../ScryfallApi/CallSingleCardName.js";
import { AwsMySqlConnect } from "./AwsMySqlConnect.js";
import { DSK } from "../HashMap/DSK.js";

/**
 * This function will get the name of each card from the set, insert the name into the Scryfall API 
 */
export async function InsertImageUrlToDb() {
    let connection;
    let setCode = DSK();

    try {
        connection = await AwsMySqlConnect();
        console.log(`connection made`);

        for (let name of Object.keys(setCode)) {
            if (name === undefined) {
                continue;
            }
            else {
                console.log(`Fetching Data for ${name}`);
                let cardData = await CallSingleCardName(name);
                console.log(cardData);
            }


        }

        

    } catch (err) {
        console.error(err);
    } finally {
        //connection.end();
    }
}

InsertImageUrlToDb();