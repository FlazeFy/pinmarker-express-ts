import { randomUUID } from "crypto"
import { Context } from "../context"

export const searchFeedbacksRepository = (
    prisma: Context["prisma"],
    feedback_rate?: number,
    feedback_body?: string
) => {
    return prisma.feedback.findMany({
        where: {
            ...(feedback_rate && {
                feedback_rate: {
                    equals: feedback_rate
                }
            }),
            ...(feedback_body && {
                feedback_body: {
                    contains: feedback_body
                }
            })
        },
        orderBy: [
            { feedback_rate: "desc" },
            { created_at: "desc" }
        ]
    })
}

export const createFeedbackRepository = (
    prisma: Context["prisma"],
    feedback_rate: number,
    feedback_body: string
) => {
    return prisma.feedback.create({
        data: {
            id: randomUUID(),
            feedback_rate,
            feedback_body,
            created_at: new Date()
        }
    })
}