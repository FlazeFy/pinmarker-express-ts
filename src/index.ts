import express from "express"
import { createYoga } from "graphql-yoga"
import { makeExecutableSchema } from "@graphql-tools/schema"
import { typeDefs } from "./schemas"
import { prisma } from "./context"
import { resolvers } from "./resolvers"

const app = express()

const schema = makeExecutableSchema({ typeDefs, resolvers })

const yoga = createYoga({
    schema,
    context: () => ({ prisma }),
})

app.use("/graphql", yoga)

app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/graphql")
})