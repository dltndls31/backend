import type { Connection } from 'mysql2/promise'

export const postCategory = async (
    name: string,
    color: string,
    connection: Connection
) => {
    const [rows, fields] = await connection.query(
        `INSERT INTO Category(name, color) VALUES("${name}", "${color}")`
    )

    return rows
}
