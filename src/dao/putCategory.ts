import type { Connection } from 'mysql2/promise'

export const putCategory = async (
    idx: number,
    name: string,
    color: string,
    connection: Connection
) => {
    const [rows, fields] = await connection.query(
        `UPDATE Category SET name = "${name}", color = "${color}" WHERE idx = "${idx}"`
    )

    return rows
}
