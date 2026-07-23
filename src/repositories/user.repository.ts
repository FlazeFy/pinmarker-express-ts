import { Context } from "../context"
import { user as UserModel } from '../generated/prisma/index'

export const searchUsersRepository = async (
    prisma: Context["prisma"],
    search?: string
) => {
    const users = await prisma.user.findMany({
        where: {
            OR: [
                { username: { contains: search } },
                { email: { contains: search } },
                { fullname: { contains: search } }
            ]
        },
        orderBy: {
            created_at: "desc"
        }
    })

    return Promise.all(
        users.map(async (user: UserModel) => {
            const [total_pin, total_visit, total_review] =
                await Promise.all([
                    prisma.pin.count({
                        where: {
                            created_by: user.id,
                            deleted_at: null
                        }
                    }),
                    prisma.visit.count({
                        where: {
                            created_by: user.id,
                            pin: {
                                deleted_at: null
                            }
                        }
                    }),
                    prisma.review.count({
                        where: {
                            created_by: user.id,
                            visit: {
                                pin: {
                                    deleted_at: null
                                }
                            }
                        }
                    })
                ])

            return { ...user, total_pin, total_visit, total_review }
        })
    )
}