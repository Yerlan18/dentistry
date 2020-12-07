import mysql from "serverless-mysql";

const db = mysql({
    config: {
        host: 'localhost',
        port: 3306,
        database:'dentistry',
        user:'root',
        password:'8Fkh93@kg<gh0)895j'
    }
})

export async function query(query) {
    try {
        const results = await db.query(query);
        await db.end();
        return results;
    }
    catch (error) {
        return { error };
    }
}