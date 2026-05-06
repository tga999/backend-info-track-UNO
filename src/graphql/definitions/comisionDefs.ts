export const comisionDefs = () => {
  return `
    type Comision {
        _id: String!
        materia: Materia!
        horario: String!
        salon: Salon
        profesores: [Profesor]
    },
    type Query {

    }   
    type Mutation{
    
    }
  `     
}   