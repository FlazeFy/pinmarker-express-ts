import { Context } from "../context"
import { createFeedbackRepository, searchFeedbacksRepository } from "../repositories/feedback.repository"

export const feedbackResolver = {
    Query: {
        searchFeedbacks: (
            _: any, 
            { feedback_rate, feedback_body }: { feedback_rate?: number, feedback_body?: string },
            ctx: Context
        ) => 
            searchFeedbacksRepository(ctx.prisma, feedback_rate, feedback_body)
    },
    Mutation: {
        createFeedback: (
            _: any,
            { feedback_rate, feedback_body }: {
                feedback_rate: number
                feedback_body: string
            },
            ctx: Context
        ) =>
            createFeedbackRepository(ctx.prisma,feedback_rate, feedback_body)
    }
}