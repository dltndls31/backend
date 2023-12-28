import type { Connection } from 'mysql2/promise'

export const deleteTodo = async (idx: number, connection: Connection) => {
    const [rows, fields] = await connection.query(
        `DELETE FROM Todo WHERE idx = "${idx}"`
    )

    return rows
}

export const getTodo = async (connection: Connection, categoryIdx?: number) => {
    let query = `SELECT * FROM Todo`

    // categoryIdx가 제공된 경우, WHERE 절을 추가하여 해당 카테고리의 Todo만 조회
    if (categoryIdx !== undefined) {
        query += `WHERE categoryIdx = ${categoryIdx}`
    }

    const [rows, fields] = await connection.query(query)

    return rows
}

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
