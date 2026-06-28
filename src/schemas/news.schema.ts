export const newsSchema = /* GraphQL */ `
    type News {
        id: String!
        pin_id: String!
        news_title: String!
        news_url: String!
        news_source: String!
        published_at: DateTime!
        created_at: DateTime
        pin_name: String
        pin_lat: String
        pin_long: String
        pin_address: String
        pin_city: String
        pin_suburb: String
        pin_village: String
        pin_category: String
        pin_country: String
    }

    extend type Query {
        searchNews(news_title: String, pin_name: String): [News!]!
    }
`