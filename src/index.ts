import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { Carrera } from "./infrastructure/database/models/Carrera.js"
import { Materia } from "./infrastructure/database/models/Materia.js"
import { Profesor } from "./infrastructure/database/models/Profesor.js"
import { User } from "./infrastructure/database/models/User.js"
import { Comision } from "./infrastructure/database/models/Comision.js"
import { PlanEstudio } from "./infrastructure/database/models/PlanEstudio.js"

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
    },
    /*
    materias: async () => {
      return await Materia.find();
    },
    carreras: async () => {
      return await Carrera.find();
    },
    professors: async () => {
      return await Profesor.find();
    },
    planestudios: async () => {
      return await PlanEstudio.find();
    },
    comisiones: async () => {
      return await Comision.find();
    },
    users: async () => {
      return await User.find();
    }*/
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
    deleteUser: ( _root, data) => {
      const {nombre} = data
      const user = users.find(user => user.nombre === nombre)
      if(!user) throw Error('USUARIO NO ENCONTRADO BOLUDITO')
      users = users.filter(user => user.nombre !== nombre)
      return user
    }
  }
}

//Crear server
const server = new ApolloServer({
  typeDefs,
  resolvers
})

//Levantar server

const { url } = await startStandaloneServer(server)

console.log('Servidor corriendo en:', url)