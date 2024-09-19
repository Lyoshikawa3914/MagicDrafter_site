import { query } from "express";
import { DSK } from "../HashMap/DSK.js";
import { AwsMySqlConnect } from "./AwsMySqlConnect.js";

export async function InsertRatingsToCards() {
    let connection;
    const setCode = DSK();

    console.log(setCode);

    try {
        connection = await AwsMySqlConnect();

        for (let cardName of Object.keys(setCode)) {
            let cardRating = setCode[cardName];
            console.log(`${cardName}: ${cardRating}`);

            await connection.query(
                `UPDATE mtg_draft_db.card
                SET rating = ?
                WHERE name = ?`,

                [
                    cardRating,
                    cardName
                ]
            )
        }

    } catch (err) {
        console.error(err);
    } finally {
        await connection.end();
    }
}

InsertRatingsToCards();