import type { Connection } from 'mysql2/promise'

export const getUser = async (email: string, connection: Connection) => {
    const [rows, fields] = await connection.query(
        `SELECT * FROM user WHERE email="${email}"`
    )

    return rows
}
