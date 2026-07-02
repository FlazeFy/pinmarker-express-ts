import { Context } from "../context"

export const searchPinRepository = (
    prisma: Context["prisma"],
    pin_name?: string,
    pin_category?: string
) => {
    return prisma.pin.findMany({
        where: {
            deleted_at: null,
            ...(pin_name && { pin_name: { contains: pin_name } }),
            ...(pin_category && { pin_category }),
        },
        orderBy: { created_at: "desc" },
    })
}