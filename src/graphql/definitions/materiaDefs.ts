export const materiaDefs = () => {
  return `
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

    type Query {
      materias: [Materia]
    }

    type Mutation {
      createMateria(nombre: String!, codigo: String!, cargaHoraria: Int!, electiva: Boolean, linkCampus: String, linkWhatsapp: String, promocion: Boolean): Materia
      deleteMateria(id: String!): Materia
    }
  `
}