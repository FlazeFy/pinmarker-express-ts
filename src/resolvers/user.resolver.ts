import { Context } from "../context"

export const userResolver = {
    Query: {
        searchUsers: async (_: any, __: any, ctx: Context) => {
            const users = await ctx.prisma.user.findMany({
                orderBy: { created_at: "desc" },
            })

            return Promise.all(
                users.map(async (user) => {
                    const [total_pin, total_visit, total_review] = await Promise.all([
                        ctx.prisma.pin.count({
                            where: {
                                created_by: user.id,
                                deleted_at: null,
                            },
                        }),
                        ctx.prisma.visit.count({
                            where: {
                                created_by: user.id,
                                pin: {
                                    deleted_at: null,
                                },
                            },
                        }),
                        ctx.prisma.review.count({
                            where: {
                                created_by: user.id,
                                visit: {
                                    pin: {
                                        deleted_at: null,
                                    },
                                },
                            },
                        }),
                    ])

                    return {
                        ...user, total_pin, total_visit, total_review,
                    }
                })
            )
        },
    },
}