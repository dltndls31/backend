import { deleteCategory } from '@/dao/category'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const deleteCategoryService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const { idx } = req.body
    const posts = await deleteCategory(idx, connection)

    res.status(200).json({
        posts,
    })
}
