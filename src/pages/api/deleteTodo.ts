import { deleteTodoController } from '@/controllers/deleteTodo'
import { createConnection } from '@/utils/mysql'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const connection = await createConnection()

    if (req.method === 'DELETE') {
        await deleteTodoController(req, res, connection)
    } else {
        res.status(400).json({
            error: {
                message: '해당 메서드는 지원하지 않습니다.',
            },
        })
    }
}
