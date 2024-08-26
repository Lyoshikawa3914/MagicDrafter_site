import { AwsMySqlConnect } from "./AwsMySqlConnect.js";

export async function GetSetImages(setCode) {
    let connection;

    try {
        connection = await AwsMySqlConnect();
        const [images] = await connection.query(
            `SELECT * FROM mtg_draft_db.setimage WHERE set_code = ?`,
            [setCode]
        )
        return images;
    } catch (error) {
        console.error(error)
    }

}