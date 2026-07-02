import { Context } from "../context"
import { searchVisitHistoryRepository } from "../repositories/visit.repository";

export const visitResolver = {
    Query: {
        visitHistories: (
            _: any,
            { start_date, end_date }: { start_date: Date; end_date: Date },
            ctx: Context
        ) =>
            searchVisitHistoryRepository(ctx.prisma, start_date, end_date)
    }
}