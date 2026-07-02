import { Context } from "../context"
import { validateCharLength } from "../helpers/validator.helper"
import { createFeedbackRepository, searchFeedbacksRepository } from "../repositories/feedback.repository"

export const feedbackResolver = {
    Query: {
        searchFeedbacks: (
            _: any, 
            { feedback_rate, feedback_body }: { feedback_rate?: number, feedback_body?: string },
            ctx: Context
        ) => {
            feedback_body && validateCharLength(feedback_body, 'feedback_body', undefined, 255)

            return searchFeedbacksRepository(ctx.prisma, feedback_rate, feedback_body)
        }
    },
    Mutation: {
        createFeedback: (
            _: any,
            { feedback_rate, feedback_body }: {
                feedback_rate: number
                feedback_body: string
            },
            ctx: Context
        ) => {
            validateCharLength(feedback_body, 'feedback_body', undefined, 255)

            return createFeedbackRepository(ctx.prisma,feedback_rate, feedback_body)
        }
    }
}