import { Context } from "../context"
import { searchDictionaryRepository } from "../repositories/dictionary.repository"

export const dictionaryResolver = {
    Query: {
        searchDictionaries: (
            _: any, 
            { dictionary_type }: { dictionary_type?: string },
            ctx: Context
        ) => 
            searchDictionaryRepository(ctx.prisma, dictionary_type)
    } 
}