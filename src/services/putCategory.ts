import { putCategory } from '@/dao/category'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const putCategoryService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { idx } = req.body
    const { name } = req.body
    const { color } = req.body
    const posts = await putCategory(idx, name, color, connection)

    res.status(200).json({
        posts,
    })
}
