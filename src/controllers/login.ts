import { loginService } from '@/services/login'
import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'

export const loginController = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    await loginService(req, res, connection)
}
