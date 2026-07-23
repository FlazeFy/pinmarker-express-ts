import { expect } from '@playwright/test'

export class Validator {
    static validateColumn(
        data: any | any[],
        fields: string[],
        dataType: 'string' | 'number' | 'bool_number',
        nullable: boolean
    ): void {
        // Normalize to array
        const dataArray = Array.isArray(data) ? data : [data]

        for (const item of dataArray) {
            expect(typeof item).toBe('object')
            expect(item).not.toBeNull()

            for (const field of fields) {
                expect(item).toHaveProperty(field)

                if (nullable && item[field] === null) {
                    expect(item[field]).toBeNull()
                } else {
                    switch (dataType) {
                        case 'string':
                            expect(typeof item[field]).toBe('string')
                            break

                        case 'number':
                            expect(typeof item[field]).toBe('number')

                            if (Number.isInteger(item[field])) {
                                expect(item[field] % 1).toBe(0)
                            } else {
                                expect(item[field] % 1).not.toBe(0)
                            }
                            break

                        case 'bool_number':
                            expect(Number.isInteger(item[field])).toBeTruthy()
                            expect([0, 1]).toContain(item[field])
                            break
                    }
                }
            }
        }
    }

    static validateGraphQLError(
        body: any,
        message: string,
        code: string
    ): void {
        expect(body).toHaveProperty('errors')
        expect(body.data).toBeNull()

        const error = body.errors[0]

        console.log('hello')
        console.log(error.message)

        expect(error.message.includes(message)).toBe(true)
        expect(error.extensions.code).toBe(code)
    }
}