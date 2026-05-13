export const userDefs = () => {
  return `
    enum UserRole {
      ADMIN
      USER
    }

    type Usuario {
      _id: String!
      nombre: String!
      apellido: String!
      email: String!
      role: UserRole!
      materia: [Materia]
    }

    type Query {
      me: Usuario
    }

    type Mutation {
      registrarUsuario(nombre: String!, apellido: String!, password: String!, email: String!): Usuario
      loguearUsuario(email: String!, password: String!): String
    }
  `
}