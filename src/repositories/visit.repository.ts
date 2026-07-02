import { Context } from "../context"

export const searchVisitHistoryRepository = (
    prisma: Context["prisma"],
    start_date: Date,
    end_date: Date
) => {
    return prisma.visit.findMany({
        where: {
            created_at: {
                gte: new Date(start_date), lte: new Date(end_date),
            },
        },
        orderBy: { created_at: "desc" },
    })
}