import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { Materia } from "./database/models/Materia.js"
import { connect } from "./database/connection.js"

connect()

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

const typeDefs = `
  type Materia {
    _id: String
    nombre: String!
    codigo: String!
    cargaHoraria: Int!
    electiva: Boolean
    linkCampus: String
    linkWhatsapp: String
    promocion: Boolean
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
    materias: [Materia]
  }

  type Mutation {
    createUser(nombre: String!, apellido: String!): Usuario
    deleteUser(nombre: String!): Usuario
    createMateria(nombre: String!, codigo: String!, cargaHoraria: Int!, electiva: Boolean, linkCampus: String, linkWhatsapp: String, promocion: Boolean): Materia
    deleteMateria(id: String!): Materia
  }
`

const resolvers = {
  Query: {
    me: () => {
      return users[0]
    },
    allUsers: () => {
      return users
    },
    materias: async () => {
      const materias = await Materia.find()
      return materias
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
    },
    createMateria: async (root, data) => {
      // TODO: VALIDACION DE DATOS

      // Creamos la materia
      const materia = new Materia(data)
      // La guardamos en la base de datos
      await materia.save()
      return materia
    },
    deleteMateria: async (root, data) => {
      const {id} = data
      const materia = await Materia.findByIdAndDelete(id)
      return materia
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