export const dictionarySchema = /* GraphQL */ `
    type Dictionary {
        id: String!
        dictionary_type: String!
        dictionary_name: String!
        dictionary_color: String
        dictionary_icon: String
        created_by: String
    }

    extend type Query {
        searchDictionaries(dictionary_type: String): [Dictionary!]!
    }
`