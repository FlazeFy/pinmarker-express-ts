export const userSchema = /* GraphQL */ `
    type UserSummary {
        id: String!
        fullname: String!
        username: String!
        email: String!
        img_url: String
        total_pin: Int!
        total_review: Int!
        total_visit: Int!
        created_at: String
    }

    extend type Query {
        searchUsers: [UserSummary!]!
    }
`