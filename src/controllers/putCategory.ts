import { putCategoryService } from '@/services/putCategory'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const putCategoryController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await putCategoryService(req, res, connection)
}
