export const typeDefs = /* GraphQL */ `
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

    type Visit {
        id: String!
        pin_id: String
        visit_desc: String
        visit_by: String!
        visit_with: String
        created_at: DateTime!
        created_by: String!
        updated_at: DateTime
    }
      
    type Pin {
        id: String!
        pin_name: String!
        pin_desc: String
        pin_lat: String!
        pin_long: String!
        pin_category: String!
        pin_person: String
        pin_call: String
        pin_email: String
        pin_address: String
        pin_village: String
        pin_suburb: String
        pin_city: String
        pin_country: String
        pin_image: String
        is_favorite: Boolean!
        created_at: DateTime!
        created_by: String!
        updated_at: DateTime
        deleted_at: DateTime
    }

    type Query {
        weatherForecastCaches: [WeatherForecastCache!]!
        weatherForecastCacheDetails: [WeatherForecastCacheDetail!]!
        visitHistories(start_date: DateTime!, end_date: DateTime!): [Visit!]!
        searchPins(pin_name: String, pin_category: String): [Pin!]!
    }
`;