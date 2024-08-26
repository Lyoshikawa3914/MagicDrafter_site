import { AwsMySqlConnect } from "./AwsMySqlConnect.js";
import express from 'express';

export async function GetCount(){
    let connection;

    try {
        connection = await AwsMySqlConnect();

        const [rows] = await connection.execute(
            `SELECT COUNT(*) AS count FROM mtg_draft_db.setname`
        )
        console.log(rows)
        
        return {count: rows[0].count}
        // const count = rows[0].count;
        // console.log(count)

        // const countAsInt = parseInt(count, 10);
        // console.log(countAsInt)
        // return countAsInt;
    } catch(error) {
        console.error('Error fetching data:', error)
        throw new Error('Failed to fetch count');
    }
}

//GetCount();