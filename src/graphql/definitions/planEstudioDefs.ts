export const planEstudioDefs = () => {
    return `
        type PlanEstudio {
            _id: String!
            nombre: String!
            materias: [Materia]
        },  
        type Query {

        },
        type Mutation {
    
        }
    `
}