import type { Connection } from 'mysql2/promise'

export const putTodo = async (
    idx: number,
    categoryIdx: number,
    status: string,
    content: string,
    connection: Connection
) => {
    const [rows, fields] = await connection.query(
        `UPDATE Todo SET categoryIdx = "${categoryIdx}", status = "${status}", content = "${content}" WHERE idx="${idx}"`
    )

    return rows
}
