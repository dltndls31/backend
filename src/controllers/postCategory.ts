import { postCategoryService } from '@/services/postCategory'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const postCategoryController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await postCategoryService(req, res, connection)
}
