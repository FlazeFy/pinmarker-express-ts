import { test, expect } from '@playwright/test'
import GraphQLClient from './client'
import { Validator } from '../helpers/validator'

test.describe('Query: Search Dictionary', () => {
    let graphql: GraphQLClient

    test.beforeEach(async () => {
        graphql = new GraphQLClient()
        await graphql.initialize()
    })

    test('SearchDictionaryReturnsValidList', async () => {
        // Query
        const query = `
            query searchDictionaries {
                searchDictionaries(dictionary_type: "pin_category") {
                    created_by dictionary_color dictionary_icon dictionary_type dictionary_name id
                }
            }
        `

        // Execute
        const response = await graphql.execute(query)

        // Validate status code
        expect(response.status).toBe(200)

        // Validate GraphQL error
        expect(response.body.errors).toBeUndefined()

        // Validate response
        expect(response.body.data).toHaveProperty('searchDictionaries')
        const dictionaries = response.body.data.searchDictionaries

        // Validate items not empty
        expect(Array.isArray(dictionaries)).toBeTruthy()
        expect(dictionaries.length).toBeGreaterThan(0)

        // Validate each column
        const stringFields: string[] = ['id', 'dictionary_name', 'dictionary_type']
        Validator.validateColumn(dictionaries, stringFields, 'string', false)

        const stringNullableFields: string[] = ['dictionary_color', 'dictionary_icon', 'created_by']
        Validator.validateColumn(dictionaries, stringNullableFields, 'string', true)
    })

    test('SearchDictionaryWithInvalidDictionaryType', async () => {
        // Query
        const query = `
            query searchDictionaries {
                searchDictionaries(dictionary_type: "pin_invalid") {
                    created_by dictionary_color dictionary_icon dictionary_type dictionary_name id
                }
            }
        `

        // Execute
        const response = await graphql.execute(query)

        // Validate status code
        expect(response.status).toBe(200)

        // Validate GraphQL error
        expect(response.body.errors).toBeDefined()

        // Validate response
        Validator.validateGraphQLError(response.body, "dictionary_type value must be one of", "BAD_USER_INPUT")
    })
})