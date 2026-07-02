import { Context } from "../context"
import { validateContains } from "../helpers/validator.helper"
import { searchDictionaryRepository } from "../repositories/dictionary.repository"

export const dictionaryResolver = {
    Query: {
        searchDictionaries: (
            _: any, 
            { dictionary_type }: { dictionary_type?: string },
            ctx: Context
        ) => {
            validateContains(dictionary_type, ["pin_category", "visit_by"], "dictionary_type")
            
            return searchDictionaryRepository(ctx.prisma, dictionary_type)
        }
    } 
}