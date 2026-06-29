import { weatherForecastCacheSchema } from "./weatherForecastCache.schema"
import { visitSchema } from "./visit.schema"
import { pinSchema } from "./pin.schema"
import { newsSchema } from "./news.schema"
import { feedbackSchema } from "./feedback.schema"
import { dictionarySchema } from "./dictionary.schema"

const baseSchema = /* GraphQL */ `
    type Query
`

export const typeDefs = [
    baseSchema,
    weatherForecastCacheSchema,
    visitSchema,
    pinSchema,
    newsSchema,
    feedbackSchema,
    dictionarySchema
]