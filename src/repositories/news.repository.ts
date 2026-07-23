import { Context } from "../context"
import { Prisma } from "../generated/prisma/client"

export const searchNewsRepository = async (
    prisma: Context["prisma"],
    news_title?: string,
    pin_name?: string
) => {
    let pin_ids: string[] = []

    if (pin_name) {
        const pins = await prisma.pin.findMany({
            where: {
                deleted_at: null,
                pin_name: {
                    contains: pin_name
                }
            },
            select: {
                id: true
            }
        })

        pin_ids = pins.map((p: { id: string }) => p.id)
    }

    const news = await prisma.news.findMany({
        where: {
            ...(news_title && {
                news_title: {
                    contains: news_title
                }
            }),
            ...(pin_ids.length > 0 && {
                pin_id: {
                    in: pin_ids
                }
            })
        },
        orderBy: {
            created_at: "desc"
        },
        select: {
            id: true, pin_id: true, news_title: true, created_at: true, published_at: true, news_source: true, news_url: true,
            pin: {
                select: {
                    pin_name: true, pin_lat: true, pin_long: true, pin_address: true, pin_category: true, pin_city: true, pin_country: true, pin_suburb: true, pin_village: true
                }
            }
        }
    })

    type NewsWithPin = (typeof news)[number]

    return news.map((n: NewsWithPin) => ({
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
}