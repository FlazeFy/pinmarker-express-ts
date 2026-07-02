import { Context } from "../context"
import { validateCharLength } from "../helpers/validator.helper";
import { searchNewsRepository } from "../repositories/news.repository";

export const newsResolver = {
    Query: {
        searchNews: async (
            _: any,
            { news_title, pin_name }: { news_title?: string; pin_name?: string },
            ctx: Context
        ) => {
            news_title && validateCharLength(news_title, 'news_title', undefined, 255)
            pin_name && validateCharLength(pin_name, 'pin_name', undefined, 75)

            return searchNewsRepository(ctx.prisma, news_title, pin_name)
        },
    },
}