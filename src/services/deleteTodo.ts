import { deleteTodo } from '@/dao/todo'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const deleteTodoService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { idx } = req.body
    console.log(idx)
    const posts = await deleteTodo(idx, connection)

    res.status(200).json({
        posts,
    })
}
