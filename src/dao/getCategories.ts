import type { Connection } from 'mysql2/promise'

export const getCategories = async (connection: Connection) => {
    const [rows, fields] = await connection.query(`SELECT * FROM Category`)

    return rows
}
