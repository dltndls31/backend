import type { Connection } from 'mysql2/promise'

export const deleteTodo = async (idx: number, connection: Connection) => {
    const [rows, fields] = await connection.query(
        `DELETE FROM Todo WHERE idx = "${idx}"`
    )

    return rows
}
