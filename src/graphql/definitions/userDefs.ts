export const userDefs = () => {
  return `
    type Usuario {
      _id: String!
      nombre: String!
      apellido: String!
      email: String!
      role: String
      materia: [Materia]
    }

    type Mutation {
      registrarUsuario(nombre: String!, apellido: String!, password: String!, email: String!): Usuario
      loguearUsuario(email: String!, password: String!): String
    }
  `
}