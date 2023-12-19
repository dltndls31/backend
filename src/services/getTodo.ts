import { getTodo } from '@/dao/getTodo'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const getTodoService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const posts = await getTodo(connection)

    res.status(200).json({
        posts,
    })
}
