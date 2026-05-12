export const comisionDefs = () => {
  return `
    enum SalonType {
      AULA
      LABORATORIO
    }

    type Salon {
      numero: Int!
      tipo: SalonType
    }

    type Comision {
        _id: String!
        materia: Materia!
        horario: String!
        salon: Salon
        profesores: [Profesor]
    }
  `     
}   