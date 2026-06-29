import { Context } from "../context"

export const dictionaryResolver = {
    Query: {
        searchDictionaries: (
            _: any, 
            { dictionary_type }: { dictionary_type?: string },
            ctx: Context
        ) => 
            ctx.prisma.dictionary.findMany({
                where: {
                    ...(dictionary_type && { dictionary_type: { equals: dictionary_type }})
                },
                orderBy: [
                    { dictionary_name: "asc" }
                ]
            })
    } 
}