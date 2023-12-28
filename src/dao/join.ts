import type { Connection } from 'mysql2/promise'

export const getUser = async (
    name: string,
    id: string,
    password: string,
    email: string,
    phonenumber: int,
    birthday: Date,
    connection: Connection
) => {
    const [rows, fields] = await connection.query(`SELECT * FROM users`)

    return rows
}
