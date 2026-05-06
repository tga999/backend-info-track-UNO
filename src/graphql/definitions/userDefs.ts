export const userDefs = () => {
  return `
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
}