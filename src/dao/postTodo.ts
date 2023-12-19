import type { Connection } from 'mysql2/promise'

export const postTodo = async (
    categoryIdx: number,
    status: string,
    content: string,
    connection: Connection
) => {
    const [rows, fields] = await connection.query(
        `INSERT INTO Category(categoryIdx, status, content) VALUES("${categoryIdx}", "${status}", "${content}")`
    )
    return rows
}
