import type { Connection } from 'mysql2/promise'

export const deleteCategory = async (idx: number, connection: Connection) => {
    const [rows, fields] = await connection.query(
        `DELETE FROM Category WHERE idx = "${idx}"`
    )

    return rows
}

export const getCategories = async (connection: Connection) => {
    const [rows, fields] = await connection.query(`SELECT * FROM Category`)

    return rows
}

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
