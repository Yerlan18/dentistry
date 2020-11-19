import mysql from "serverless-mysql";

const db = mysql({
    config: {
        host: 'dentistry.cqnhndwnjoem.us-east-2.rds.amazonaws.com',
        port: 3306,
        database:'Dentistry',
        user:'admin',
        password:'5kh03J#f04kkg'
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