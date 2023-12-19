import { getCategoriesService } from '@/services/getCategories'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const getCategoriesController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await getCategoriesService(req, res, connection)
}
