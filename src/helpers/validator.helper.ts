import { failedRequestMessage } from "./message.helper"

export function validateStartAndEndDateQuery(start_date: Date | string, end_date: Date | string) {
    if (!start_date || !end_date) failedRequestMessage("BAD_USER_INPUT", "start_date and end_date are required")

    const start = new Date(start_date)
    const end = new Date(end_date)

    if (isNaN(start.getTime())) failedRequestMessage("BAD_USER_INPUT", "start_date must be a valid date")
    if (isNaN(end.getTime())) failedRequestMessage("BAD_USER_INPUT", "end_date must be a valid date")
    if (start > end) failedRequestMessage("BAD_USER_INPUT", "start_date must be before or equal to end_date")

    return {
        start_date: start,
        end_date: end,
    }
}

export function validateContains(target: string | undefined, allowed: string[], col_name: string) {
    if (!target) failedRequestMessage("BAD_USER_INPUT", `${col_name} is required`)
    if (!allowed.includes(target)) failedRequestMessage("BAD_USER_INPUT", `${col_name} value must be one of: ${allowed.join(", ")}`)

    return target
}

export function validateCharLength(target: string | undefined, field: string, min?: number, max?: number) {
    if (!target) return

    if ((min !== undefined && target.length < min) || (max !== undefined && target.length > max))
        failedRequestMessage(
            "BAD_USER_INPUT",
            min !== undefined && max !== undefined
                ? `${field} must be between ${min} and ${max} characters`
                : min !== undefined
                    ? `${field} must be at least ${min} characters`
                    : `${field} must not exceed ${max} characters`
        )

    return target
}