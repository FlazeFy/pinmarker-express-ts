export const weatherForecastCacheSchema = /* GraphQL */ `
    scalar DateTime
    scalar Decimal

    type WeatherForecastCache {
        id: String!
        related_pin_id: String
        latitude: String!
        longitude: String!
        start_date: DateTime!
        end_date: DateTime!
        timezone: String!
        created_at: DateTime!
        details: [WeatherForecastCacheDetail!]!
    }

    type WeatherForecastCacheDetail {
        id: String!
        forecast_cache_id: String!
        forecast_datetime: DateTime!
        weather_code: Int!
        temperature: Decimal!
        feels_like: Decimal!
        humidity: Int!
        wind_speed: Decimal!
        aqi: Int
        pm2_5: Decimal!
        pm10: Decimal!
        carbon_monoxide: Decimal!
        nitrogen_dioxide: Decimal!
    }

    extend type Query {
        weatherForecastCaches: [WeatherForecastCache!]!
        weatherForecastCacheDetails: [WeatherForecastCacheDetail!]!
    }
`