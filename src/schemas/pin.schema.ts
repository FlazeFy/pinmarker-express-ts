export const pinSchema = /* GraphQL */ `
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

    extend type Query {
        searchPins(pin_name: String, pin_category: String): [Pin!]!
    }
`