import { putTodo } from '@/dao/todo'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const putTodoService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { idx } = req.body
    const { categoryIdx } = req.body
    const { status } = req.body
    const { content } = req.body
    const posts = await putTodo(idx, categoryIdx, status, content, connection)

    res.status(200).json({
        posts,
    })
}
