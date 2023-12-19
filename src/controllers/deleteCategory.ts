import { deleteCategoryService } from '@/services/deleteCategory'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const deleteCategoriesController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await deleteCategoryService(req, res, connection)
}
