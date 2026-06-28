export const visitSchema = /* GraphQL */ `
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

    extend type Query {
        visitHistories(start_date: DateTime!, end_date: DateTime!): [Visit!]!
    }
`