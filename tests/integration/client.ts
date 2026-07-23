import { APIRequestContext, request } from '@playwright/test'

export default class GraphQLClient {
    private api!: APIRequestContext

    async initialize() {
        this.api = await request.newContext({
            baseURL: process.env.API_URL,
            extraHTTPHeaders: {
                'Content-Type': 'application/json'
            }
        })
    }

    async execute(query: string, variables: object = {}) {
        const response = await this.api.post('/graphql', {
            data: {
                query,
                variables
            }
        })

        return {
            status: response.status(),
            body: await response.json()
        }
    }
}