import type { NextApiRequest, NextApiResponse } from 'next'
import { Connection } from 'mysql2/promise'
import { getUser } from '@/dao/join'
import jwt from 'jsonwebtoken'

export const joinService = async (
    req: NextApiRequest,
    res: NextApiResponse<any>,
    connection: Connection
) => {
    const result = await getUser(req.body.email, connection)

    if (Array.isArray(result) && result.length === 0) {
        res.status(400).json({
            error: {
                message: '해당하는 유저가 없습니다.',
            },
        })
    }

    const user = (result as any)[0]

    if (user.password !== req.body.password) {
        res.status(400).json({
            error: {
                message: '비밀번호가 틀립니다.',
            },
        })
    }

    const token = jwt.sign(
        {
            idx: user.idx,
            name: user.name,
            id: user.id,
            password: user.password,
            email: user.email,
            phonenumber: user.phonenumber,
            birthday: user.birthday,
        },
        'asdffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
    )

    res.status(200).json({ token: token })
}
