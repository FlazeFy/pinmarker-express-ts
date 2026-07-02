export const feedbackSchema = /* GraphQL */ `
    type Feedback {
        id: String!
        feedback_rate: Int!
        feedback_body: String!
        created_at: DateTime
    }

    extend type Query {
        searchFeedbacks(feedback_rate: Int, feedback_body: String): [Feedback!]!
    }

    extend type Mutation {
        createFeedback(
            feedback_rate: Int!
            feedback_body: String!
        ): Feedback!
    }
`