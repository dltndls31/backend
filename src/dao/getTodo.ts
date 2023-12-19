import type { Connection } from 'mysql2/promise'

export const getTodo = async (connection: Connection, categoryIdx?: number) => {
    let query = `SELECT * FROM Todo`

    // categoryIdx가 제공된 경우, WHERE 절을 추가하여 해당 카테고리의 Todo만 조회
    if (categoryIdx !== undefined) {
        query += `WHERE categoryIdx = ${categoryIdx}`
    }

    const [rows, fields] = await connection.query(query)

    return rows
}
