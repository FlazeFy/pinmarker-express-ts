import { weatherForecastCacheResolver } from "./weatherForecastCache.resolver"
import { visitResolver } from "./visit.resolver"
import { pinResolver } from "./pin.resolver"
import { newsResolver } from "./news.resolver"
import { feedbackResolver } from "./feedback.resolver"

export const resolvers = {
    ...weatherForecastCacheResolver,
    Query: {
        ...weatherForecastCacheResolver.Query,
        ...visitResolver.Query,
        ...pinResolver.Query,
        ...newsResolver.Query,
        ...feedbackResolver.Query
    },
}