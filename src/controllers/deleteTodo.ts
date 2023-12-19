import { deleteTodoService } from '@/services/deleteTodo'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const deleteTodoController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await deleteTodoService(req, res, connection)
}
