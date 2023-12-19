import type { Connection } from 'mysql2/promise'

export const deleteCategory = async (idx: number, connection: Connection) => {
    const [rows, fields] = await connection.query(
        `DELETE FROM Category WHERE idx = "${idx}"`
    )

    return rows
}
