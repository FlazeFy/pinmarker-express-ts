import { Context } from "../context"
import { getWeatherForecastCacheDetailByForecastRepository, getWeatherForecastCacheDetailsRepository, getWeatherForecastCachesRepository } from "../repositories/weatherForecastCache.repository"

export const weatherForecastCacheResolver = {
    WeatherForecastCache: {
        details: (parent: { id: string }, _: any, ctx: Context) =>
            getWeatherForecastCacheDetailByForecastRepository(ctx.prisma, parent.id)
    },
    Query: {
        weatherForecastCaches: (_: any, __: any, ctx: Context) =>
            getWeatherForecastCachesRepository(ctx.prisma),
        weatherForecastCacheDetails: (_: any, __: any, ctx: Context) =>
            getWeatherForecastCacheDetailsRepository(ctx.prisma)
    },
}