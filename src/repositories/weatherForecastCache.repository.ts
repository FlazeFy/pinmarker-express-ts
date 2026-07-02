import { Context } from "../context"

export const getWeatherForecastCachesRepository = (
    prisma: Context["prisma"]
) => {
    return prisma.weather_forecast_cache.findMany()
}

export const getWeatherForecastCacheDetailsRepository = (
    prisma: Context["prisma"]
) => {
    return prisma.weather_forecast_cache_detail.findMany()
}

export const getWeatherForecastCacheDetailByForecastRepository = (
    prisma: Context["prisma"],
    forecast_cache_id: string
) => {
    return prisma.weather_forecast_cache_detail.findMany({
        where: {
            forecast_cache_id
        }
    })
}