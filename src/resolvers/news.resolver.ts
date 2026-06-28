import { Context } from "../context"

export const newsResolver = {
    Query: {
        searchNews: async (
            _: any,
            { news_title, pin_name }: { news_title?: string; pin_name?: string },
            ctx: Context
        ) => {
            let pin_ids: string[] = []

            // Search by pin_name first if provided
            if (pin_name) {
                const pins = await ctx.prisma.pin.findMany({
                    where: {
                        deleted_at: null,
                        pin_name: { contains: pin_name },
                    },
                    select: { id: true },
                })
                pin_ids = pins.map((p) => p.id)
            }

            const res = await ctx.prisma.news.findMany({
                where: {
                    ...(news_title && { news_title: { contains: news_title } }),
                    ...(pin_ids.length > 0 && { pin_id: { in: pin_ids } }),
                },
                orderBy: { created_at: "desc" },
                select: {
                    pin_id: true, news_title: true, id: true, created_at: true, published_at: true, news_source: true, news_url: true,
                    pin: {
                        select: {
                            pin_address: true, pin_name: true, pin_lat: true, pin_long: true, pin_category: true, pin_city: true, pin_country: true, pin_suburb: true, pin_village: true
                        }
                    }
                }
            })

            return res.map((n) => ({
                ...n,
                pin_name: n.pin?.pin_name ?? null,
                pin_lat: n.pin?.pin_lat ?? null,
                pin_long: n.pin?.pin_long ?? null,
                pin_address: n.pin?.pin_address ?? null, 
                pin_category: n.pin?.pin_category ?? null, 
                pin_city: n.pin?.pin_city ?? null,
                pin_country: n.pin?.pin_country ?? null,
                pin_suburb: n.pin?.pin_suburb ?? null,
                pin_village: n.pin?.pin_village ?? null
            }))
        },
    },
}