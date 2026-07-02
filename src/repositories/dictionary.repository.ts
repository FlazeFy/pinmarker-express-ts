import { Context } from "../context"

export const searchDictionaryRepository = (
    prisma: Context["prisma"],
    dictionary_type?: string
) => {
    return prisma.dictionary.findMany({
        where: {
            ...(dictionary_type && { dictionary_type: { equals: dictionary_type }})
        },
        orderBy: [
            { dictionary_name: "asc" }
        ]
    })
}