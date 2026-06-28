import { Context } from "./context";

export const resolvers = {
    WeatherForecastCache: {
        details: (parent: { id: string }, _: any, ctx: Context) => ctx.prisma.weather_forecast_cache_detail.findMany({
            where: { forecast_cache_id: parent.id },
        }),
    },

    Query: {
        weatherForecastCaches: (_: any, __: any, ctx: Context) => ctx.prisma.weather_forecast_cache.findMany(),
        weatherForecastCacheDetails: (_: any, __: any, ctx: Context) => ctx.prisma.weather_forecast_cache_detail.findMany(),
        visitHistories: (
            _: any,
            { start_date, end_date }: { start_date: Date; end_date: Date },
            ctx: Context
        ) =>
            ctx.prisma.visit.findMany({
                where: {
                    created_at: {
                        gte: new Date(start_date),
                        lte: new Date(end_date),
                    },
                },
            orderBy: { created_at: "desc" },
        }),
        searchPins: (
            _: any,
            { pin_name, pin_category }: { pin_name?: string; pin_category?: string },
            ctx: Context
        ) =>
            ctx.prisma.pin.findMany({
                where: {
                    deleted_at: null,
                    ...(pin_name && { pin_name: { contains: pin_name },}),
                    ...(pin_category && { pin_category }),
                },
                orderBy: { created_at: "desc" },
        }),
    },
}