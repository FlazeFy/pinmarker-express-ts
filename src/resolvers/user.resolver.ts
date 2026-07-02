import { Context } from "../context"
import { searchUsersRepository } from "../repositories/user.repository"

export const userResolver = {
    Query: {
        searchUsers: async (_: any, { search }: { search?: string }, ctx: Context) => {
            searchUsersRepository(ctx.prisma, search)
        },
    },
}