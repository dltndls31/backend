import { putTodoService } from '@/services/putTodo'
import type { Connection } from 'mysql2/promise'
import type { NextApiRequest, NextApiResponse } from 'next'

export const putTodoController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await putTodoService(req, res, connection)
}
