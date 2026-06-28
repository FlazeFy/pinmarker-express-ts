import { Context } from "../context"

export const visitResolver = {
    Query: {
        visitHistories: (
            _: any,
            { start_date, end_date }: { start_date: Date; end_date: Date },
            ctx: Context
        ) =>
            ctx.prisma.visit.findMany({
                where: {
                    created_at: {
                        gte: new Date(start_date), lte: new Date(end_date),
                    },
                },
                orderBy: { created_at: "desc" },
            }),
    },
}