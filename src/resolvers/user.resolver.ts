import { Context } from "../context"
import { validateCharLength } from "../helpers/validator.helper"
import { searchUsersRepository } from "../repositories/user.repository"

export const userResolver = {
    Query: {
        searchUsers: async (_: any, { search }: { search?: string }, ctx: Context) => {
            search && validateCharLength(search, 'search', undefined, 255)

            return searchUsersRepository(ctx.prisma, search)
        },
    },
}