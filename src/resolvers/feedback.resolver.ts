import { Context } from "../context"

export const feedbackResolver = {
    Query: {
        searchFeedbacks: (
            _: any, 
            { feedback_rate, feedback_body }: { feedback_rate?: number, feedback_body?: string },
            ctx: Context
        ) => 
            ctx.prisma.feedback.findMany({
                where: {
                    ...(feedback_rate && { feedback_rate: { equals: feedback_rate }}),
                    ...(feedback_body && { feedback_body: { contains: feedback_body }})
                },
                orderBy: [
                    { feedback_rate: "desc" },
                    { created_at: "desc" },
                ]
            })
    } 
}