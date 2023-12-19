import { postTodo } from '@/dao/postTodo'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const postTodoService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { categoryIdx } = req.body
    const { status } = req.body
    const { content } = req.body
    const posts = await postTodo(categoryIdx, status, content, connection)

    res.status(200).json({
        posts,
    })
}
