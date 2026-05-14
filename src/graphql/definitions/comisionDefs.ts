export const comisionDefs = () => {
  return `
    enum SalonType {
      AULA
      LABORATORIO
    }

    type Salon {
      numero: Int!
      tipo: SalonType!
    }

    type Comision {
        id: ID!
        materia: Materia!
        horario: String!
        salon: Salon
        profesores: [Profesor]
        year: Int!
        cuatrimestre: Int!
    }
  `     
}   