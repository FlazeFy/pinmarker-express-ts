import { GraphQLError } from "graphql"

export function failedRequestMessage(type:string, message: string): never {
    throw new GraphQLError(message, {
        extensions: {
            code: type,
        },
    })
}