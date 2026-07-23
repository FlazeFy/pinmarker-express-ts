import { defineConfig } from '@playwright/test'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({
    testDir: './tests',

    use: {
        baseURL: process.env.BASE_URL,
        extraHTTPHeaders: {
            'Content-Type': 'application/json',
        },
    },

    reporter: [
        ['list'],
        ['html'],
    ],
})