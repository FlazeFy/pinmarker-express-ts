export function validateStartAndEndDateQuery(
    start_date: Date | string,
    end_date: Date | string
) {
    const start = new Date(start_date)
    const end = new Date(end_date)

    if (isNaN(start.getTime())) throw new Error("start_date must be a valid date")
    if (isNaN(end.getTime())) throw new Error("end_date must be a valid date")

    if (start > end) throw new Error("start_date must be before or equal to end_date")

    return {
        start_date: start,
        end_date: end
    }
}