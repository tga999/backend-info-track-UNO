export const materiaDefs = () => {
  return `
    type Materia {
      id: ID!
      nombre: String!
      cargaHorariaTotal: Int!
      cargaHorariaSemanal: Int!
      electiva: Boolean
      linkCampus: String
      linkWhatsapp: String
      promocion: Boolean
    }

    type Query {
      materias: [Materia]
    }

    type Mutation {
      createMateria(nombre: String!, codigo: String!, cargaHoraria: Int!, electiva: Boolean, linkCampus: String, linkWhatsapp: String, promocion: Boolean): Materia
      deleteMateria(id: String!): Materia
    }
  `
}