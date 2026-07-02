import { Context } from "../context"
import { searchNewsRepository } from "../repositories/news.repository";

export const newsResolver = {
    Query: {
        searchNews: async (
            _: any,
            { news_title, pin_name }: { news_title?: string; pin_name?: string },
            ctx: Context
        ) => {
            searchNewsRepository(ctx.prisma, news_title, pin_name)
        },
    },
}