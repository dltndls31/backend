import { joinService } from '@/services/join'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'

export const joinController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await joinService(req, res, connection)
}
