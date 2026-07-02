import { Context } from "../context"
import { validateStartAndEndDateQuery } from "../helpers/validator.helper";
import { searchVisitHistoryRepository } from "../repositories/visit.repository";

export const visitResolver = {
    Query: {
        visitHistories: (
            _: any,
            { start_date, end_date }: { start_date: Date; end_date: Date },
            ctx: Context
        ) => {
            const { start_date: start, end_date: end } = validateStartAndEndDateQuery(start_date, end_date)

            return searchVisitHistoryRepository(ctx.prisma, start, end)
        }
    }
}