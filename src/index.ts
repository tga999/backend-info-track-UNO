import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { connect } from "./database/connection.js"
import { userDefs } from "./graphql/definitions/userDefs.js"
import { materiaDefs } from "./graphql/definitions/materiaDefs.js"
import { userResolver } from "./graphql/resolvers/userResolver.js"
import { materiaResolver } from "./graphql/resolvers/materiaResolver.js"

connect()

const typeDefs = [
  userDefs(),
  materiaDefs()
]

const resolvers = [
  userResolver(),
  materiaResolver()
]

//Crear server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

//Levantar server
const { url } = await startStandaloneServer(server)

console.log('Servidor corriendo en:', url)