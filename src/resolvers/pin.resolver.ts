import { Context } from "../context"
import { validateContains } from "../helpers/validator.helper";
import { searchPinRepository } from "../repositories/pin.repository";

export const pinResolver = {
    Query: {
        searchPins: (
            _: any,
            { pin_name, pin_category }: { pin_name?: string; pin_category?: string },
            ctx: Context
        ) => {
            validateContains(pin_category, ["Travel Site", "Restaurant", "Worship", "Photo Spot", "Family", "Office", "Police Spot", "Others", "Cafe", "Personal", "Friend"], "pin_category")

            return searchPinRepository(ctx.prisma, pin_name, pin_category)
        }
    },
}