import { getCategories } from '@/dao/category'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const getCategoriesService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const posts = await getCategories(connection)

    res.status(200).json({
        posts,
    })
}
