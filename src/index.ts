import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"

const typeDefs = `

  type Materia {
    nombre: String!
    codigo: Int!
  }

  type Usuario {
    nombre: String
    apellido: String
    role: String
    materia: [Materia]
  }

  type Query {
    me: Usuario
    allUsers: [Usuario]
  }

  type Mutation {
    createUser(nombre: String!, apellido: String!): Usuario
    deleteUser(nombre: String!): Usuario
  }
`

let users = [
  {
    nombre: 'Ulises',
    apellido: 'Paz',
    role: 'admin',
    materia: [
      {
        nombre: 'Análisis Matematico 1',
        codigo: 123
      },
      {
        nombre: 'Programación Web 1',
        codigo: 4123
      },
      {
        nombre: 'Trabajo Social Obligatorio',
        codigo: 123123
      }
    ]
  },
  {
    nombre: 'Danyel',
    apellido: 'Salazar',
    role: 'user',
    materia: [
      {
        nombre: 'Análisis Matematico 1',
        codigo: 4124
      },
      {
        nombre: 'Programación Web 1',
        codigo: 12313
      },
      {
        nombre: 'Economía Ecológica 1',
        codigo: 51214
      },
      {
        nombre: 'Turismo',
        codigo: 12143
      }
    ]
  }
]

const resolvers = {
  Query: {
    me: () => {
      return users[0]
    },
    allUsers: () => {
      return users
    }
  },
  Mutation: {
    createUser: (root, data) => {
      const {nombre, apellido} = data
      const user = {
        nombre: nombre,
        apellido: apellido,
        role: 'user'
      }
      users.push(user)
      return user
    },
    deleteUser: (root, data) => {
      const {nombre} = data
      const user = users.find(user => user.nombre === nombre)
      if(!user) throw Error('USUARIO NO ENCONTRADO BOLUDITO')
      users = users.filter(user => user.nombre !== nombre)
      return user
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server)

console.log('Servidor corriendo en:', url)