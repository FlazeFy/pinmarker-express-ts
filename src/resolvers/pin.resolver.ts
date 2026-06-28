import { Context } from "../context"

export const pinResolver = {
    Query: {
        searchPins: (
            _: any,
            { pin_name, pin_category }: { pin_name?: string; pin_category?: string },
            ctx: Context
        ) =>
            ctx.prisma.pin.findMany({
                where: {
                    deleted_at: null,
                    ...(pin_name && { pin_name: { contains: pin_name } }),
                    ...(pin_category && { pin_category }),
                },
                orderBy: { created_at: "desc" },
            }),
    },
}