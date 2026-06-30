import { weatherForecastCacheResolver } from "./weatherForecastCache.resolver"
import { visitResolver } from "./visit.resolver"
import { pinResolver } from "./pin.resolver"
import { newsResolver } from "./news.resolver"
import { feedbackResolver } from "./feedback.resolver"
import { dictionaryResolver } from "./dictionary.resolver"
import { userResolver } from "./user.resolver"

export const resolvers = {
    ...weatherForecastCacheResolver,
    Query: {
        ...weatherForecastCacheResolver.Query,
        ...visitResolver.Query,
        ...pinResolver.Query,
        ...newsResolver.Query,
        ...feedbackResolver.Query,
        ...dictionaryResolver.Query,
        ...userResolver.Query
    },
}