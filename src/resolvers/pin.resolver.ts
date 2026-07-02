import { Context } from "../context"
import { validateCharLength, validateContains } from "../helpers/validator.helper";
import { searchPinRepository } from "../repositories/pin.repository";

export const pinResolver = {
    Query: {
        searchPins: (
            _: any,
            { pin_name, pin_category }: { pin_name?: string; pin_category?: string },
            ctx: Context
        ) => {
            pin_category && validateContains(pin_category, ["Travel Site", "Restaurant", "Worship", "Photo Spot", "Family", "Office", "Police Spot", "Others", "Cafe", "Personal", "Friend"], "pin_category")
            pin_name && validateCharLength(pin_name, 'pin_name', undefined, 75)

            return searchPinRepository(ctx.prisma, pin_name, pin_category)
        }
    },
}