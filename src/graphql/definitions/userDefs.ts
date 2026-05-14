export const userDefs = () => {
  return `

    enum EstadoMateria {
      APROBADA
      REGULARIZADA
      CURSANDO
      PROMOCIONADA
    }

    enum UserRole {
      ADMIN
      USER
    }

    type MateriaUsuario {
      materiaId: ID!
      year: Int!
      cuatrimestre: Int!
      notaFinal: Int
      estado: EstadoMateria!
      llamadosUsados: Int
      vencimiento: String
    }

    type Usuario {
      id: ID!
      nombre: String!
      apellido: String!
      email: String!
      role: UserRole!
      materias: [MateriaUsuario]
    }

    type Query {
      me: Usuario
    }

    type Mutation {
      registrarUsuario(nombre: String!, apellido: String!, password: String!, email: String!): Usuario
      loguearUsuario(email: String!, password: String!): String
      establecerEstadoMateria(idMateria: String!, estado: EstadoMateria!, year: Int!, cuatrimestre: Int!, nota: Int): Usuario
    }
  `
}