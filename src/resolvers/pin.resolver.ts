import { Context } from "../context"
import { searchPinRepository } from "../repositories/pin.repository";

export const pinResolver = {
    Query: {
        searchPins: (
            _: any,
            { pin_name, pin_category }: { pin_name?: string; pin_category?: string },
            ctx: Context
        ) =>
            searchPinRepository(ctx.prisma, pin_name, pin_category)
    },
}