import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { connect } from "./database/connection.js"
import { userDefs } from "./graphql/definitions/userDefs.js"
import { materiaDefs } from "./graphql/definitions/materiaDefs.js"
import { userResolver } from "./graphql/resolvers/userResolver.js"
import { materiaResolver } from "./graphql/resolvers/materiaResolver.js"
import { carreraDefs } from "./graphql/definitions/carreraDefs.js"
import { comisionDefs } from "./graphql/definitions/comisionDefs.js"
import { carreraResolver } from "./graphql/resolvers/carreraResolver.js"
import { comisionResolver } from "./graphql/resolvers/comisionResolver.js"
import { planEstudioDefs } from "./graphql/definitions/planEstudioDefs.js"
import { planEstudioResolver } from "./graphql/resolvers/planEstudioResolver.js"
import { profesorDefs } from "./graphql/definitions/profesorDefs.js"
import { profesorResolver } from "./graphql/resolvers/profesorResolver.js"

connect()

const typeDefs = [
  userDefs(),
  materiaDefs(),
  carreraDefs(),
  comisionDefs(),
  planEstudioDefs(),
  profesorDefs()
]

const resolvers = [
  userResolver(),
  materiaResolver(),
  carreraResolver(),
  comisionResolver(),
  planEstudioResolver(),
  profesorResolver()
]

//Crear server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

//Levantar server
const { url } = await startStandaloneServer(server)

console.log('Servidor corriendo en:', url)