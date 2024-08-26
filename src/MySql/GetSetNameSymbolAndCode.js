import {AwsMySqlConnect} from './AwsMySqlConnect.js';

export async function GetSetNameSymbolAndCode() {
    let connection;

    try {
        connection = await AwsMySqlConnect();
        const [rows] = await connection.query(
            `SELECT * FROM mtg_draft_db.setname`
        )
        //console.log(rows)
        return rows

    } catch (err) {
        console.error(err);
    }
    finally {
        if (connection) {
            connection.end();
        }
    }

}
GetSetNameSymbolAndCode();