import { AwsMySqlConnect } from "./AwsMySqlConnect.js";
import { CallSingleCardName } from "../ScryfallApi/CallSingleCardName.js";

export async function InsertSingleCardIntoDb(name) {
    let connnection;

    try {
        connnection = await AwsMySqlConnect();
        
        const cardData = await CallSingleCardName(name);

        await connnection.query(
            `INSERT INTO mtg_draft_db.card (name, mana_value, type, color, rarity, rating, set_code, text, 
                    text_back_side, notes, artist, image_small, image_normal, image_large, image_crop, image_png) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,

                     [
                        name,           //name
                        cardData.cmc,   //mana_value
                        cardData.type_line, // type
                        cardData.colors ? cardData.colors.join(', ') : '',
                        cardData.rarity, // rarity
                        'na',           //rating
                        cardData.set,
                        cardData.oracle_text,
                        'na',
                        'na',
                        cardData.artist,
                        cardData.image_uris.small,
                        cardData.image_uris.normal,
                        cardData.image_uris.large,
                        cardData.image_uris.art_crop,
                        'na'

                    ]
            
        );

    } catch(err) {
        console.error(err);
    } finally {
        connnection.end();
    }
}