import { postCategory } from '@/dao/postCategory'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const postCategoryService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { name } = req.body
    const { color } = req.body
    const posts = await postCategory(name, color, connection)

    res.status(200).json({
        posts,
    })
}
