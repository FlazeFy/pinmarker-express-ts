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
    },
}